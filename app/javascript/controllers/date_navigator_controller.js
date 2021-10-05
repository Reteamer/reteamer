import { Controller } from "stimulus"
import * as d3 from "d3"

export default class extends Controller {
  static targets = [ "dateInput" ]

  handleNewData(event) {
    this.histogramData = event.detail.histogram
    this.histogramData.forEach(function(d) {
      d.date = Date.parse(d.date);
    });
    this.renderChart()
  }
  handleChange(event) {
    this.emitNewDateEvent(new Date(event.target.value))
  }

  emitNewDateEvent(newDate) {
    const dateChangedEvent = new CustomEvent("datePicked",
      {
        detail: {
          newDate: newDate
        }
      }
    )
    window.dispatchEvent(dateChangedEvent)
  }

  connect() {
    const self = this;

    self.margin = {
      top: 20,
      right: 80,
      bottom: 30,
      left: 50
    }
    self.height = 80 - self.margin.top - self.margin.bottom;
    self.y = d3.scaleSqrt()
      .exponent(0.1)
      .range([self.height, 0]);

    self.svg = d3.create("svg")
      .attr("height", self.height + self.margin.top + self.margin.bottom)
      .attr("width", "100%");
    self.element.appendChild(self.svg.node()); //must do this before we can read the width of the node

    self.width = self.svg.node().clientWidth - self.margin.left - self.margin.right;
    self.x = d3.scaleUtc().range([0, self.width]);
    self.xAxis = d3.axisBottom(self.x)

    self.barLayer = self.xAxisElement = self.svg.append("g")
      .attr("class", "bar-layer") // append this layer first so the chart doesn't hide the cursor and markers

    self.selectedDateMarker = self.svg.append("path")
      .attr("class", "date-marker")
      .style("stroke", "yellow")
      .style("stroke-width", "1px")
      .style("opacity", "1")

    self.todayMarker = self.svg.append("path")
      .style("stroke", "red")
      .style("stroke-width", "1px")
      .style("opacity", "1")

    self.chartCursor = self.svg.append("g")
      .attr("class", "mouse-over-effects");

    self.chartCursor.append("path") // this is the black vertical line to follow mouse
      .attr("class", "cursor-line")
      .style("stroke", "black")
      .style("stroke-width", "1px")
      .style("opacity", "0");

    self.xAxisElement = self.svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + self.height + ")")

    self.mouseLine = self.svg.append("g")
      .attr("class", "mouse-per-line");

    self.mouseLine.append("text")
      .attr("transform", "translate(10,3)")
      .attr("class", "cursor-changes")
    self.mouseLine.append("text")
      .attr("transform", "translate(10,13)")
      .attr("class", "cursor-date")

    self.mouseMovementRectangle = self.chartCursor.append('svg:rect') // append a rect to catch mouse movements on canvas
      .attr('width', self.width) // can't catch mouse events on a g element
      .attr('height', self.height)
      .attr('fill', 'none')
      .attr('pointer-events', 'all')
    self.mouseMovementRectangle
      .on('mouseout', function() { // on mouse out hide line, circles and text
        d3.select(".cursor-line")
          .style("opacity", "0");
        d3.selectAll(".mouse-per-line text")
          .style("opacity", "0");
      })
      .on('mouseover', function() { // on mouse in show line, circles and text
        d3.select(".cursor-line")
          .style("opacity", "1");
        d3.selectAll(".mouse-per-line text")
          .style("opacity", "1");
      })
      .on('click', function(event) { // on mouse in show line, circles and text
        var mouse = d3.pointer(event);
        var xDate = self.x.invert(mouse[0])

        d3.select(".date-marker")
          .attr("d", function() {
            var d = "M" + mouse[0] + "," + self.height;
            d += " " + mouse[0] + "," + 0;
            return d;
          });
        let newDate = xDate.toISOString().split('T')[0];
        self.dateInputTarget.value = newDate;
        self.emitNewDateEvent(newDate)
      })
      .on('mousemove', function(event) { // mouse moving over canvas
        var mouse = d3.pointer(event);
        d3.select(".cursor-line")
          .attr("d", function() {
            var d = "M" + mouse[0] + "," + self.height;
            d += " " + mouse[0] + "," + 0;
            return d;
          });

        d3.selectAll(".mouse-per-line")
          .attr("transform", function(d, i) {
            d3.select(this).select('text.cursor-date')
              .text(self.x.invert(mouse[0]).toISOString().split('T')[0])

            return "translate(" + mouse[0] + ",0)";
          });
      });
  }

  renderChart() {
    const self = this;
    const data = self.histogramData;

    self.xExtent = d3.extent(data, function(d) {
      return d.date;
    });

    self.x.domain(
      [
        new Date(self.xExtent[0]).setDate(new Date(self.xExtent[0]).getDate()-30),
        new Date(self.xExtent[1]).setDate(new Date(self.xExtent[1]).getDate()+30)
      ]
    );

    self.y.domain([
      0,
      d3.max(data, function(d) {
        return d.value;
      })
    ]);

    self.xAxisElement.call(self.xAxis);

    self.todayMarker.attr("d", function() {
      const xLocation = self.x(new Date());
      var d = "M" + xLocation + "," + self.height;
      d += " " + xLocation + "," + 0;
      return d;
    });

    self.selectedDate = new Date(self.dateInputTarget.value);
    self.selectedDateMarker.attr("d", function() {
      var d = "M" + self.x(self.selectedDate) + "," + self.height;
      d += " " + self.x(self.selectedDate) + "," + 0;
      return d;
    });


    self.svg
      .select(".bar-layer")
      .selectAll(".change-counts")
      .data(data)
      .enter()
      .append("rect")
      .attr("class", "change-counts")
      .attr("fill", "steelblue")
      .attr("height", d => self.height - self.y(d.value))
      .attr("width", 10)
      .attr("x", (d, i) => self.x(d.date))
      .attr("y", d => self.y(d.value))
  }
}
