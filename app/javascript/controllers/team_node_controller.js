import { Controller } from "@hotwired/stimulus"
import * as d3 from "d3";

export default class extends Controller {
  static values = {type: String}

  connect() {
    d3.selectAll(".team-button")
      .attr("cursor", "pointer")
      .call(d3.drag()
        .on("start", null))
    if(this.typeValue === "normal") {
      const teamNode = this.element;
      d3.select(teamNode)
        .on("mouseover", function(event, d) {
          // if (!this.isDragging()) {
          d3.select(teamNode).select(".team-buttons").classed("hidden", false)
          // }
        })
        .on("mouseout", function(event, d) {
          d3.select(teamNode).select(".team-buttons").classed("hidden", true)
        })
    }
  }
}
