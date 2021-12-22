import {Controller} from "@hotwired/stimulus"
import {TeamChart} from '../team_chart';
import * as d3 from "d3";
import {emitDatePickedEvent, emitEvent} from "../event_emitter";
import deleteTeam from "./support/delete_team";
import buttonActions from "./team_chart_controller_button_actions";
import chartFunctions from "./support/handle_cancel_change";

export default class TeamChartController extends Controller {
  handleNewTeamData(event) {
    this.teamData = event.detail.teamData;
    this.chart
      .data(this.teamData.chart)
      .render()
      .expandAll()

    if(this.firstRender) {
      const {svg, zoomBehavior} = this.chart.getChartState();
      svg.transition().call(zoomBehavior.translateBy, 0, -100)
      this.firstRender = false
    }
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

  handlePersonMouseOver(domNode, d) {
    if(this.chart.getDraggingDatum()) {
      this.chart.setDestinationDatum(d);
      d3.select(domNode).classed("drop-target", true)
    }
  };

  isDragging() {
    return this.chart.getDraggingDatum();
  }

  handleTeamMouseOver(domNode, d) {
    if (!this.isDragging()) {
      this.showButtons(".team-buttons", domNode);
    }
  };

  connect() {
    this.firstRender = true;
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
          <div class="${node.depth == 0 ? "fake-root-node" : ""}" style="cursor: pointer;color:#716E7B;border-radius:5px;padding:4px;font-size:10px;margin:auto auto;background-color:white;border: 1px solid #E4E2E9"> 
            <span style="font-size:9px">
              ${node.children
                ? `<i class="fas fa-minus-square"></i>`
                : `<i class="fas fa-plus-square"></i>`
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
            <rect class="team-box" width="${d.width}" height="${d.height}" ></rect>
            <rect class="team-bar" width="${d.width}" ></rect>
            <foreignObject y="30" height="75" width="${d.width}">
              <div class="team-name">${d.data.name}</div>
            </foreignObject>
            <foreignObject class="team-details">
              <team-member-count> Members:  ${d.data.members.length} 👤</team-member-count>
            </foreignObject>
            <g class="people-box" transform="translate(${self.personPadding()}, 100)"></g>
            <g class="team-buttons hidden" data-controller="team-buttons">
              <g class="team-button delete-team" 
                transform="translate(${d.width - 24},${d.height - 24})"
                data-action="click->team-buttons#deleteTeam"
                data-team-buttons-team-key-param="${d.data.id}"
              >
                <circle r="10" cx="10" cy="10"></circle>
                <image xlink:href="trash.svg" x="4" y="4" height="12" width="12"></image>
              </g>
              <g class="team-button edit-team" 
                transform="translate(${d.width - 48},${d.height - 24})"
                data-action="click->team-buttons#editTeam"
                data-team-buttons-team-param="${encodeURIComponent(JSON.stringify(d.data))}" 
              >
                <circle r="10" cx="10" cy="10"></circle>
                <image xlink:href="pencil-solid.svg" x="4" y="4" height="12" width="12"></image>
              </g>
            </g>
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
          .attr("data-controller", "person-node")
          .attr("data-person-node-person-string-value", (member) => encodeURIComponent(JSON.stringify(member)))
          .attr("transform",(d, i) => {
            const x = i%2 * (self.personNodeWidth() + self.personPadding());
            const y = Math.floor(i/2) * (self.personNodeHeight() + self.personPadding());
            return `translate(${x},${y})`
          })


        d3.selectAll(".team-button")
          .attr("cursor", "pointer")
          .call(d3.drag()
            .on("start", null))

        d3.selectAll("g.node").each(function(d) {
          d3.select(this).selectAll(".delete-team").on("click", function(e) {
            deleteTeam(d.data)
          })
        })

        d3.selectAll("g.team-node")
          .on("mouseover", function(event, d) {
            self.handleTeamMouseOver(this, d);
          })
          .on("mouseout", function(event, d) {
            self.handleTeamMouseOut(this, d);
          })

        d3.selectAll("g.nodes-wrapper g.node")
          .on("mouseover", function(event, d) {
            self.handlePersonMouseOver(this, d);
          })
          .on("mouseout", function(event, d) {
            self.handlePersonMouseOut(this, d);
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
          .on("mouseover", function(event, d) {
            self.showButtons(".people-buttons", this);
          })
          .on("mouseout", function(event, d) {
            self.hideButtons(".people-buttons", this);
          })
      })
  }

  getNodeWidth(d) {
    return d.data.members.length > 1 ? (2 * this.personNodeWidth()) + this.personPadding() * 3 : this.personNodeWidth() + this.personPadding() * 2;
  }

  getNodeHeight(d) {
    const numberOfColumns = Math.ceil(d.data.members.length / 2);
    const calculatedHeight = 150 + numberOfColumns * this.personNodeHeight();
    return Math.max(130, calculatedHeight);
  }

  handlePersonMouseOut(domNode, d) {
    d3.select(domNode).classed("drop-target", false)
    if(this.chart.getDraggingDatum()) {
      this.chart.setDestinationDatum(null);
    }
  };

  handleTeamMouseOut(domNode, d) {
    this.hideButtons(".team-buttons", domNode);
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
      const assignmentKey = this.chart.getDraggingDatum().assignment_key;
      const teamKey = this.chart.getDestinationDatum().data.key
      const personKey = this.chart.getDraggingDatum().key

      let method = "PUT"
      let path = `/reteamer_api/assignments/${assignmentKey}`
      let assignmentParams = {
        "destination_team_key": teamKey,
      }

      if(assignmentKey === "unassigned") {
        method = "POST"
        assignmentParams.person_key = personKey
        path = `/reteamer_api/assignments/`
      } else {
        assignmentParams.key = assignmentKey
      }

      emitEvent("personDropped", {
        callback: (effectiveDate) => {
          assignmentParams.effective_date = effectiveDate

          fetch(path, {
            method: method,
            headers: {
              'Content-Type': 'application/json'
            },
            redirect: 'follow',
            body: JSON.stringify(assignmentParams)
          }).then(() => {
            this.chart.finalizeDrop()
            emitDatePickedEvent(effectiveDate)
          });
        }
      })
    } else {
      this.chart.restoreNodePosition(d3.select(domNode), attrs.duration, this.dragStartX, this.dragStartY);
      this.chart.finalizeDrop()
    }
  }
}

Object.assign(TeamChartController.prototype, buttonActions);
Object.assign(TeamChartController.prototype, chartFunctions);

