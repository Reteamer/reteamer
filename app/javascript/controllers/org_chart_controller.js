import {Controller} from "stimulus"
import {TeamChart} from '../team_chart';
import * as d3 from "d3"
import { emitDatePickedEvent } from "../event_emitter";

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

    const self = this;
    d3.selectAll("g.nodes-wrapper g.node")
      .on("mouseover", function(event, d) {
        self.handleMouseOver(this, d);
      })
      .on("mouseout", function(event, d) {
        self.handleMouseOut(this, d);
      })
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


    if(this.firstRender) {
      const {svg, zoomBehavior} = this.chart.getChartState();
      svg.transition().call(zoomBehavior.translateBy, 0, -200)
      this.firstRender = false
    }
  }

  async handleCompleteChange(event) {
    const response = await fetch("/reteamer_api/people/update_supervisor", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      redirect: 'follow',
      body: JSON.stringify(
        {
          "person": {
            "effective_date": event.detail.selectedDate,
            "supervisor_key": this.dropped.supervisor_key,
            "key": this.dropped.person_key
          }
        }
      )
    });
    this.chart.finalizeDrop()
    emitDatePickedEvent(event.detail.selectedDate)
  }

  restoreNode(node, attrs, self) {
    node.transition()
      .duration(attrs.duration)
      .attr("transform", "translate(" + self.dragStartX + "," + self.dragStartY + ")")
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
      attrs.dropHandler(this.draggingDatum.data.id, this.destinationDatum.data.id)
    } else {
      this.restoreNode(d3.select(domNode), attrs, this);
      this.draggingDatum = null;
      this.destinationDatum = null;
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
      .dropHandler((person_key, supervisor_key) => {
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
      })
      .nodeWidth(d => 250)
      .compact(false)
      .layout("top") // "left", "right", "top", "bottom"
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
            <person-node class="${d.depth == 0 ? "fake-root-node" : ""}" style="padding-top:${avatarRadius}px;height:${d.height}px;">
              <person-box style="height:${d.height - 32}px;">
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
              </person-box>
            </person-node>
  `;
      })
  }
}
