export default {
  restoreNodePosition(node, duration, x, y) {
    node.transition()
      .duration(duration)
      .attr("transform", "translate(" + x + "," + y + ")")
  },

  finalizeDrop() {
    this.draggingDatum = null;
    this.destinationDatum = null;
    this.draggingNode = null;
  }

}
