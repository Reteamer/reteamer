export default function updateConnections(attrs, nodes, x0, y0, width, height) {
  // --------------------------  CONNECTIONS ----------------------
  // Connections
  const connections = attrs.connections;
  const allNodesMap = {};
  attrs.allNodes.forEach(d => allNodesMap[attrs.nodeId(d.data)] = d);

  const visibleNodesMap = {}
  nodes.forEach(d => visibleNodesMap[attrs.nodeId(d.data)] = d);

  connections.forEach(connection => {
    const source = allNodesMap[connection.from];
    const target = allNodesMap[connection.to];
    connection._source = source;
    connection._target = target;
  })
  const visibleConnections = connections.filter(d => visibleNodesMap[d.from] && visibleNodesMap[d.to]);
  const defsString = attrs.defs.bind(this)(attrs, visibleConnections);
  const existingString = attrs.defsWrapper.html();
  if (defsString !== existingString) {
    attrs.defsWrapper.html(defsString)
  }

  const connectionsSel = attrs.connectionsWrapper
    .selectAll("path.connection")
    .data(visibleConnections)

  // Enter any new connections at the parent's previous position.
  const connEnter = connectionsSel
    .enter()
    .insert("path", "g")
    .attr("class", "connection")
    .attr("d", (d) => {
      const xo = attrs.layoutBindings[attrs.layout].linkJoinX({x: x0, y: y0, width, height});
      const yo = attrs.layoutBindings[attrs.layout].linkJoinY({x: x0, y: y0, width, height});
      const o = {x: xo, y: yo};
      return attrs.layoutBindings[attrs.layout].diagonal(o, o);
    });


  // Get connections update selection
  const connUpdate = connEnter.merge(connectionsSel);

  // Styling connections
  connUpdate.attr("fill", "none")

  // Transition back to the parent element position
  connUpdate
    .transition()
    .duration(attrs.duration)
    .attr('d', (d) => {
      const xs = attrs.layoutBindings[attrs.layout].linkX({
        x: d._source.x,
        y: d._source.y,
        width: d._source.width,
        height: d._source.height
      });
      const ys = attrs.layoutBindings[attrs.layout].linkY({
        x: d._source.x,
        y: d._source.y,
        width: d._source.width,
        height: d._source.height
      });
      const xt = attrs.layoutBindings[attrs.layout].linkJoinX({
        x: d._target.x,
        y: d._target.y,
        width: d._target.width,
        height: d._target.height
      });
      const yt = attrs.layoutBindings[attrs.layout].linkJoinY({
        x: d._target.x,
        y: d._target.y,
        width: d._target.width,
        height: d._target.height
      });
      return attrs.linkGroupArc({source: {x: xs, y: ys}, target: {x: xt, y: yt}})
    })

  // Allow external modifications
  connUpdate.each(attrs.connectionsUpdate);

  // Remove any  links which is exiting after animation
  const connExit = connectionsSel
    .exit()
    .transition()
    .duration(attrs.duration)
    .attr('opacity', 0)
    .remove();
}
