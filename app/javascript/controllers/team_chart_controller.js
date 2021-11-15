import { Controller } from "@hotwired/stimulus"
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
  }

  handleCancelChange(event) {
    const attrs = this.chart.getChartState()
    this.chart.restoreNodePosition(d3.select(this.chart.getDraggingNode()), attrs.duration, this.dragStartX, this.dragStartY);
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
      .buttonContent(({ node, state }) => {
        return `
          <div class="${node.depth == 0 ? "fake-root-node" : ""}" style="px;color:#716E7B;border-radius:5px;padding:4px;font-size:10px;margin:auto auto;background-color:white;border: 1px solid #E4E2E9"> 
            <span style="font-size:9px">
              ${node.children
                ? `<i class="fas fa-angle-up"></i>`
                : `<i class="fas fa-angle-down"></i>`
              }
            </span>
          </div>
        `;
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
      .nodeContent(function(d, i, nodes, attrs) { //this is the dom node
        d3.select(this).html(`
          <g class="team-node ${d.depth == 0 ? "fake-root-node" : ""}" transform="translate(0,0)">
            <rect class="team-box" width="${d.width}" height="${d.height}" />
            <rect class="team-bar" width="${d.width}" />
            <foreignObject y="30" height="75" width="${d.width}">
              <div class="team-name">${d.data.name}</div>
            </foreignObject>
            <foreignObject class="team-details">
              <team-member-count> Members:  ${d.data.members.length} 👤</team-member-count>
            </foreignObject>
            <g class="people-box" transform="translate(${self.personPadding()}, 100)"></g>
          </g>
        `)

        d3.selectAll("g.nodes-wrapper g.node")
          .selectAll(".people-box")
          .data(function(d) { return [d]; });

        d3.selectAll(".people-box")
          .selectAll("g.person-node")
          .data(d => d.data.members)
          .join("g")
          .classed("person-node", true)
          .attr("transform",(d, i) => {
            const x = i%2 * (self.personNodeWidth() + self.personPadding());
            const y = Math.floor(i/2) * (self.personNodeHeight() + self.personPadding());
            return `translate(${x},${y})`
          })
          .html(member => `
            <rect class="person-box" width="${self.personNodeWidth()}" height="${self.personNodeHeight()-self.avatarRadius()}" y="${self.avatarRadius()}" />
            <rect class="person-bar ${member.type}" width="${self.personNodeWidth()}" y="${self.avatarRadius()}" />
            <clipPath id="clipCircle">
              <circle r="${self.avatarRadius()}" cx="${self.personNodeWidth()/2}" cy="${self.avatarRadius()}"/>
            </clipPath>
            <image href="${member.image_url || ''}" x="${self.personNodeWidth()/2 - self.avatarRadius()}" width="${self.avatarDiameter()}" height="${self.avatarDiameter()}" clip-path="url(#clipCircle)" />
            <text class="employment-id" x="${self.personNodeWidth()-15}" y="70">${member.employee_id}</text>
            <text class="person-name" x="${self.personNodeWidth()/2}" text-anchor="middle" y="90">${member.name}</text>
            <foreignObject  y="110" width="${self.personNodeWidth()}" height="40">
              <div class="person-title">${member.title}</div>
            </foreignObject>
            <g class="people-buttons">
              <g class="person-button" transform="translate(${self.personNodeWidth() - 24},${self.personNodeHeight() - 24})">
                <circle r="10" cx="10" cy="10" opacity="0"></circle>
                <image hidden="true" xlink:href="pencil-solid.svg" x="4" y="4" height="12" width="12"></image>
              </g>
              <g class="person-button" transform="translate(${self.personNodeWidth() - 48},${self.personNodeHeight() - 24})">
                <circle r="10" cx="10" cy="10" opacity="0"></circle>
                <image hidden="true" xlink:href="trash.svg" x="4" y="4" height="12" width="12"></image>
              </g>
            </g>
        `)
        d3.selectAll(".person-button")
          .attr("cursor", "pointer")
          .call(d3.drag()
            .on("start", null))
          .on("click", (e) => {
            console.error("=============>", "button clicked!");
          })

        d3.selectAll("g.nodes-wrapper g.node")
          .on("mouseover", function(event, d) {
            self.handleMouseOver(this, d);
          })
          .on("mouseout", function(event, d) {
            self.handleMouseOut(this, d);
          })
        d3.selectAll("g.nodes-wrapper g.person-node")
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
    this.chart.setDestinationDatum(d);
    if(this.chart.getDraggingDatum()) {
      d3.select(domNode).classed("drop-target", true)
    }
  };

  handleMouseOut(domNode, d) {
    d3.select(domNode).classed("drop-target", false)
    if(this.chart.getDraggingDatum()) {
      this.chart.setDestinationDatum(null);
    }
  };

  initiateDrag(d, domNode) {
    this.chart.setDraggingDatum(d);
    this.chart.setDraggingNode(domNode);

    let startCoords = this.chart.getCoords(domNode)
    this.dragStartX = startCoords[0]
    this.dragStartY = startCoords[1]
    const node = d3.select(domNode);
    node
      .attr('pointer-events', 'none')
      .classed('active-drag', true)
      .raise()

    d3.selectAll('g.node')
      .filter((group) => group.id === d.team_id)
      .raise()
  }

  endDrag(domNode) {
    d3.select(domNode)
      .attr('pointer-events', '') // restore the mouseover event or we won't be able to drag a 2nd time
      .classed("active-drag", false)

    const attrs = this.chart.getChartState()
    if (this.chart.getDestinationDatum() !== null) {
      const assignment_key = this.chart.getDraggingDatum().id;
      const team_key = this.chart.getDestinationDatum().data.id
      this.dropped = {assignment_key: assignment_key, team_key: team_key}
      const personDroppedEvent = new CustomEvent("personDropped", {})
      window.dispatchEvent(personDroppedEvent)
    } else {
      this.chart.restoreNodePosition(d3.select(domNode), attrs.duration, this.dragStartX, this.dragStartY);
      this.chart.finalizeDrop()
    }
  }
}
