import {Controller} from "@hotwired/stimulus";
import * as d3 from "d3";
import dayjs from "dayjs";

export default class SalesRecruitingChartController extends Controller {

  connect() {
    const self = this;
    // set the dimensions and margins of the graph
    let margin = {top: 10, right: 30, bottom: 30, left: 60},
      width = 1000 - margin.left - margin.right,
      height = 400 - margin.top - margin.bottom;

    // append the svg object to the body of the page
    let svg = d3.select("#my_dataviz")
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform",
        "translate(" + margin.left + "," + margin.top + ")");

    // define the clipPath
    svg.append("clipPath")       // define a clip path
      .attr("id", "graph-clip") // give the clipPath an ID
      .append('rect')
      .attr('width', width)
      .attr('height', height)

    //Read the data
    let timeParse = d3.timeParse("%Y-%m-%d");
    d3.json("/reteamer_api/sales_recruitings.json")
      .then(function(data) {

        data.forEach(function(d) {
          d.date = timeParse(d.date)
        })

        // Add Y axis
        const yMin = d3.min(data, function(d) {
          return Math.min(d.open_reqs, d.unassigned, d.how_many_to_hire)
        }) - 3
        const yMax = d3.max(data, function(d) {
          return Math.max(d.open_reqs, d.unassigned, d.how_many_to_hire)
        }) + 3
        let y = d3.scaleLinear()
          .domain([yMin, yMax])
          .range([height, 0]);
        svg.append("g")
          .call(d3.axisLeft(y));

        // Add X axis --> it is a date format
        const xAxisExtent = d3.extent(data, function(d) {
          return d.date;
        });
        console.error("=============>", xAxisExtent);
        let x = d3.scaleTime()
          .domain(xAxisExtent)
          .range([0, width])
        svg.append("g")
          .attr("transform", `translate(0, ${height})`)
          .call(d3.axisBottom(x).tickValues(data.map(function(d) {
            return d.date
          })));
        // This allows to find the closest X index of the mouse:
        let bisect = d3.bisector(function(d) {
          return d.date;
        }).left;

        // Draw a thick line at x=0
        svg.append("line")
          .attr("class", "cursor-line")
          .style("stroke", "black")
          .style("stroke-width", "1px")
          .attr("x1", 0)
          .attr("x2", width)
          .attr("y1", y(0))
          .attr("y2", y(0))

        // grid lines
        svg.selectAll("line.horizontal-grid").data(y.ticks(yMax-yMin)).enter()
          .append("line")
          .attr("class", "horizontal-grid")
          .attr("x1", 0)
          .attr("x2", width)
          .attr("y1", function(d){ return y(d);})
          .attr("y2", function(d){ return y(d);})
          .attr("fill", "none")
          .attr("opacity", "0.1")
          .attr("stroke", "steelblue")
          .attr("stroke-width", "1px")

        svg.selectAll("line.vertical-grid").data(d3.timeMonday.range(...xAxisExtent)).enter()
          .append("line")
          .attr("class", "vertical-grid")
          .attr("x1", function(d){ return x(d);})
          .attr("x2", function(d){ return x(d);})
          .attr("y1", 0)
          .attr("y2", height)
          .attr("fill", "none")
          .attr("opacity", "0.1")
          .attr("stroke", "steelblue")
          .attr("stroke-width", "1px")

        //Add the "How Many To Hire" bars
        svg.selectAll("mybar")
          .data(data)
          .enter()
          .append("rect")
          .attr("clip-path", "url(#graph-clip)")
          .attr("x", function(d) {
            return x(d.date) - 25;
          })
          .attr("y", function(d) {
            return d.how_many_to_hire > 0 ? y(d.how_many_to_hire) : y(0);
          })
          .attr("width", 50)
          .attr("height", function(d) {
            return Math.abs(y(d.how_many_to_hire) - y(0));
          })
          .attr("fill", "#69b3a2")


        // Add the OpenReqs line
        svg
          .append("path")
          .datum(data)
          .attr("fill", "none")
          .attr("stroke", "steelblue")
          .attr("stroke-width", 1.5)
          .attr("d", d3.line()
            .x(function(d) {
              return x(d.date)
            })
            .y(function(d) {
              return y(d.open_reqs)
            }).curve(d3.curveLinear)
          )

        // Add the Unassigned line
        svg
          .append("path")
          .datum(data)
          .attr("fill", "none")
          .attr("stroke", "darkorange")
          .attr("stroke-width", 1.5)
          .attr("d", d3.line()
            .x(function(d) {
              return x(d.date)
            })
            .y(function(d) {
              return y(d.unassigned)
            }).curve(d3.curveLinear)
          )

        // Create the circle that travels along the curve of chart
        self.openReqFocus = svg
          .append('g')
          .append('circle')
          .style("fill", "none")
          .attr("stroke", "steelblue")
          .attr('r', 8.5)
          .style("opacity", 0)

        // Create the circle that travels along the curve of chart
        self.unassignedFocus = svg
          .append('g')
          .append('circle')
          .style("fill", "none")
          .attr("stroke", "darkorange")
          .attr('r', 8.5)
          .style("opacity", 0)

        // Create the text that travels along the curve of chart
        self.focusText = svg
          .append('g')
          .append('text')
          .style("opacity", 0)
          .attr("text-anchor", "left")
          .attr("alignment-baseline", "middle")

        // Create a rect on top of the svg area: this rectangle recovers mouse position
        svg
          .append('rect')
          .style("fill", "none")
          .style("pointer-events", "all")
          .attr('width', width)
          .attr('height', height)
          .on('mouseover', mouseover)
          .on('mousemove', mousemove)
          .on('mouseout', mouseout);


        // What happens when the mouse move -> show the annotations at the right positions.
        function mouseover() {
          self.openReqFocus.style("opacity", 1)
          self.unassignedFocus.style("opacity", 1)
          self.focusText.style("opacity", 1)
        }

        function mousemove(e) {
          let x0 = x.invert(d3.pointer(e)[0]);
          let i = bisect(data, x0, 1);
          let selectedData = data[i]
          self.openReqFocus
            .attr("cx", x(selectedData.date))
            .attr("cy", y(selectedData.open_reqs))

          self.unassignedFocus
            .attr("cx", x(selectedData.date))
            .attr("cy", y(selectedData.unassigned))

          self.focusText
            .html(`Open Reqs: ${selectedData.open_reqs}Unassigned People: ${selectedData.unassigned}`)
            .attr("x", x(selectedData.date) + 15)
            .attr("y", y(selectedData.open_reqs))
        }

        function mouseout() {
          self.openReqFocus.style("opacity", 0)
          self.unassignedFocus.style("opacity", 0)
          self.focusText.style("opacity", 0)
        }
      })
  }
}
