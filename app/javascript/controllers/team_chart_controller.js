import { Controller } from "stimulus"
import { TeamChart } from '../team_chart';
import * as d3 from "d3";
import {emitDatePickedEvent} from "../event_emitter";

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
      .selectAll(".people-box")
      .data(function(d) { return [d]; });

    d3.selectAll(".people-box")
      .selectAll("g.person-node")
      .data(d => d.data.members)
      .join("g")
      .classed("person-node", true)
      .attr("transform",(d, i) => {
        const x = i%2 * (this.personNodeWidth() + this.personPadding());
        const y = Math.floor(i/2) * (this.personNodeHeight() + this.personPadding());
        return `translate(${x},${y})`
      })
      .html(member => `
          <rect class="person-box" width="${this.personNodeWidth()}" height="${this.personNodeHeight()-this.avatarRadius()}" y="${this.avatarRadius()}" />
          <rect class="person-bar ${member.type}" width="${this.personNodeWidth()}" y="${this.avatarRadius()}" />
          <clipPath id="clipCircle">
            <circle r="${this.avatarRadius()}" cx="${this.personNodeWidth()/2}" cy="${this.avatarRadius()}"/>
          </clipPath>
          <image href="${member.image_url || ''}" x="${this.personNodeWidth()/2 - this.avatarRadius()}" width="${this.avatarDiameter()}" height="${this.avatarDiameter()}" clip-path="url(#clipCircle)" />
          <text class="employment-id" x="${this.personNodeWidth()-15}" y="70">${member.employee_id}</text>
          <text class="person-name" x="${this.personNodeWidth()/2}" text-anchor="middle" y="90">${member.name}</text>
          <foreignObject  y="110" width="${this.personNodeWidth()}" height="40">
            <div class="person-title">${member.title}</div>
          </foreignObject>
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

  async handleCompleteChange(event) {
    const response = await fetch("/reteamer_api/people/update_team", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      redirect: 'follow',
      body: JSON.stringify(
        {
          "person": {
            "effective_date": event.detail.selectedDate,
            "team_key": this.dropped.team_key,
            "key": this.dropped.assignment_key
          }
        }
      )
    });
    this.chart.finalizeDrop()
    emitDatePickedEvent(event.detail.selectedDate)
  }

  personNodeWidth() {
    return 250;
  }

  personNodeHeight() {
    return 190;
  }

  personPadding() {
    return 15;
  }

  connect() {
    const container = document.createElement("div");
    container.className = 'chart-container'
    this.element.appendChild(container);

    const self = this;
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
            <rect class="team-box" width="${d.width}" height="${d.height}" />
            <rect class="team-bar" width="${d.width}" />
            <foreignObject y="30" height="75" width="${d.width}">
              <div class="team-name">${d.data.name}</div>
            </foreignObject>
            <foreignObject class="team-details">
              <team-member-count> Members:  ${d.data.members.length} 👤</team-member-count>
            </foreignObject>
            <g class="people-box" transform="translate(${self.personPadding()}, 100)"></g>
        `;
      })
  }

  avatarDiameter() { return 60; }

  avatarRadius() { return this.avatarDiameter()/2; }

  getNodeWidth(d) {
    return d.data.members.length > 1 ? (2 * this.personNodeWidth()) + this.personPadding() * 3 : this.personNodeWidth() + this.personPadding() * 2;
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
      const assignment_key = this.draggingDatum.id;
      const team_key = this.destinationDatum.data.id
      this.dropped = {assignment_key: assignment_key, team_key: team_key}
      const personDroppedEvent = new CustomEvent("personDropped", {})
      window.dispatchEvent(personDroppedEvent)
    } else {
      this.chart.restoreNodePosition(d3.select(domNode), attrs.duration, this.dragStartX, this.dragStartY);
      this.chart.finalizeDrop()
    }
  }
}
