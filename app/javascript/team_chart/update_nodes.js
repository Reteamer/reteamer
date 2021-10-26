import Utils from "./utils";

export default function updateNodes(attrs, nodes, x0, y0, width, height, x, y) {
  // --------------------------  NODES ----------------------
  // Get nodes selection
  const nodesSelection = attrs.nodesWrapper
    .selectAll("g.node")
    .data(nodes, ({data}) => attrs.nodeId(data));

  // Enter any new nodes at the parent's previous position.
  let self = this;
  const nodeEnter = nodesSelection
    .enter()
    .append("g")
    .attr("class", "node")
    .attr("transform", (d) => {
      if (d == attrs.root) return `translate(${x0},${y0})`
      const xj = attrs.layoutBindings[attrs.layout].nodeJoinX({x: x0, y: y0, width, height});
      const yj = attrs.layoutBindings[attrs.layout].nodeJoinY({x: x0, y: y0, width, height});
      return `translate(${xj},${yj})`
    })
    .attr("cursor", "pointer")
    .on("click", (event, {data}) => {
      if ([...event.srcElement.classList].includes("node-button-foreign-object")) {
        return;
      }
      attrs.onNodeClick(attrs.nodeId(data));
    })

  // Add background rectangle for the nodes
  nodeEnter
    .patternify({
      tag: "rect",
      selector: "node-rect",
      data: (d) => [d]
    })

  // Node update styles
  const nodeUpdate = nodeEnter
    .merge(nodesSelection)
    .style("font", "12px sans-serif");

  // Add foreignObject element inside rectangle
  const foreignObject = nodeUpdate.patternify({
    tag: "foreignObject",
    selector: "node-foreign-object",
    data: (d) => [d]
  })
    .style('overflow', 'visible')

  // Add foreign object
  foreignObject.patternify({
    tag: "xhtml:div",
    selector: "node-foreign-object-div",
    data: (d) => [d]
  })

  this.restyleForeignObjectElements();

  // Add Node button circle's group (expand-collapse button)
  const nodeButtonGroups = nodeEnter
    .patternify({
      tag: "g",
      selector: "node-button-g",
      data: (d) => [d]
    })
    .on("click", (event, d) => this.onButtonClick(event, d));

  // Add expand collapse button content
  const nodeForeignObject = nodeButtonGroups
    .patternify({
      tag: "foreignObject",
      selector: "node-button-foreign-object",
      data: (d) => [d]
    })
    .attr('width', 40)
    .attr('height', 40)
    .attr('x', -20)
    .attr('y', -20)
    .style('overflow', 'visible')
    .patternify({
      tag: "xhtml:div",
      selector: "node-button-div",
      data: (d) => [d]
    })
    .style('pointer-events', 'none')
    .style('display', 'flex')
    .style('width', '100%')
    .style('height', '100%')

  // Transition to the proper position for the node
  nodeUpdate
    .transition()
    .attr("opacity", 0)
    .duration(attrs.duration)
    .attr("transform", ({x, y, width, height}) => {
      return attrs.layoutBindings[attrs.layout].nodeUpdateTransform({x, y, width, height});
    })
    .attr("opacity", 1);

  // Style node rectangles
  nodeUpdate
    .select(".node-rect")
    .attr("width", ({width}) => width)
    .attr("height", ({height}) => height)
    .attr("x", ({width}) => 0)
    .attr("y", ({height}) => 0)
    .attr("cursor", "pointer")
    .attr('rx', 3)
    .attr("fill", attrs.nodeDefaultBackground)

  // Move node button group to the desired position
  nodeUpdate
    .select(".node-button-g")
    .attr("transform", ({data, width, height}) => {
      const x = attrs.layoutBindings[attrs.layout].buttonX({width, height});
      const y = attrs.layoutBindings[attrs.layout].buttonY({width, height});
      return `translate(${x},${y})`
    })
    .attr("opacity", ({children, _children}) => {
      if (children || _children) {
        return 1;
      }
      return 0;
    });

  // Restyle node button circle
  nodeUpdate
    .select(".node-button-foreign-object .node-button-div")
    .html((node) => {
      return attrs.buttonContent({node, state: attrs})
    })

  // Restyle button texts
  nodeUpdate
    .select(".node-button-text")
    .attr("text-anchor", "middle")
    .attr("alignment-baseline", "middle")
    .attr("fill", attrs.defaultTextFill)
    .attr("font-size", ({children}) => {
      if (children) return 40;
      return 26;
    })
    .text(({children}) => {
      if (children) return "-";
      return "+";
    })
    .attr("y", Utils.isMicrosoftEdge() ? 10 : 0);

  nodeUpdate.each(attrs.nodeUpdate)

  // Remove any exiting nodes after transition
  const nodeExitTransition = nodesSelection
    .exit()
    .attr("opacity", 1)
    .transition()
    .duration(attrs.duration)
    .attr("transform", (d) => {
      const ex = attrs.layoutBindings[attrs.layout].nodeJoinX({x, y, width, height});
      const ey = attrs.layoutBindings[attrs.layout].nodeJoinY({x, y, width, height});
      return `translate(${ex},${ey})`
    })
    .on("end", function() {
      d3.select(this).remove();
    })
    .attr("opacity", 0);

  // Store the old positions for transition.
  nodes.forEach((d) => {
    d.x0 = d.x;
    d.y0 = d.y;
  });

  // CHECK FOR CENTERING
  const centeredNode = attrs.allNodes.filter(d => d.data._centered)[0]
  if (centeredNode) {
    const centeredNodes = centeredNode.data._centeredWithDescendants ? centeredNode.descendants().filter((d, i) => i < 7) : [centeredNode]
    centeredNode.data._centeredWithDescendants = null;
    centeredNode.data._centered = null;
    this.fit({
      animate: true,
      scale: false,
      nodes: centeredNodes
    })
  }
}
