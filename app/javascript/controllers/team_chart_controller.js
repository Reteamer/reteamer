import { Controller } from "stimulus"
import { TeamChart } from '../team_chart';

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
  }

  async connect() {
    const container = document.createElement("div");
    container.className = 'chart-container'
    this.element.appendChild(container);

    const personNodeWidth = 250;
    const personNodeHeight = 190;
    this.chart = new TeamChart()
      .container('.chart-container')
      .nodeWidth(d => this.getNodeWidth(d, personNodeWidth))
      .initialZoom(0.7)
      .nodeHeight(d => this.getNodeHeight(d, personNodeHeight))
      .childrenMargin(d => 40)
      .compactMarginBetween(d => 15)
      .compactMarginPair(d => 80)
      .nodeContent(function(d, index, arr, state) {
        const contractorColor = '#FF9036';
        const employeeColor = '#3AB6E3';
        const avatarDiameter = 60;
        const avatarRadius = avatarDiameter/2;

        return `
            <team-box style="height:${d.height}px;">
              <team-bar></team-bar>
              <team-name>
                ${d.data.name}
              </team-name>
              <team-details>
                <team-member-count> Members:  ${d.data.members.length} 👤</team-member-count>
              </team-details>
              ${d.data.members.length > 0 ? `
                <people-box>
                ${d.data.members.map(member => `
                  <person-box style="width:${personNodeWidth}px;padding-top:${avatarRadius + 10}px">
                    <div style="background-color:white;border:1px solid lightgray;">
                      <person-bar style="background-color:${member.isContractor ? contractorColor : employeeColor};width:${personNodeWidth - 2}px;"></person-bar>
                      <img src="${member.image_url || ''}" style="margin-top:-${avatarRadius}px;margin-left:${(personNodeWidth / 2) - (avatarRadius)}px;border-radius:${avatarRadius}px;height:${avatarDiameter}px;width:${avatarDiameter}px;" />
                      <employment-type>${member.employee_id}</employment-type>
                      <person-info>
                        <person-name>${member.name}</person-name>
                        <person-title>${member.title}</person-title>
                      </person-info>
                    </div>
                  </person-box>
                  `).join("")
                }
                </people-box>
              ` : ""
            }
            </team-box>
  `;
      })
  }

  getNodeWidth(d, personNodeWidth) {
    return d.data.members.length > 1 ? (2 * personNodeWidth) + 50 : personNodeWidth + 50;
  }

  getNodeHeight(d, personNodeHeight) {
    const numberOfColumns = Math.ceil(d.data.members.length / 2);
    const calculatedHeight = 150 + numberOfColumns * personNodeHeight;
    return Math.max(130, calculatedHeight);
  }
}
