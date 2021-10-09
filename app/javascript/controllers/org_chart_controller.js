import { Controller } from "stimulus"
import { TeamChart } from '../team_chart';
import * as d3 from "d3"

export default class extends Controller {

  exportSvg() {
    this.chart.fit();
    this.chart.exportSvg()
  }

  fit() {
    this.chart.fit();
  }

  async handleNewOrgData(event) {
    this.orgData = event.detail.orgData;
    this.chart
      .data(this.orgData.people)
      .connections(this.orgData.connections)
      .render()
      .expandAll()

    if(this.firstRender) {
      const {svg, zoomBehavior} = this.chart.getChartState();
      svg.transition().call(zoomBehavior.translateBy, 0, -200)
      this.firstRender = false
    }
  }

  async connect() {
    this.firstRender = true;
    const container = document.createElement("div");
    container.className = 'chart-container'
    this.element.appendChild(container);

    this.chart = new TeamChart()
      .container('.chart-container')
      .connectionsUpdate(function (d, i, arr) {
        d3.select(this)
          .attr('stroke', (d) => '#CCCCCC')
          .attr('stroke-linecap', 'round')
          .attr('stroke-width', (d) => '2')
          .attr('pointer-events', 'none')
          .attr('stroke-dasharray', '20, 20');
      })
      .nodeWidth(d => 250)
      .initialZoom(0.7)
      .nodeHeight(d => 200)
      .childrenMargin(d => 40)
      .buttonContent(({ node, state }) => {
        return `<div class="${node.depth == 0 ? "fake-root-node" : ""}" style="px;color:#716E7B;border-radius:5px;padding:4px;font-size:10px;margin:auto auto;background-color:white;border: 1px solid #E4E2E9"> <span style="font-size:9px">${
          node.children
            ? `<i class="fas fa-angle-up"></i>`
            : `<i class="fas fa-angle-down"></i>`
        }</span> ${node.data._totalSubordinates}  </div>`;
      })
      .linkUpdate(function (d, i, arr) {
        d3.select(this)
          .attr("stroke", d => d.data._upToTheRootHighlighted ? '#152785' : 'lightgray')
          .attr("stroke-width", d => d.data._upToTheRootHighlighted ? 5 : 2)
          .classed("fake-root-node", d => d.depth == 1)

        if (d.data._upToTheRootHighlighted) {
          d3.select(this).raise()
        }
      })
      .compactMarginBetween(d => 15)
      .compactMarginPair(d => 80)
      .nodeContent(function(d, index, arr, state) {
        const avatarRadius = 30;
        const avatarDiameter = 60;
        return `
            <person-box class="${d.depth == 0 ? "fake-root-node" : ""}" style="padding-top:${avatarRadius}px;height:${d.height}px;">
              <div style="height:${d.height - 32}px;padding-top:0px;background-color:white;border:1px solid lightgray;">
                <img src="${d.data.image_url || ''}" style="margin-top:-${avatarRadius}px;margin-left:${d.width / 2 - avatarRadius}px;border-radius:${avatarRadius}px;height:${avatarDiameter}px;width:${avatarDiameter}px;" />

                <employment-type style="margin-right:10px;margin-top:15px;float:right">${d.data.employee_id}</employment-type>

                <person-bar class="${d.data.type}" style="margin-top:-${avatarRadius}px;height:10px;width:${d.width - 2}px;border-radius:1px"></person-bar>

                <person-info>
                  <person-name>${d.data.name}</person-name>
                  <person-title>${d.data.title}</person-title>
                </person-info>
                ${d.data._directSubordinates > 0 ? `
                <div style="display:flex;justify-content:space-between;padding-left:15px;padding-right:15px;">
                  <div > Manages:  ${d.data._directSubordinates} 👤</div>
                  <div > Oversees: ${d.data._totalSubordinates} 👤</div>
                </div>` : ""}
              </div>
            </person-box>
  `;
      })
  }
}
