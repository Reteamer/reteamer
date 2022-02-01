import {Controller} from "@hotwired/stimulus";
import * as d3 from "d3";
import dayjs from "dayjs";

export default class SalesRecruitingChartController extends Controller {

  connect() {
    const self = this;
    // set the dimensions and margins of the graph
    let margin = {top: 10, right: 30, bottom: 30, left: 60},
      width = 460 - margin.left - margin.right,
      height = 400 - margin.top - margin.bottom;

    // append the svg object to the body of the page
    let svg = d3.select("#my_dataviz")
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform",
        "translate(" + margin.left + "," + margin.top + ")");

    //Read the data
    d3.json("/reteamer_api/sales_recruitings.json",
      function(d){
        return { date : d3.timeParse("%Y-%m-%d")(d.date), value : d.value }
      }).then(function(data) {
      // Add X axis --> it is a date format
      let x = d3.scaleUtc()
        .domain(d3.extent(data, function(d) { return dayjs(d.date); }))
        .range([ 0, width ]);
      svg.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x));
      // Add Y axis
      let y = d3.scaleLinear()
        .domain([0, d3.max(data, function(d) { return +d.value; })])
        .range([ height, 0 ]);
      svg.append("g")
        .call(d3.axisLeft(y));

      // This allows to find the closest X index of the mouse:
      let bisect = d3.bisector(function(d) {
        return d.date;
      }).left;

      // Create the circle that travels along the curve of chart
      self.focus = svg
        .append('g')
        .append('circle')
        .style("fill", "none")
        .attr("stroke", "black")
        .attr('r', 8.5)
        .style("opacity", 0)

      // Create the text that travels along the curve of chart
      self.focusText = svg
        .append('g')
        .append('text')
        .style("opacity", 0)
        .attr("text-anchor", "left")
        .attr("alignment-baseline", "middle")

      // Add the line
      svg
        .append("path")
        .datum(data)
        .attr("fill", "none")
        .attr("stroke", "steelblue")
        .attr("stroke-width", 1.5)
        .attr("d", d3.line()
          .x(function(d) {
            return x(dayjs(d.date))
          })
          .y(function(d) {
            return y(d.value)
          }).curve(d3.curveStepAfter)
        )

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
        self.focus.style("opacity", 1)
        self.focusText.style("opacity", 1)
      }

      function mousemove(e) {
        // recover coordinate we need
        let x0 = x.invert(d3.pointer(e)[0]);
        let i = bisect(data, x0, 1);
        let selectedData = data[i]
        self.focus
          .attr("cx", x(selectedData.date))
          .attr("cy", y(selectedData.value))
        self.focusText
          .html("x:" + selectedData.date + "  -  " + "y:" + selectedData.value)
          .attr("x", x(selectedData.date) + 15)
          .attr("y", y(selectedData.value))
      }

      function mouseout() {
        self.focus.style("opacity", 0)
        self.focusText.style("opacity", 0)
      }

    })
  }
}
