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

    d3.selectAll("g.nodes-wrapper g.node")
      .selectAll("g.person-node")
      .data(d => d.data.members)
      .join("g")
      .classed("person-node", true)
      .attr("transform","translate(0,0)")
      .html(member => `
          <rect class="person-box" style="background-color:white;border:1px solid lightgray;" />
          <rect class="person-bar ${member.type}" style="width:${this.personNodeWidth() - 2}px;"/>
          <image href="${member.image_url || ''}" style="margin-top:-${this.avatarRadius()}px;margin-left:${(this.personNodeWidth() / 2) - (this.avatarRadius())}px;border-radius:${this.avatarRadius()}px;height:${this.avatarDiameter()}px;width:${this.avatarDiameter()}px;" />
          <text class="employment-type">${member.employee_id}</text>
          <text class="person-name">${member.name}</text>
          <text class="person-title">${member.title}</text>
        `)

    const self = this;
    d3.selectAll("g.nodes-wrapper g.node")
      .on("mouseover", function(event, d) {
        self.handleMouseOver(this, d);
      })
      .on("mouseout", function(event, d) {
        self.handleMouseOut(this, d);
      })
    d3.selectAll("g.nodes-wrapper .person-node")
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

  handleCancelChange(event) {
    const attrs = this.chart.getChartState()
    this.chart.restoreNodePosition(d3.select(this.draggingNode), attrs.duration, this.dragStartX, this.dragStartY);
    this.chart.finalizeDrop()
  }

  personNodeWidth() {
    return 250;
  }

  personNodeHeight() {
    return 190;
  }

  connect() {
    const container = document.createElement("div");
    container.className = 'chart-container'
    this.element.appendChild(container);

    this.chart = new TeamChart()
      .container('.chart-container')
      .nodeWidth(d => this.getNodeWidth(d))
      .initialZoom(0.7)
      .nodeHeight(d => this.getNodeHeight(d))
      .childrenMargin(d => 40)
      .compactMarginBetween(d => 15)
      .compactMarginPair(d => 80)
      .nodeContent(function(d, index, arr, state) {

        return `
            <rect class="team-box" style="height:${d.height}px;" />
            <rect class="team-bar"/>
            <text class="team-name">${d.data.name}</text>
            <foreignObject class="team-details">
              <team-member-count> Members:  ${d.data.members.length} 👤</team-member-count>
            </foreignObject>
            
        `;
      })
  }

  avatarDiameter() { return 60; }
  avatarRadius() { return this.avatarDiameter()/2; }


  getNodeWidth(d) {
    return d.data.members.length > 1 ? (2 * this.personNodeWidth()) + 50 : this.personNodeWidth() + 50;
  }

  getNodeHeight(d) {
    const numberOfColumns = Math.ceil(d.data.members.length / 2);
    const calculatedHeight = 150 + numberOfColumns * this.personNodeHeight();
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
