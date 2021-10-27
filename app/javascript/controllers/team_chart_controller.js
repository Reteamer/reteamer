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
    this.chart
      .expandAll() //causes an extra render
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
    this.firstTime = true;
    const container = document.createElement("div");
    container.className = 'chart-container'
    this.element.appendChild(container);

    const self = this;

    this.chart = new TeamChart()
      .container('.chart-container')
      .nodeWidth(d => this.getNodeWidth(d, self.personNodeWidth))
      .initialZoom(0.7)
      .nodeHeight(d => this.getNodeHeight(d, self.personNodeHeight))
      .childrenMargin(d => 40)
      .compactMarginBetween(d => 15)
      .compactMarginPair(d => 80)
      .nodeContent((nodeEnter) => {
        nodeEnter
          .on("mouseover", function(event, d) {
            self.handleMouseOver(this, d);
          })
          .on("mouseout", function(event, d) {
            self.handleMouseOut(this, d);
          })
        nodeEnter
          .append("rect")
          .classed("team-box", true)
          .attr("width", d => self.getNodeWidth(d))
          .attr("height", d => self.getNodeHeight(d))

        const barHeight = 10;
        nodeEnter
          .append("rect")
          .classed("team-bar", true)
          .attr("width", d => self.getNodeWidth(d))
          .attr("height", barHeight)

        const nameHeight = 30
        nodeEnter
          .append("foreignObject")
          .attr("width", d => self.getNodeWidth(d))
          .attr("height", nameHeight)
          .attr("y", barHeight)
          .html(d =>
            `<div class="team-name">${d.data.name}</div>`
          )

        const peopleBox = nodeEnter.append("g")
          .classed("people-box", true)
          .attr("width", d => self.getNodeWidth(d))
          .attr("height", d => self.getNodeHeight(d))
          .attr("transform", `translate(0, ${nameHeight + barHeight})`)

        const personData = peopleBox
          .selectAll(".person-node")
          .data((d) => d.data.members, d => d.id)
        personData
          .exit().remove()

        const personNode = personData
          .enter()
          .append("g")
          .classed("person-node", true)

        personNode
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
          .attr("transform", (d, i, nodes) => {
            const nodePadding = 15;
            const x = i % 2 == 0 ? nodePadding : self.personNodeWidth() + nodePadding * 2
            const level = Math.floor((i)/2);
            const y = Math.max(nodePadding, level * (self.personNodeHeight() + nodePadding) + nodePadding)
            return `translate(${x},${y})`
          })
          .append("rect")
          .attr("stroke", "lightgray")
          .attr("stroke-width", "1px")
          .attr("width", self.personNodeWidth())
          .attr("height", self.personNodeHeight())

        personNode
          .append("rect")
          .attr("class", d => `${d.type} person-bar`)
          .attr("width", self.personNodeWidth())
          .attr("height", barHeight)

        personNode
          .append("foreignObject")
          .attr("width", self.personNodeWidth())
          .attr("height", nameHeight)
          .attr("y", barHeight)
          .html(d =>
            `<div class="person-name">${d.name}</div>`
          )
      })
  }
  personNodeWidth() {
    return 250;
  }

  personNodeHeight() {
    return 190;
  }

  getNodeWidth(d) {
    return d.data.members.length > 1 ? ( 2 * this.personNodeWidth()) + 50 : this.personNodeWidth() + 50;
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
      const parentChangedEvent = new CustomEvent("parentChanged", {})
      window.dispatchEvent(parentChangedEvent)
    } else {
      this.chart.restoreNodePosition(d3.select(domNode), attrs.duration, this.dragStartX, this.dragStartY);
      this.chart.finalizeDrop()
    }
  }
}
