export default function updateLinks(treeData, nodes, attrs, x0, y0, width, height, x, y) {
  // --------------------------  LINKS ----------------------
  // Get links selection
  // Get all links
  const links = treeData.descendants().slice(1);
  nodes.forEach(attrs.layoutBindings[attrs.layout].swap)

  const linkSelection = attrs.linksWrapper
    .selectAll("path.link")
    .data(links, (d) => attrs.nodeId(d.data));

  // Enter any new links at the parent's previous position.
  const linkEnter = linkSelection
    .enter()
    .insert("path", "g")
    .attr("class", "link")
    .attr("d", (d) => {
      const xo = attrs.layoutBindings[attrs.layout].linkJoinX({x: x0, y: y0, width, height});
      const yo = attrs.layoutBindings[attrs.layout].linkJoinY({x: x0, y: y0, width, height});
      const o = {x: xo, y: yo};
      return attrs.layoutBindings[attrs.layout].diagonal(o, o, o);
    });

  // Get links update selection
  const linkUpdate = linkEnter.merge(linkSelection);

  // Styling links
  linkUpdate
    .attr("fill", "none")

  // Allow external modifications
  linkUpdate.each(attrs.linkUpdate);

  // Transition back to the parent element position
  linkUpdate
    .transition()
    .duration(attrs.duration)
    .attr("d", (d) => {
      const n = attrs.compact && d.flexCompactDim ?
        {
          x: attrs.layoutBindings[attrs.layout].compactLinkMidX(d, attrs),
          y: attrs.layoutBindings[attrs.layout].compactLinkMidY(d, attrs)
        } :
        {
          x: attrs.layoutBindings[attrs.layout].linkX(d),
          y: attrs.layoutBindings[attrs.layout].linkY(d)
        };

      const p = {
        x: attrs.layoutBindings[attrs.layout].linkParentX(d),
        y: attrs.layoutBindings[attrs.layout].linkParentY(d),
      };

      const m = attrs.compact && d.flexCompactDim ? {
        x: attrs.layoutBindings[attrs.layout].linkCompactXStart(d),
        y: attrs.layoutBindings[attrs.layout].linkCompactYStart(d),
      } : n;
      return attrs.layoutBindings[attrs.layout].diagonal(n, p, m);
    });

  // Remove any  links which is exiting after animation
  const linkExit = linkSelection
    .exit() //TODO: maybe this is a way to show people leaving the team graph?
    .transition()
    .duration(attrs.duration)
    .attr("d", (d) => {
      const xo = attrs.layoutBindings[attrs.layout].linkJoinX({x, y, width, height});
      const yo = attrs.layoutBindings[attrs.layout].linkJoinY({x, y, width, height});
      const o = {x: xo, y: yo};
      return attrs.layoutBindings[attrs.layout].diagonal(o, o);
    })
    .remove();
}
