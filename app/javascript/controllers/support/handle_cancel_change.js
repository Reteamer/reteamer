import * as d3 from "d3";

export default {
  handleCancelChange(event) {
    const attrs = this.chart.getChartState()
    this.chart.restoreNodePosition(d3.select(this.chart.getDraggingNode()), attrs.duration, this.dragStartX, this.dragStartY);
    this.chart.finalizeDrop()
  }

}
