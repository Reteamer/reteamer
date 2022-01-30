import {select, selection} from "d3-selection";
import {cumsum, max, min, sum} from "d3-array";
import {stratify, tree} from "d3-hierarchy";
import {zoom, zoomIdentity} from "d3-zoom";
import {drag} from "d3-drag";
import {flextree} from "d3-flextree";
import {linkHorizontal} from "d3-shape";
import initializeEnterExitUpdatePattern from "./patternify";
import api from "./api";
import Diagonals from "./diagonals";
import updateLinks from "./update_links";
import updateConnections from "./update_connections";
import updateNodes from "./update_nodes";
import Utils from "./utils";

const d3 = {
  selection,
  select,
  max,
  min,
  sum,
  cumsum,
  drag,
  tree,
  stratify,
  zoom,
  zoomIdentity,
  linkHorizontal,
}

export class TreeChart {
  constructor() {
    // Exposed variables
    const attrs = {
      id: `ID${Math.floor(Math.random() * 1000000)}`, // Id for event handlings
      firstDraw: true,
      svgWidth: document.getElementById("tree-chart").offsetWidth,
      svgHeight: document.getElementById("tree-chart").offsetHeight,
      container: "body",
      defaultTextFill: "#2C3E50",
      defaultFont: "Helvetica",
      ctx: document.createElement('canvas').getContext('2d'), //TODO: this could help with the getCoords function
      data: null,
      duration: 400,
      setActiveNodeCentered: true,
      expandLevel: 1,
      compact: true,
      rootMargin: 40,
      nodeDefaultBackground: 'none',
      connections: [],
      lastTransform: { x: 0, y: 0, k: 1 },
      nodeId: d => d.nodeId || d.id,
      parentNodeId: d => d.parentNodeId || d.parentId,
      backgroundColor: 'none',
      zoomBehavior: null,
      defs: function (state, visibleConnections) {
        return `<defs>
                    ${visibleConnections.map(conn => {
          const labelWidth = this.getTextWidth(conn.label, { ctx: state.ctx, fontSize: 2, defaultFont: state.defaultFont });
          return `
                       <marker id="${conn.from + "_" + conn.to}" refX="${conn._source.x < conn._target.x ? -7 : 7}" refY="5" markerWidth="500"  markerHeight="500"  orient="${conn._source.x < conn._target.x ? "auto" : "auto-start-reverse"}" >
                       <rect rx=0.5 width=${conn.label ? labelWidth + 3 : 0} height=3 y=1  fill="#152785"></rect>
                       <text font-size="2px" x=1 fill="white" y=3>${conn.label || ''}</text>
                       </marker>
                       <marker id="arrow-${conn.from + "_" + conn.to}"  markerWidth="500"  markerHeight="500"  refY="2"  refX="1" orient="${conn._source.x < conn._target.x ? "auto" : "auto-start-reverse"}" >
                       <path transform="translate(0)" d='M0,0 V4 L2,2 Z' fill='#152785' />
                       </marker>
                    `}).join("")}
                    </defs>
                    `},
      connectionsUpdate: function (d, i, arr) {
        d3.select(this)
          .attr("stroke", d => '#152785')
          .attr('stroke-linecap', 'round')
          .attr("stroke-width", d => '5')
          .attr('pointer-events', 'none')
          .attr("marker-start", d => `url(#${d.from + "_" + d.to})`)
          .attr("marker-end", d => `url(#arrow-${d.from + "_" + d.to})`)
      },
      linkUpdate: function (d, i, arr) {
        d3.select(this)
          .attr("stroke", d => d.data._upToTheRootHighlighted ? '#152785' : 'lightgray')
          .attr("stroke-width", d => d.data._upToTheRootHighlighted ? 5 : 2)

        if (d.data._upToTheRootHighlighted) {
          d3.select(this).raise()
        }
      },
      nodeUpdate: function (d, i, arr) {
        d3.select(this)
          .select('.node-rect')
          .attr("stroke", d => d.data._highlighted || d.data._upToTheRootHighlighted ? '#152785' : 'none')
          .attr("stroke-width", d.data._highlighted || d.data._upToTheRootHighlighted ? 10 : 1)
      },
      nodeWidth: d3Node => 250,
      nodeHeight: d => 150,
      siblingsMargin: d3Node => 20,
      childrenMargin: d => 60,
      neightbourMargin: (n1, n2) => 80,
      compactMarginPair: d => 100,
      compactMarginBetween: (d3Node => 20),
      onNodeClick: (d) => d,
      linkGroupArc: d3.linkHorizontal().x(d => d.x).y(d => d.y),
      nodeContent: d => `<div style="padding:5px;font-size:10px;">Sample Node(id=${d.id}), override using <br/> <br/> 
            <code>chart<br/>
            &nbsp;.nodeContent({data}=>{ <br/>
             &nbsp;&nbsp;&nbsp;&nbsp;return '' // Custom HTML <br/>
             &nbsp;})</code>
             <br/> <br/>
             Or check different <a href="https://github.com/bumbeishvili/org-chart#jump-to-examples" target="_blank">layout examples</a>
             
             </div>`,
      layout: "top",// top, left,right, bottom
      buttonContent: ({ node, state }) => {
        const icons = {
          "left": d => d ? `<div style="margin-top:-10px;line-height:1.2;font-size:25px;height:22px">‹</div>` : `<div style="margin-top:-10px;font-size:25px;height:23px">›</div>`,
          "bottom": d => d ? `<div style="margin-top:-20px;font-size:25px">ˬ</div>` : `<div style="margin-top:0px;line-height:1.2;height:11px;font-size:25px">ˆ</div>`,
          "right": d => d ? `<div style="margin-top:-10px;font-size:25px;height:23px">›</div>` : `<div style="margin-top:-10px;line-height:1.2;font-size:25px;height:22px">‹</div>`,
          "top": d => d ? `<div style="margin-top:0px;line-height:1.2;height:11px;font-size:25px">ˆ</div>` : `<div style="margin-top:-20px;font-size:25px">ˬ</div>`,
        }
        return `<div style="border-radius:3px;padding:3px;font-size:10px;margin:auto auto;background-color:lightgray"> ${icons[state.layout](node.children)}  </div>`
      },
      layoutBindings: {
        "left": {
          "nodeLeftX": node => 0,
          "nodeRightX": node => node.width,
          "nodeTopY": node => - node.height / 2,
          "nodeBottomY": node => node.height / 2,
          "nodeJoinX": node => node.x + node.width,
          "nodeJoinY": node => node.y - node.height / 2,
          "linkJoinX": node => node.x + node.width,
          "linkJoinY": node => node.y,
          "linkX": node => node.x,
          "linkY": node => node.y,
          "linkCompactXStart": node => node.x + node.width / 2,//node.x + (node.compactEven ? node.width / 2 : -node.width / 2),
          "linkCompactYStart": node => node.y + (node.compactEven ? node.height / 2 : -node.height / 2),
          "compactLinkMidX": (node, state) => node.firstCompactNode.x,// node.firstCompactNode.x + node.firstCompactNode.flexCompactDim[0] / 4 + state.compactMarginPair(node) / 4,
          "compactLinkMidY": (node, state) => node.firstCompactNode.y + node.firstCompactNode.flexCompactDim[0] / 4 + state.compactMarginPair(node) / 4,
          "linkParentX": node => node.parent.x + node.parent.width,
          "linkParentY": node => node.parent.y,
          "buttonX": node => node.width,
          "buttonY": node => node.height / 2,
          "centerTransform": ({ root, rootMargin, centerY, scale, centerX }) => `translate(${rootMargin},${centerY}) scale(${scale})`,
          "compactDimension": {
            sizeColumn: node => node.height,
            sizeRow: node => node.width,
            reverse: arr => arr.slice().reverse()
          },
          "nodeFlexSize": ({ height, width, siblingsMargin, childrenMargin, state, node }) => {
            if (state.compact && node.flexCompactDim) {
              const result = [node.flexCompactDim[0], node.flexCompactDim[1]]
              return result;
            };
            return [height + siblingsMargin, width + childrenMargin]
          },
          "zoomTransform": ({ centerY, scale }) => `translate(${0},${centerY}) scale(${scale})`,
          "diagonal": Diagonals.horizontal.bind(this),
          "swap": d => { const x = d.x; d.x = d.y; d.y = x; },
          "nodeUpdateTransform": ({ x, y, width, height }) => `translate(${x},${y - height / 2})`,
        },
        "top": {
          "nodeLeftX": node => -node.width / 2,
          "nodeRightX": node => node.width / 2,
          "nodeTopY": node => 0,
          "nodeBottomY": node => node.height,
          "nodeJoinX": node => node.x - node.width / 2,
          "nodeJoinY": node => node.y + node.height,
          "linkJoinX": node => node.x,
          "linkJoinY": node => node.y + node.height,
          "linkCompactXStart": node => node.x + (node.compactEven ? node.width / 2 : -node.width / 2),
          "linkCompactYStart": node => node.y + node.height / 2,
          "compactLinkMidX": (node, state) => node.firstCompactNode.x + node.firstCompactNode.flexCompactDim[0] / 4 + state.compactMarginPair(node) / 4,
          "compactLinkMidY": node => node.firstCompactNode.y,
          "compactDimension": {
            sizeColumn: node => node.width,
            sizeRow: node => node.height,
            reverse: arr => arr,
          },
          "linkX": node => node.x,
          "linkY": node => node.y,
          "linkParentX": node => node.parent.x,
          "linkParentY": node => node.parent.y + node.parent.height,
          "buttonX": node => node.width / 2,
          "buttonY": node => node.height,
          "centerTransform": ({ root, rootMargin, centerY, scale, centerX }) => `translate(${centerX},${rootMargin}) scale(${scale})`, // TODO: this might be a better place to compute the hiding of the fake root
          "nodeFlexSize": ({ height, width, siblingsMargin, childrenMargin, state, node, compactViewIndex }) => {
            if (state.compact && node.flexCompactDim) {
              const result = [node.flexCompactDim[0], node.flexCompactDim[1]]
              return result;
            };
            return [width + siblingsMargin, height + childrenMargin];
          },
          "zoomTransform": ({ centerX, scale }) => `translate(${centerX},0}) scale(${scale})`,
          "diagonal": Diagonals.vertical.bind(this),
          "swap": d => { },
          "nodeUpdateTransform": ({ x, y, width, height }) => `translate(${x - width / 2},${y})`,
        },
        "bottom": {
          "nodeLeftX": node => -node.width / 2,
          "nodeRightX": node => node.width / 2,
          "nodeTopY": node => -node.height,
          "nodeBottomY": node => 0,
          "nodeJoinX": node => node.x - node.width / 2,
          "nodeJoinY": node => node.y - node.height - node.height,
          "linkJoinX": node => node.x,
          "linkJoinY": node => node.y - node.height,
          "linkCompactXStart": node => node.x + (node.compactEven ? node.width / 2 : -node.width / 2),
          "linkCompactYStart": node => node.y - node.height / 2,
          "compactLinkMidX": (node, state) => node.firstCompactNode.x + node.firstCompactNode.flexCompactDim[0] / 4 + state.compactMarginPair(node) / 4,
          "compactLinkMidY": node => node.firstCompactNode.y,
          "linkX": node => node.x,
          "linkY": node => node.y,
          "compactDimension": {
            sizeColumn: node => node.width,
            sizeRow: node => node.height,
            reverse: arr => arr,
          },
          "linkParentX": node => node.parent.x,
          "linkParentY": node => node.parent.y - node.parent.height,
          "buttonX": node => node.width / 2,
          "buttonY": node => 0,
          "centerTransform": ({ root, rootMargin, centerY, scale, centerX, chartHeight }) => `translate(${centerX},${chartHeight - rootMargin}) scale(${scale})`,
          "nodeFlexSize": ({ height, width, siblingsMargin, childrenMargin, state, node }) => {
            if (state.compact && node.flexCompactDim) {
              const result = [node.flexCompactDim[0], node.flexCompactDim[1]]
              return result;
            };
            return [width + siblingsMargin, height + childrenMargin]
          },
          "zoomTransform": ({ centerX, scale }) => `translate(${centerX},0}) scale(${scale})`,
          "diagonal": Diagonals.vertical.bind(this),
          "swap": d => { d.y = -d.y; },
          "nodeUpdateTransform": ({ x, y, width, height }) => `translate(${x - width / 2},${y - height})`,
        },
        "right": {
          "nodeLeftX": node => -node.width,
          "nodeRightX": node => 0,
          "nodeTopY": node => - node.height / 2,
          "nodeBottomY": node => node.height / 2,
          "nodeJoinX": node => node.x - node.width - node.width,
          "nodeJoinY": node => node.y - node.height / 2,
          "linkJoinX": node => node.x - node.width,
          "linkJoinY": node => node.y,
          "linkX": node => node.x,
          "linkY": node => node.y,
          "linkParentX": node => node.parent.x - node.parent.width,
          "linkParentY": node => node.parent.y,
          "buttonX": node => 0,
          "buttonY": node => node.height / 2,
          "linkCompactXStart": node => node.x - node.width / 2,//node.x + (node.compactEven ? node.width / 2 : -node.width / 2),
          "linkCompactYStart": node => node.y + (node.compactEven ? node.height / 2 : -node.height / 2),
          "compactLinkMidX": (node, state) => node.firstCompactNode.x,// node.firstCompactNode.x + node.firstCompactNode.flexCompactDim[0] / 4 + state.compactMarginPair(node) / 4,
          "compactLinkMidY": (node, state) => node.firstCompactNode.y + node.firstCompactNode.flexCompactDim[0] / 4 + state.compactMarginPair(node) / 4,
          "centerTransform": ({ root, rootMargin, centerY, scale, centerX, chartWidth }) => `translate(${chartWidth - rootMargin},${centerY}) scale(${scale})`,
          "nodeFlexSize": ({ height, width, siblingsMargin, childrenMargin, state, node }) => {
            if (state.compact && node.flexCompactDim) {
              const result = [node.flexCompactDim[0], node.flexCompactDim[1]]
              return result;
            };
            return [height + siblingsMargin, width + childrenMargin]
          },
          "compactDimension": {
            sizeColumn: node => node.height,
            sizeRow: node => node.width,
            reverse: arr => arr.slice().reverse()
          },
          "zoomTransform": ({ centerY, scale }) => `translate(${0},${centerY}) scale(${scale})`,
          "diagonal": Diagonals.horizontal.bind(this),
          "swap": d => { const x = d.x; d.x = -d.y; d.y = x; },
          "nodeUpdateTransform": ({ x, y, width, height }) => `translate(${x - width},${y - height / 2})`,
        },
      }
    };

    this.getChartState = () => attrs;

    // Dynamically set getter and setter functions for Chart class
    Object.keys(attrs).forEach((key) => {
      //@ts-ignore
      this[key] = function (_) {
        if (!arguments.length) {
          return attrs[key];
        } else {
          attrs[key] = _;
        }
        return this;
      };
    });

    initializeEnterExitUpdatePattern();
  }

  // This method can be invoked via chart.setZoomFactor API, it zooms to particular scale
  initialZoom(zoomLevel) {
    const attrs = this.getChartState();
    attrs.lastTransform.k = zoomLevel;
    return this;
  }

  render() {
    //InnerFunctions which will update visuals
    const attrs = this.getChartState();
    if (!attrs.data || attrs.data.length == 0) {
      console.log('ORG CHART - Data is empty')
      return this;
    }

    //Drawing containers
    const container = d3.select(attrs.container);
    const containerRect = container.node().getBoundingClientRect();
    if (containerRect.width > 0) attrs.svgWidth = containerRect.width;

    //Calculated properties
    const calc = {
      id: `ID${Math.floor(Math.random() * 1000000)}`, // id for event handlings,
      chartWidth: attrs.svgWidth,
      chartHeight: attrs.svgHeight
    };
    attrs.calc = calc;

    // Calculate max node depth (it's needed for layout heights calculation)
    calc.centerX = calc.chartWidth / 2;
    calc.centerY = calc.chartHeight / 2;

    // ******************* BEHAVIORS  **********************
    if (attrs.firstDraw) {
      const behaviors = {
        zoom: null
      };

      // Get zooming function
      behaviors.zoom = d3.zoom().on("zoom", (event, d) => this.zoomed(event, d)).scaleExtent([0.001, 20])
      attrs.zoomBehavior = behaviors.zoom;
    }

    //****************** ROOT node work ************************

    attrs.flexTreeLayout = flextree({
      nodeSize: node => {
        const width = attrs.nodeWidth(node);;
        const height = attrs.nodeHeight(node);
        const siblingsMargin = attrs.siblingsMargin(node)
        const childrenMargin = attrs.childrenMargin(node);
        return attrs.layoutBindings[attrs.layout].nodeFlexSize({
          state: attrs,
          node: node,
          width,
          height,
          siblingsMargin,
          childrenMargin
        });
      }
    })
      .spacing((nodeA, nodeB) => nodeA.parent == nodeB.parent ? 0 : attrs.neightbourMargin(nodeA, nodeB));

    this.setLayouts({ expandNodesFirst: false });

    // *************************  DRAWING **************************
    //Add svg
    const svg = container
      .patternify({
        tag: "svg",
        selector: "svg-chart-container"
      })
      .style('background-color', attrs.backgroundColor)
      .attr("width", attrs.svgWidth)
      .attr("height", attrs.svgHeight)
      .attr("font-family", attrs.defaultFont)

    if (attrs.firstDraw) {
      svg.call(attrs.zoomBehavior)
        .on("dblclick.zoom", null)
        .attr("cursor", "move")
    }

    attrs.svg = svg;

    //Add container g element
    const chart = svg
      .patternify({
        tag: "g",
        selector: "chart"
      })

    // Add one more container g element, for better positioning controls
    attrs.centerG = chart
      .patternify({
        tag: "g",
        selector: "center-group"
      })

    attrs.linksWrapper = attrs.centerG.patternify({
      tag: "g",
      selector: "links-wrapper"
    })

    attrs.nodesWrapper = attrs.centerG.patternify({
      tag: "g",
      selector: "nodes-wrapper"
    })

    attrs.connectionsWrapper = attrs.centerG.patternify({
      tag: "g",
      selector: "connections-wrapper"
    })

    attrs.defsWrapper = svg.patternify({
      tag: "g",
      selector: "defs-wrapper"
    })

    if (attrs.firstDraw) {
      attrs.centerG.attr("transform", () => {
        return attrs.layoutBindings[attrs.layout].centerTransform({
          centerX: calc.centerX,
          centerY: calc.centerY,
          scale: attrs.lastTransform.k,
          rootMargin: attrs.rootMargin,
          root: attrs.root,
          chartHeight: calc.chartHeight,
          chartWidth: calc.chartWidth
        })
      });
    }

    attrs.chart = chart;

    // Display tree contents
    this.update(attrs.root);


    //#########################################  UTIL FUNCS ##################################
    // This function restyles foreign object elements ()

    d3.select(window).on(`resize.${attrs.id}`, () => {
      const containerRect = d3.select(attrs.container).node().getBoundingClientRect();
      attrs.svg.attr('width', containerRect.width)
    });

    if (attrs.firstDraw) {
      attrs.firstDraw = false;
    }

    return this;
  }

  groupBy(array, accessor, aggegator) {
    const grouped = {}
    array.forEach(item => {
      const key = accessor(item)
      if (!grouped[key]) {
        grouped[key] = []
      }
      grouped[key].push(item)
    })

    Object.keys(grouped).forEach(key => {
      grouped[key] = aggegator(grouped[key])
    })
    return Object.entries(grouped);
  }
  #calculateCompactFlexDimensions(root) {
    const attrs = this.getChartState();
    root.eachBefore(node => {
      node.firstCompact = null;
      node.compactEven = null;
      node.flexCompactDim = null;
      node.firstCompactNode = null;
    })
    root.eachBefore(node => {
      if (node.children && node.children.length > 1) {
        const compactChildren = node.children.filter(d => !d.children);
        if (compactChildren.length < 2) return;
        compactChildren.forEach((child, i) => {
          if (!i) child.firstCompact = true;
          if (i % 2) child.compactEven = false;
          else child.compactEven = true;
          child.row = Math.floor(i / 2);
        })
        const evenMaxColumnDimension = d3.max(compactChildren.filter(d => d.compactEven), attrs.layoutBindings[attrs.layout].compactDimension.sizeColumn);
        const oddMaxColumnDimension = d3.max(compactChildren.filter(d => !d.compactEven), attrs.layoutBindings[attrs.layout].compactDimension.sizeColumn);
        const columnSize = Math.max(evenMaxColumnDimension, oddMaxColumnDimension) * 2;
        const rowsMapNew = this.groupBy(compactChildren, d => d.row, reducedGroup => d3.max(reducedGroup, d => attrs.layoutBindings[attrs.layout].compactDimension.sizeRow(d) + attrs.compactMarginBetween(d)));
        const rowSize = d3.sum(rowsMapNew.map(v => v[1]))
        compactChildren.forEach(node => {
          node.firstCompactNode = compactChildren[0];
          if (node.firstCompact) {
            node.flexCompactDim = [
              columnSize + attrs.compactMarginPair(node),
              rowSize - attrs.compactMarginBetween(node)
            ];
          } else {
            node.flexCompactDim = [0, 0];
          }
        })
        node.flexCompactDim = null;
      }
    })
  }

  #calculateCompactFlexPositions(root) {
    const attrs = this.getChartState();
    root.eachBefore(node => {
      if (node.children) {
        const compactChildren = node.children.filter(d => d.flexCompactDim);
        const fch = compactChildren[0];
        if (!fch) return;
        compactChildren.forEach((child, i, arr) => {
          if (i == 0) fch.x -= fch.flexCompactDim[0] / 2;
          if (i & i % 2 - 1) child.x = fch.x + fch.flexCompactDim[0] * 0.25 - attrs.compactMarginPair(child) / 4;
          else if (i) child.x = fch.x + fch.flexCompactDim[0] * 0.75 + attrs.compactMarginPair(child) / 4;
        })
        const centerX = fch.x + fch.flexCompactDim[0] * 0.5;
        fch.x = fch.x + fch.flexCompactDim[0] * 0.25 - attrs.compactMarginPair(fch) / 4;
        const offsetX = node.x - centerX;
        if (Math.abs(offsetX) < 10) {
          compactChildren.forEach(d => d.x += offsetX);
        }

        const rowsMapNew = this.groupBy(compactChildren, d => d.row, reducedGroup => d3.max(reducedGroup, d => attrs.layoutBindings[attrs.layout].compactDimension.sizeRow(d)));
        const cumSum = d3.cumsum(rowsMapNew.map(d => d[1] + attrs.compactMarginBetween(d)));
        compactChildren
          .forEach((node, i) => {
            if (node.row) {
              node.y = fch.y + cumSum[node.row - 1]
            } else {
              node.y = fch.y;
            }
          })

      }
    })
  }

  // This function basically redraws visible graph, based on nodes state
  update({ x0, y0, x = 0, y = 0, width, height }) {
    const attrs = this.getChartState();
    const calc = attrs.calc;


    if (attrs.compact) {
      this.#calculateCompactFlexDimensions(attrs.root);
    }

    //  Assigns the x and y position for the nodes
    const treeData = attrs.flexTreeLayout(attrs.root);

    // Reassigns the x and y position for the based on the compact layout
    if (attrs.compact) {
      this.#calculateCompactFlexPositions(attrs.root);
    }

    const nodes = treeData.descendants();

    updateLinks(treeData, nodes, attrs, x0, y0, width, height, x, y);
    updateConnections.call(this, attrs, nodes, x0, y0, width, height);
    updateNodes.call(this, attrs, nodes, x0, y0, width, height, x, y);

  }

  restyleForeignObjectElements() {
    const attrs = this.getChartState();

    attrs.svg
      .selectAll(".node-foreign-object")
      .attr("width", ({ width }) => `${width}`)
      .attr("height", ({ height }) => `${height}`)
      .each(function (d, i, nodes) { return attrs.nodeContent.bind(this)(d, i, nodes, attrs) })
  }

  // Toggle children on click.
  onButtonClick(event, d) {
    const attrs = this.getChartState();
    if (attrs.setActiveNodeCentered) {
      d.data._centered = true;
      d.data._centeredWithDescendants = true;
    }

    // If childrens are expanded
    if (d.children) {
      //Collapse them
      d._children = d.children;
      d.children = null;

      // Set descendants expanded property to false
      this.setExpansionFlagToChildren(d, false);
    } else {
      // Expand children
      d.children = d._children;
      d._children = null;

      // Set each children as expanded
      d.children.forEach(({ data }) => (data._expanded = true));
    }

    // Redraw Graph
    this.update(d);
  }

  // This function changes `expanded` property to descendants
  setExpansionFlagToChildren({ data, children, _children }, flag) {
    // Set flag to the current property
    data._expanded = flag;

    // Loop over and recursively update expanded children's descendants
    if (children) {
      children.forEach((d) => {
        this.setExpansionFlagToChildren(d, flag);
      });
    }

    // Loop over and recursively update collapsed children's descendants
    if (_children) {
      _children.forEach((d) => {
        this.setExpansionFlagToChildren(d, flag);
      });
    }
  }

  // Method which only expands nodes, which have property set "expanded=true"
  expandSomeNodes(d) {
    // If node has expanded property set
    if (d.data._expanded) {
      // Retrieve node's parent
      let parent = d.parent;

      // While we can go up
      while (parent) {
        // Expand all current parent's children
        if (parent._children) {
          parent.children = parent._children;
        }

        // Replace current parent holding object
        parent = parent.parent;
      }
    }

    // Recursivelly do the same for collapsed nodes
    if (d._children) {
      d._children.forEach((ch) => this.expandSomeNodes(ch));
    }

    // Recursivelly do the same for expanded nodes
    if (d.children) {
      d.children.forEach((ch) => this.expandSomeNodes(ch));
    }
  }

  // This function updates nodes state and redraws graph, usually after data change
  updateNodesState() {
    const attrs = this.getChartState();

    this.setLayouts({ expandNodesFirst: true });

    // Redraw Graphs
    this.update(attrs.root);
  }

  setLayouts({ expandNodesFirst = true }) {
    const attrs = this.getChartState();
    // Store new root by converting flat data to hierarchy
    attrs.root = d3
      .stratify()
      .id((d) => attrs.nodeId(d))
      .parentId(d => attrs.parentNodeId(d))(attrs.data);

    attrs.root.each((node, i, arr) => {
      let width = attrs.nodeWidth(node);
      let height = attrs.nodeHeight(node);
      Object.assign(node, { width, height })
    })

    // Store positions, where children appear during their enter animation
    attrs.root.x0 = 0;
    attrs.root.y0 = 0;
    attrs.allNodes = attrs.root.descendants();

    // Store direct and total descendants count
    attrs.allNodes.forEach((d) => {
      Object.assign(d.data, {
        _directSubordinates: d.children ? d.children.length : 0,
        _totalSubordinates: d.descendants().length - 1
      });
    });

    if (attrs.root.children) {
      if (expandNodesFirst) {
        // Expand all nodes first
        attrs.root.children.forEach(this.expand);
      }
      // Then collapse them all
      attrs.root.children.forEach((d) => this.collapse(d));

      // Collapse root if level is 0
      if (attrs.expandLevel == 0) {
        attrs.root._children = attrs.root.children;
        attrs.root.children = null;
      }

      // Then only expand nodes, which have expanded proprty set to true
      [attrs.root].forEach((ch) => this.expandSomeNodes(ch));
    }
  }

  // Function which collapses passed node and it's descendants
  collapse(d) {
    if (d.children) {
      d._children = d.children;
      d._children.forEach((ch) => this.collapse(ch));
      d.children = null;
    }
  }

  // Function which expands passed node and it's descendants
  expand(d) {
    if (d._children) {
      d.children = d._children;
      d.children.forEach((ch) => this.expand(ch));
      d._children = null;
    }
  }

  // Zoom handler function
  zoomed(event, d) {
    const attrs = this.getChartState();
    const chart = attrs.chart;

    // Get d3 event's transform object
    const transform = event.transform;

    // Store it
    attrs.lastTransform = transform;

    // Reposition and rescale chart accordingly
    chart.attr("transform", transform);

    // Apply new styles to the foreign object element
    if (Utils.isMicrosoftEdge()) {
      this.restyleForeignObjectElements();
    }
  }

  zoomTreeBounds({ x0, x1, y0, y1, params = { animate: true, scale: true } }) {
    const { centerG, svgWidth: w, svgHeight: h, svg, zoomBehavior, duration, lastTransform } = this.getChartState()
    let scaleVal = Math.min(8, 0.9 / Math.max((x1 - x0) / w, (y1 - y0) / h));
    let identity = d3.zoomIdentity.translate(w / 2, h / 2)
    identity = identity.scale(params.scale ? scaleVal : lastTransform.k)

    identity = identity.translate(-(x0 + x1) / 2, -(y0 + y1) / 2);
    // Transition zoom wrapper component into specified bounds
    svg.transition().duration(params.animate ? duration : 0).call(zoomBehavior.transform, identity);
    centerG.transition().duration(params.animate ? duration : 0).attr('transform', 'translate(0,0)')
  }

  fit({ animate = true, nodes, scale = true } = {}) {
    const attrs = this.getChartState();
    const { root } = attrs;
    let descendants = nodes ? nodes : root.descendants();
    const minX = d3.min(descendants, d => d.x + attrs.layoutBindings[attrs.layout].nodeLeftX(d))
    const maxX = d3.max(descendants, d => d.x + attrs.layoutBindings[attrs.layout].nodeRightX(d))
    const minY = d3.min(descendants, d => d.y + attrs.layoutBindings[attrs.layout].nodeTopY(d))
    const maxY = d3.max(descendants, d => d.y + attrs.layoutBindings[attrs.layout].nodeBottomY(d))

    this.zoomTreeBounds({
      params: { animate: animate, scale },
      x0: minX - 50,
      x1: maxX + 50,
      y0: minY - 50,
      y1: maxY + 50,
    });
    return this;
  }

  // This function can be invoked via chart.setExpanded API, it expands or collapses particular node
  setExpanded(id, expandedFlag = true) {

    const attrs = this.getChartState();
    // Retrieve node by node Id
    const node = attrs.allNodes.filter(({ data }) => attrs.nodeId(data) == id)[0];

    if (!node) {
      console.log(`ORG CHART - ${expandedFlag ? "EXPAND" : "COLLAPSE"} - Node with id (${id})  not found in the tree`)
      return this;
    }
    node.data._expanded = expandedFlag;
    return this;
  }

  // Calculate what size text will take
  getTextWidth(text, {
    fontSize = 14,
    fontWeight = 400,
    defaultFont = "Helvetica",
    ctx
  } = {}) {
    ctx.font = `${fontWeight || ''} ${fontSize}px ${defaultFont} `
    const measurement = ctx.measureText(text);
    return measurement.width;
  }

  getCoords(myElement) {
    var transforms = myElement.transform.baseVal; // An SVGTransformList
    var firstTransform = transforms.getItem(0);       // An SVGTransform
    if (firstTransform.type == SVGTransform.SVG_TRANSFORM_TRANSLATE){
      var x = parseFloat(firstTransform.matrix.e),
        y = parseFloat(firstTransform.matrix.f);
    }
    return [x, y]
  }
}

Object.assign(TreeChart.prototype, api);
