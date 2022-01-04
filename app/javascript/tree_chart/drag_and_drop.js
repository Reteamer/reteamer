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

  setDraggingNode(node) {
    this.draggingNode = node
  },

  getDraggingNode() {
    return this.draggingNode;
  }
}
