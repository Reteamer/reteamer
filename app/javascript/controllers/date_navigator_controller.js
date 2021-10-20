import { Controller } from "stimulus"
import { toISODate } from "../date_helpers"
import * as d3 from "d3"

export default class extends Controller {
  static targets = [ "dateInput" ]
  static values = { startingDate: String }

  handleNewData(event) {
    this.histogramData = event.detail.histogram
    this.histogramData.forEach(function(d) {
      d.date = Date.parse(d.date);
    });
    this.renderChart()
  }

  handleInputChange(event) {
    this.emitNewDateEvent(event.target.value)
  }

  emitNewDateEvent(newDate) {
    var pageUrl = "?effective_date=" + newDate;
    window.history.pushState('', '', pageUrl);

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
    this.dateInputTarget.value = this.startingDateValue

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

    self.chartCursor = self.svg.append("g")
      .classed( "cursor" , true)
      .classed("mouse-over-effects", true)
      .style("opacity", "0");

    self.chartCursor.append("line") // this is the black vertical line to follow mouse
      .attr("class", "cursor-line")
      .style("stroke", "black")
      .style("stroke-width", "1px")
      .attr("x1", 0)
      .attr("x2", 0)
      .attr("y1", 0)
      .attr("y2", self.height)

    self.chartCursor.append("g")
      .attr("class", "cursor-date-container")
      .append("text")
      .attr("transform", "translate(10,13)")
      .attr("class", "cursor-date")

    self.xAxisElement = self.svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + self.height + ")")

    self.mouseMovementRectangle = self.svg.append('svg:rect') // append a rect to catch mouse movements on canvas
      .classed("mouse-catcher", true)
      .attr('width', self.width) // can't catch mouse events on a g element
      .attr('height', self.height)
      .attr('fill', 'none')
      .attr('pointer-events', 'all')

    self.selectedDateMarker = self.svg.append("line")
      .attr("class", "selected-date-marker")
      .style("stroke", "yellow")
      .style("stroke-width", "1px")
      .style("opacity", "1")

    self.todayMarker = self.svg.append("line")
      .attr("class", "today-marker")
      .style("stroke", "red")
      .style("stroke-width", "1px")
      .style("opacity", "1")

    self.mouseMovementRectangle
      .on('mouseout', function() { // on mouse out hide line, circles and text
        d3.select(".cursor")
          .style("opacity", "0");
      })
      .on('mouseover', function() { // on mouse in show line, circles and text
        d3.select(".cursor")
          .style("opacity", "1");
      })
      .on('click', function(event) { // on mouse in show line, circles and text
        var mouse = d3.pointer(event);
        var xDate = self.x.invert(mouse[0])

        d3.select(".selected-date-marker")
          .attr("x1", mouse[0])
          .attr("x2", mouse[0])

        let newDate = toISODate(xDate);
        self.dateInputTarget.value = newDate;
        self.emitNewDateEvent(newDate)
      })
      .on('mousemove', function(event) { // mouse moving over canvas
        var mouse = d3.pointer(event);
        d3.select(".cursor")
          .attr("transform", "translate(" + mouse[0] + ",0)")

        d3.select('.cursor-date')
          .text(toISODate(self.x.invert(mouse[0])))
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

    const today = new Date();
    self.todayMarker
      .attr("x1", self.x(today))
      .attr("x2", self.x(today))
      .attr("y1", 0)
      .attr("y2", self.height)

    const selectedDate = new Date(self.dateInputTarget.value);
    self.selectedDateMarker
      .attr("x1", self.x(selectedDate))
      .attr("x2", self.x(selectedDate))
      .attr("y1", 0)
      .attr("y2", self.height)

    self.svg
      .select(".bar-layer")
      .selectAll(".change-counts")
      .data(data)
      .enter()
      .append("rect")
      .attr("class", "change-counts")
      .attr("fill", "steelblue")
      .attr("height", d => self.height - self.y(d.value))
      .attr("width", 8)
      .attr("x", (d, i) => self.x(d.date))
      .attr("y", d => self.y(d.value))
  }
}
