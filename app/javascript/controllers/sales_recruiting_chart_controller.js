import {Controller} from "@hotwired/stimulus";
import * as d3 from "d3";
import dayjs from "dayjs";
import {peopleDate, toISODate} from "../date_helpers";

export default class SalesRecruitingChartController extends Controller {

  connect() {
    const self = this;
    // set the dimensions and margins of the graph
    const margin = {top: 10, right: 30, bottom: 30, left: 60},
      width = 1000 - margin.left - margin.right,
      height = 400 - margin.top - margin.bottom;

    const gridOpacity = "0.1";
    const gridColor = "steelblue";
    const gridWidth = "1px";

    // const openReqColor = "#ea86cd";
    // const unassignedColor = "#ec9e5d";
    const oversoldColor = "#326aa2";
    const undersoldColor = "#f8b044";

    // append the svg object to the body of the page
    let svg = d3.select(this.element)
      .append("svg")
      .attr("preserveAspectRatio", "xMinYMin meet")
      .attr("viewBox", `0 0 ${width + margin.left + margin.right} ${height + margin.top + margin.bottom}`)
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
          return d.undersold
        }) - 3
        const yMax = d3.max(data, function(d) {
          return Math.max(d.open_reqs, d.unassigned)
        }) + 3

        let y = d3.scaleLinear()
          .domain([yMin, yMax])
          .range([height, 0]);

        const yAxisTicks = y.ticks()
          .filter(tick => Number.isInteger(tick));
        const yAxis = d3.axisLeft(y)
          .tickValues(yAxisTicks)
          .tickFormat(d3.format('d'));

        svg.append("g")
          .call(yAxis)

        // Add X axis --> it is a date format
        const xMin = dayjs(d3.min(data, function(d) {return d.date})).subtract(3, "days");
        const xMax = dayjs(d3.max(data, function(d) {return d.date})).add(3, "days");
        const xAxisExtent = [xMin, xMax]
        let x = d3.scaleTime()
          .domain(xAxisExtent)
          .range([0, width])

        const xAxis = svg.append("g")
          .attr("transform", `translate(0, ${height})`)
          .call(
            d3.axisBottom(x)
              .tickValues(data.map(function(d) {
                return d.date
              }))
              .tickFormat(d3.timeFormat("%b %-d"))
          )

        xAxis.select(".domain")
          .attr("stroke", "none")
        xAxis.selectAll(".tick line")
          .attr("opacity", gridOpacity)
          .attr("stroke-width", gridWidth)
          .attr("stroke", gridColor)

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
          .attr("opacity", gridOpacity)
          .attr("stroke", gridColor)
          .attr("stroke-width", gridWidth)

        svg.selectAll("line.vertical-grid").data(d3.timeMonday.range(...xAxisExtent)).enter()
          .append("line")
          .attr("class", "vertical-grid")
          .attr("x1", function(d){ return x(d);})
          .attr("x2", function(d){ return x(d);})
          .attr("y1", 0)
          .attr("y2", height)
          .attr("fill", "none")
          .attr("opacity", gridOpacity)
          .attr("stroke", gridColor)
          .attr("stroke-width", gridWidth)


        const barWidth = width/(1.5*data.length);

        //Add the Oversold bars
        svg.selectAll(".oversold-bar")
          .data(data)
          .enter()
          .append("rect")
          .attr("class", "oversold-bar")
          .attr("fill", oversoldColor)
          .attr("clip-path", "url(#graph-clip)")
          .attr("x", function(d) {
            return x(d.date) - barWidth/2;
          })
          .attr("y", function(d) {
            return y(d.oversold);
          })
          .attr("width", barWidth)
          .attr("height", function(d) {
            return y(0) - y(d.oversold);
          })

        //Add the Undersold bars
        svg.selectAll(".undersold-bar")
          .data(data)
          .enter()
          .append("rect")
          .attr("class", "undersold-bar")
          .attr("fill", undersoldColor)
          .attr("clip-path", "url(#graph-clip)")
          .attr("x", function(d) {
            return x(d.date) - barWidth/2;
          })
          .attr("y", function(d) {
            return y(0);
          })
          .attr("width", barWidth)
          .attr("height", function(d) {
            return y(d.undersold) - y(0);
          })

        // // Add the OpenReqs line
        // svg
        //   .append("path")
        //   .datum(data)
        //   .attr("fill", "none")
        //   .attr("stroke", openReqColor)
        //   .attr("stroke-width", 1.5)
        //   .attr("opacity", 0.7)
        //   .attr("d", d3.line()
        //     .x(function(d) {
        //       return x(d.date)
        //     })
        //     .y(function(d) {
        //       return y(d.open_reqs)
        //     }).curve(d3.curveLinear)
        //   )
        //
        // // Add the Unassigned line
        // svg
        //   .append("path")
        //   .datum(data)
        //   .attr("fill", "none")
        //   .attr("stroke", unassignedColor)
        //   .attr("stroke-width", 1.5)
        //   .attr("opacity", 0.7)
        //   .attr("d", d3.line()
        //     .x(function(d) {
        //       return x(d.date)
        //     })
        //     .y(function(d) {
        //       return y(d.unassigned)
        //     }).curve(d3.curveLinear)
        //   )

        // The legend
        const legendDomain = [
          {name: "Oversold count (hire more/ adjust contracts)", color: oversoldColor},
          {name: "Undersold count (sell more/ adjust contracts", color: undersoldColor},
        ];
        const legendRectSize = 6
        const legendSpacing = 6
        const legendOffsetY = 10;

        var legend = svg.selectAll('.legend')
          .data(legendDomain)
          .enter()
          .append('g')
          .attr('class', 'legend')
          .attr('transform', function(d, i) {
            const height = legendRectSize + legendSpacing;
            const horz = 2 * legendRectSize;
            const vert = i * height + legendOffsetY;
            return 'translate(' + horz + ',' + vert + ')';
          });

        legend.append('rect')
          .attr('width', legendRectSize)
          .attr('height', legendRectSize)
          .style('fill', function(d) { return d.color})
          .style('stroke', function(d) { return d.color});

        legend.append('text')
          .attr('x', legendRectSize + legendSpacing)
          .attr('y', legendRectSize )
          .attr("font-size", "10px")
          .text(function(d) { return d.name; });

        // Create the focus
        // self.openReqFocus = svg
        //   .append('g')
        //   .append('circle')
        //   .style("fill", "none")
        //   .attr("stroke", openReqColor)
        //   .attr('r', 8)
        //   .style("opacity", 0)

        // // Create the circle that travels along the curve of chart
        // self.unassignedFocus = svg
        //   .append('g')
        //   .append('circle')
        //   .style("fill", "none")
        //   .attr("stroke", unassignedColor)
        //   .attr('r', 6)
        //   .style("opacity", 0)

        // Create the text that travels along the curve of chart
        const focusText = svg
          .append('g')
          .style("opacity", 0)

        const focusTextBackground = focusText.append("rect").attr("fill", "#e2e8f0").attr("opacity", 0.9)

        const focusTextBox = focusText
          .append('text')
          .attr("text-anchor", "left")
          .attr("alignment-baseline", "middle")
          .attr("font-size", "10px")

        focusTextBox
          .append("tspan")
          .attr("class", "tooltip-text-line-date")
          .attr("x", "5")
          .attr("y", "5")
          .attr("dy", "13px")
          .attr("font-weight", "bold")

        // focusTextBox
        //   .append("tspan")
        //   .attr("class", "tooltip-text-line-unassigned")
        //   .attr("x", "5")
        //   .attr("dy", `14px`)
        //   .attr("fill", unassignedColor)
        //
        // focusTextBox
        //   .append("tspan")
        //   .attr("class", "tooltip-text-line-open-reqs")
        //   .attr("x", "5")
        //   .attr("dy", `14px`)
        //   .attr("fill", openReqColor)

        focusTextBox
          .append("tspan")
          .attr("class", "tooltip-text-line-oversold")
          .attr("x", "5")
          .attr("dy", `14px`)
          .attr("fill", oversoldColor)

        focusTextBox
          .append("tspan")
          .attr("class", "tooltip-text-line-undersold")
          .attr("x", "5")
          .attr("dy", `14px`)
          .attr("fill", undersoldColor)

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
          focusText.style("opacity", 1)
        }

        function mousemove(e) {
          const pointerElement = d3.pointer(e);
          let x0 = x.invert(pointerElement[0]);
          let i = bisect(data, x0, 1);
          let selectedData = data[i-1]
          self.openReqFocus
            .attr("cx", x(selectedData.date))
            .attr("cy", y(selectedData.open_reqs))

          self.unassignedFocus
            .attr("cx", x(selectedData.date))
            .attr("cy", y(selectedData.unassigned))

          focusText
            // .html(`Open Reqs: ${selectedData.open_reqs}Unassigned People: ${selectedData.unassigned}`)
            .attr("transform", `translate(${pointerElement[0] + 15}, ${pointerElement[1]})`)

          focusTextBackground.attr("width", focusTextBox.node().getBBox().width + 10).attr("height", focusTextBox.node().getBBox().height + 10);

          focusTextBox.select(".tooltip-text-line-date").text(`${dayjs(selectedData.date).format(peopleDate)}`)
          // focusTextBox.select(".tooltip-text-line-unassigned").text(`# of Unassigned People: ${selectedData.unassigned}`)
          // focusTextBox.select(".tooltip-text-line-open-reqs").text(`# of Open Reqs: ${selectedData.open_reqs}`)
          focusTextBox.select(".tooltip-text-line-oversold").text(`Oversold by: ${selectedData.oversold}`)
          focusTextBox.select(".tooltip-text-line-undersold").text(`Undersold by: ${selectedData.undersold}`)
        }

        function mouseout() {
          self.openReqFocus.style("opacity", 0)
          self.unassignedFocus.style("opacity", 0)
          focusText.style("opacity", 0)
        }
      })
  }
}
