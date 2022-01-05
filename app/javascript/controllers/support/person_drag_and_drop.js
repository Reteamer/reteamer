import * as d3 from "d3";

export default {
  restoreNodePosition(node, duration, x, y) {
    node.transition()
      .duration(duration)
      .attr("transform", "translate(" + x + "," + y + ")")
  },

  finalizeDrop() {
    this.setDraggingDatum(null);
    this.setDestinationDatum(null);
    this.setDraggingNode(null);
  },

  setDraggingDatum(d) {
    this.draggingDatum = d
    d3.selectAll(".person-node").attr("data-person-node-drag-in-progress-value", d != null)
  },

  getDraggingDatum() {
    return this.draggingDatum
  },

  setDestinationDatum(d) {
    this.destinationDatum = d
  },

  getDestinationDatum() {
    return this.destinationDatum
  },

  clearDestinationDatum() {
    this.destinationDatum = null
  },

  setDraggingNode(node) {
    this.draggingNode = node
  },

  getDraggingNode() {
    return this.draggingNode;
  },

  targetIsDescendant(d) {
    return this.getDraggingDatum().descendants().includes(d)
  },

  dragInProgress() {
    return !!this.getDraggingDatum();
  }
}
