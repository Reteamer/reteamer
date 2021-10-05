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

  async handleNewTeamData(event) {
    this.teamData = event.detail.teamData;
    this.chart
      .data(this.teamData.chart)
      .render()
      .expandAll()
      .fit()
  }

  async connect() {
    const response = await fetch('/reteamer_api/team_chart.json')
    this.teamData = await response.json()

    const container = document.createElement("div");
    container.className = 'chart-container'
    this.element.appendChild(container);

    this.chart = new TeamChart()
      .container('.chart-container')
      .data(this.teamData.chart)
      .nodeWidth(d => d.data.members.length * 250)
      .initialZoom(0.7)
      .nodeHeight(d => 200)
      .childrenMargin(d => 40)
      .compactMarginBetween(d => 15)
      .compactMarginPair(d => 80)
      .nodeContent(function(d, index, arr, state) {
        return `
            <div style="padding-top:30px;background-color:none;margin-left:1px;height:${d.height}px;border-radius:2px;overflow:visible">
              <div style="height:${d.height - 32}px;padding-top:0px;background-color:white;border:1px solid lightgray;">
                <div style="margin-top:-30px;background-color:${d.data.isContractor ? '#FF9036' : '#3AB6E3'};height:10px;width:${d.width - 2}px;border-radius:1px"></div>
                <div style="padding:20px; padding-top:35px;text-align:center">
                  <div style="color:#111672;font-size:16px;font-weight:bold"> ${d.data.name}</div>
                </div>
                ${d.data.members.length > 0 ? `
                  ${d.data.members.map(member => `
                    <div style="padding-top:30px;background-color:none;margin-left:1px;width:250px;height:${d.height}px;float:left;border-radius:2px;overflow:visible">
                        <div style="height:${d.height - 32}px;padding-top:0px;background-color:white;border:1px solid lightgray;">
                          <img src="${member.image_url || ''}" style="margin-top:-30px;margin-left:${d.width / 2 - 30}px;border-radius:100px;height:60px;width:60px;overflow:hidden" />
                          <div style="margin-right:10px;margin-top:15px;float:right">${d.data.employee_id || 'Contractor'}</div>
                          <div style="margin-top:-30px;background-color:${member.isContractor ? '#FF9036' : '#3AB6E3'};height:10px;width:${250 - 2}px;border-radius:1px"></div>
                          <div style="padding:20px; padding-top:35px;text-align:center">
                            <div style="color:#111672;font-size:16px;font-weight:bold"> ${member.name} </div>
                            <div style="color:#404040;font-size:16px;margin-top:4px"> ${member.title} </div>
                          </div>
                        </div>
                      </div>
                  `).join("")}
                  <div style="display:flex;justify-content:space-between;padding-left:15px;padding-right:15px;">
                    <div> Members:  ${d.data.members.length} 👤</div>
                  </div>` :
                  ""
                }
              </div>
            </div>
  `;
      })
      .render()
      .expandAll()
      .fit()
  }
}
