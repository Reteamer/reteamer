import {Controller} from "@hotwired/stimulus"
import {TreeChart} from '../tree_chart/tree_chart';
import * as d3 from "d3"
import {emitDatePickedEvent} from "../event_emitter";
import buttonActions from "./tree_chart_controller_button_actions"

export default class OrgChartController extends Controller {
  handleCancelChange(event) {
    const attrs = this.chart.getChartState()
    this.restoreNodePosition(d3.select(this.getDraggingNode()), attrs.duration, this.dragStartX, this.dragStartY);
    this.finalizeDrop()
  }

  restoreNodePosition(node, duration, x, y) {
    node.transition()
      .duration(duration)
      .attr("transform", "translate(" + x + "," + y + ")")
  }

  finalizeDrop() {
    this.clearDraggingDatum();
    this.clearDestinationDatum();
    this.clearDraggingNode();
  }

  showButtons(selector, domNode) {
    d3.select(domNode).select(selector).classed("hidden", false)
  }

  hideButtons(selector, domNode) {
    d3.select(domNode).select(selector).classed("hidden", true)
  }

  setDraggingDatum(d) {
    this.draggingDatum = d
    d3.selectAll(".person-node").attr("data-person-node-drag-in-progress-value", true)
  }

  clearDraggingDatum(d) {
    this.draggingDatum = null
    d3.selectAll(".person-node").attr("data-person-node-drag-in-progress-value", false)
  }

  getDraggingDatum() {
    return this.draggingDatum
  }

  setDestinationDatum(d) {
    if(!this.targetIsDescendant(d)) {
      this.destinationDatum = d
    }
  }

  clearDestinationDatum() {
      this.destinationDatum = null
  }

  getDestinationDatum() {
    return this.destinationDatum
  }

  setDraggingNode(node) {
    this.draggingNode = node
  }

  getDraggingNode() {
    return this.draggingNode;
  }

  clearDraggingNode() {
    this.draggingNode = null
  }

  targetIsDescendant(d) {
    return this.getDraggingDatum().descendants().includes(d)
  }

  handleNewOrgData(event) {
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

  async handleCompleteSupervisorChange(event) {
    await fetch("/reteamer_api/people/update_supervisor", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      redirect: "follow",
      body: JSON.stringify(
        {
          "person": {
            "effective_date": event.detail.selectedDate,
            "supervisor_key": this.dropped.supervisor_key,
            "key": this.dropped.person_key,
          }
        }
      )
    });
    this.finalizeDrop()
    emitDatePickedEvent(event.detail.selectedDate)
  }

  dragInProgress() {
    return !!this.getDraggingDatum();
  }

  async connect() {
    this.firstRender = true;
    const container = document.createElement("div");
    container.className = 'chart-container'
    this.element.appendChild(container);

    const self = this;
    this.chart = new TreeChart()
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
      .compact(false)
      .layout("top") // "left", "right", "top", "bottom"
      .initialZoom(0.7)
      .nodeHeight(d => 200)
      .childrenMargin(d => 40)
      .buttonContent(({ node, state }) => {
        return `<div class="${node.depth == 0 ? "fake-root-node" : ""}" style="cursor:pointer;color:#716E7B;border-radius:5px;padding:4px;font-size:10px;margin:auto auto;background-color:white;border: 1px solid #E4E2E9"> <span style="font-size:9px">${
          node.children
            ? `<i class="fas fa-minus-square"></i>`
            : `<i class="fas fa-plus-square"></i>`
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
      .nodeContent(function(d, i, nodes, attrs) {
        d3.select(this).html(d => {
          const member = d.data;
          return `
          <g 
            class="person-node ${d.depth == 0 ? "fake-root-node" : ""}" 
            transform="translate(0,0)" 
            data-controller="person-node"
            data-person-node-person-string-value="${encodeURIComponent(JSON.stringify(d.data))}"
          >
          </g>
        `});
        d3.selectAll("g.nodes-wrapper g.node")
          .selectAll(".person-node")
          .data(function(d) { return [d]; });

        d3.selectAll("g.nodes-wrapper .person-node")
          .on("mouseover", function(event, d) {
            if(self.dragInProgress()) {
              if (self.targetIsDescendant(d)) {
                d3.select(this).classed("blur", true)
              } else {
                self.setDestinationDatum(d);
                d3.select(this).classed("drop-target", true)
              }
            } else {
              self.showButtons(".people-buttons", this);
            }
          })
          .on("mouseout", function(event, d) {
            d3.select(this)
              .classed("drop-target", false)
              .classed("blur", false)
            if (self.dragInProgress()) {
              self.setDestinationDatum(null);
            } else {
              self.hideButtons(".people-buttons", this);
            }
          })
          .call(d3.drag()
            .on("start", function(event, d) {
              self.setDraggingDatum(d);
              self.setDraggingNode(this);

              let startCoords = self.chart.getCoords(this)
              self.dragStartX = startCoords[0]
              self.dragStartY = startCoords[1]
              const node = d3.select(this);
              node
                .attr('pointer-events', 'none')
                .classed('active-drag', true)
              d3.selectAll('g.node')
                .filter((group) => group.id === d.id)
                .raise()
            })
            .on("drag", function(event, d) {
              let [newX, newY] = self.chart.getCoords(this)
              d3.select(this).attr("transform", "translate(" + (newX+event.dx) + "," + (newY+event.dy) + ")");
            })
            .on("end", function(event, d) {
              d3.select(this)
                .attr('pointer-events', '') // restore the mouseover event or we won't be able to drag a 2nd time
                .classed("active-drag", false)

              const attrs1 = self.chart.getChartState()
              const destinationDatum = self.getDestinationDatum();
              const draggingDatum = self.getDraggingDatum();

              if (destinationDatum !== null && !draggingDatum.descendants().includes(destinationDatum)) {
                const person_key = draggingDatum.data.id;
                const supervisor_key = destinationDatum.data.id
                self.dropped = {person_key: person_key, supervisor_key: supervisor_key}
                const personDroppedEvent = new CustomEvent("personDropped",
                  {
                    detail: {
                      person_key: person_key,
                      supervisor_key: supervisor_key
                    }
                  }
                )
                window.dispatchEvent(personDroppedEvent)
              } else {
                self.restoreNodePosition(d3.select(this), attrs1.duration, self.dragStartX, self.dragStartY);
                self.finalizeDrop()
              }
            })
          )
      })
  }
}

Object.assign(OrgChartController.prototype, buttonActions);
