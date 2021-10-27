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
      .append("rect")
      .classed("team-box", true)
      .attr("width", d => self.getNodeWidth(d))
      .attr("height", d => self.getNodeHeight(d))

    const barHeight = 10;
    d3.selectAll("g.nodes-wrapper g.node")
      .append("rect")
      .classed("team-bar", true)
      .attr("width", d => self.getNodeWidth(d))
      .attr("height", barHeight)

    const nameHeight = 30
    d3.selectAll("g.nodes-wrapper g.node")
      .append("foreignObject")
      .attr("width", d => self.getNodeWidth(d))
      .attr("height", nameHeight)
      .attr("y", barHeight)
      .html(d =>
        `<div class="team-name">${d.data.name}</div>`
      )

    d3.selectAll("g.nodes-wrapper g.node")
      .append("g")
      .classed("people-box", true)
      .attr("width", d => self.getNodeWidth(d))
      .attr("height", d => self.getNodeHeight(d))

    this.chart.nodeEnter.selectAll(".people-box")
      .data(d => d.data.members)
      .enter()
      .append("g")
      .classed("person-node", true)
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
      .attr("transform", (d, index, nodes) => {
        return `translate(0,0)`
      })
      .append("rect")
      .attr("stroke", "lightgray")
      .attr("stroke-width", "1px")
      .attr("width", self.personNodeWidth())
      .attr("height", self.personNodeHeight())

    d3.selectAll("g.person-node")
      .append("rect")
      .attr("class", d => `${d.type} person-bar`)
      .attr("width", self.personNodeWidth())
      .attr("height", barHeight)

    d3.selectAll("g.person-node")
      .append("foreignObject")
      .attr("width", d => self.personNodeWidth())
      .attr("height", nameHeight)
      .attr("y", barHeight)
      .html(d =>
        `<div class="person-name">${d.name}</div>`
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

    this.chart = new TeamChart()
      .container('.chart-container')
      .nodeWidth(d => this.getNodeWidth(d, self.personNodeWidth))
      .initialZoom(0.7)
      .nodeHeight(d => this.getNodeHeight(d, self.personNodeHeight))
      .childrenMargin(d => 40)
      .compactMarginBetween(d => 15)
      .compactMarginPair(d => 80)
  }
  personNodeWidth() {
    return 250;
  }

  personNodeHeight() {
    return 190;
  }

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
      const person_key = this.draggingDatum.id;
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
