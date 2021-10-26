import { Controller } from "stimulus"
import { TeamChart } from '../team_chart';
import * as d3 from "d3";

export default class extends Controller {

  exportSvg() {
    this.chart.fit();
    this.chart.exportSvg()
  }

  fit() {
    this.chart.fit();
  }

  handleNewTeamData(event) {
    this.teamData = event.detail.teamData;
    this.chart
      .data(this.teamData.chart)
      .render()
      .expandAll()

    const self = this;
    d3.selectAll("g.nodes-wrapper g.node")
      .on("mouseover", function(event, d) {
        self.handleMouseOver(this, d);
      })
      .on("mouseout", function(event, d) {
        self.handleMouseOut(this, d);
      })

    d3.selectAll("g.nodes-wrapper person-node")
      .call(d3.drag()
        .on("start", function(event, d) {
          self.initiateDrag(d, this)
        })
        .on("drag", function(event, d) {
          let [newX, newY] = self.chart.getCoords(this)
          d3.select(this).attr("transform", "translate(" + (newX+event.dx) + "," + (newY+event.dy) + ")");
        })
        .on("end", function(event, d) {
          self.endDrag(this);
        })
      )

  }

  handleCompleteChange(event) {}

  handleCancelChange(event) {
    const attrs = this.chart.getChartState()
    this.chart.restoreNodePosition(d3.select(this.draggingNode), attrs.duration, this.dragStartX, this.dragStartY);
    this.chart.finalizeDrop()
  }

  personNodeHtml(avatarRadius, member, avatarDiameter, personNodeWidth) {
    return `<person-node style="width:${personNodeWidth}px;padding-top:${avatarRadius + 10}px">
      <person-box>
        <person-bar class="${member.type}" style="width:${personNodeWidth - 2}px;"></person-bar>
        <img src="${member.image_url || ''}"
             style="margin-top:-${avatarRadius}px;margin-left:${(personNodeWidth / 2) - (avatarRadius)}px;border-radius:${avatarRadius}px;height:${avatarDiameter}px;width:${avatarDiameter}px;"/>
        <employment-type>${member.employee_id}</employment-type>
        <person-info>
          <person-name>${member.name}</person-name>
          <person-title>${member.title}</person-title>
        </person-info>
      </person-box>
    </person-node>`;
  }

  connect() {
    const container = document.createElement("div");
    container.className = 'chart-container'
    this.element.appendChild(container);

    const self = this;

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
        const avatarDiameter = 60;
        const avatarRadius = avatarDiameter/2;

        let nodeHeight = self.getNodeHeight(d, personNodeHeight);
        let nodeWidth = self.getNodeWidth(d, personNodeWidth);
        return `
            <rect class="team-box" height="${nodeHeight}" width="${nodeWidth}"/>
            <rect class="team-bar" width="${nodeWidth}"/>
            <foreignObject width="${nodeWidth}" height="30" y="10">
              <div class="team-name">${d.data.name}</div>
            </foreignObject> 
            <foreignObject width="${nodeWidth}" height="30" y="40">
              <div class="team-member-count"> Members:  ${d.data.members.length} 👤</div>
            </foreignObject>
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

  handleMouseOver(domNode, d) {
    this.destinationDatum = d;
    if(this.draggingDatum) {
      d3.select(domNode).classed("drop-target", true)
    }
  };

  handleMouseOut(domNode, d) {
    d3.select(domNode).classed("drop-target", false)
    if(this.draggingDatum) {
      this.destinationDatum = null;
    }
  };

  initiateDrag(d, domNode) {
    this.draggingDatum = d;
    this.draggingNode = domNode;

    let startCoords = this.chart.getCoords(domNode)
    this.dragStartX = startCoords[0]
    this.dragStartY = startCoords[1]
    const node = d3.select(domNode);
    node
      .attr('pointer-events', 'none')
      .classed('activeDrag', true)
      .raise()
  }

  endDrag(domNode) {
    d3.select(domNode)
      .attr('pointer-events', '') // restore the mouseover event or we won't be able to drag a 2nd time
      .classed("activeDrag", false)

    const attrs = this.chart.getChartState()
    if (this.destinationDatum !== null) {
      const person_key = this.draggingDatum.data.id;
      const supervisor_key = this.destinationDatum.data.id
      this.dropped = {person_key: person_key, supervisor_key: supervisor_key}
      const supervisorChangedEvent = new CustomEvent("supervisorChanged",
        {
          detail: {
            person_key: person_key,
            supervisor_key: supervisor_key
          }
        }
      )
      window.dispatchEvent(supervisorChangedEvent)
    } else {
      this.chart.restoreNodePosition(d3.select(domNode), attrs.duration, this.dragStartX, this.dragStartY);
      this.chart.finalizeDrop()
    }
  }

}
