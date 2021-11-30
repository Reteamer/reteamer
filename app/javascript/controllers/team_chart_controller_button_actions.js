export default {
  exportImage() {
    this.chart.exportImg()
  },

  compact() {
    this.chart.compact(!this.chart.compact())
    this.chart.render().fit()
  },

  pivot() {
    const layouts = ["right","bottom","left","top"]
    const index = (layouts.indexOf(this.chart.layout())+1)%4
    this.chart.layout(layouts[index]).render().fit()
  },

  fit() {
    this.chart.fit();
  },

  expandAll() {
    this.chart.expandAll();
  },

  collapseAll() {
    this.chart.collapseAll(1);
  },

  fullscreen() {
    this.chart.fullscreen('body')
  }
}
