import getNodeChildren from "./getNodeChildren";

export default {
  collapseAll() {
    const { allNodes, root } = this.getChartState();
    allNodes.forEach(d => d.data._expanded = false);
    this.expandLevel(0)
    this.render();
    return this;
  },

  expandAll() {
    const { allNodes } = this.getChartState();
    allNodes.forEach(d => d.data._expanded = true);
    this.render()
    return this;
  },

  // This function can be invoked via chart.addNode API, and it adds node in tree at runtime
  addNode(obj) {
    const attrs = this.getChartState();
    const nodeFound = attrs.allNodes.filter(({ data }) => attrs.nodeId(data) === attrs.nodeId(obj))[0];
    const parentFound = attrs.allNodes.filter(({ data }) => attrs.nodeId(data) === attrs.parentNodeId(obj))[0];
    if (nodeFound) {
      console.log(`ORG CHART - ADD - Node with id "${attrs.nodeId(obj)}" already exists in tree`)
      return this;
    }
    if (!parentFound) {
      console.log(`ORG CHART - ADD - Parent node with id "${attrs.parentNodeId(obj)}" not found in the tree`)
      return this;
    }
    if (obj._centered && !obj._expanded) obj._expanded = true;
    attrs.data.push(obj);

    // Update state of nodes and redraw graph
    this.updateNodesState();

    return this;
  },

  // This function can be invoked via chart.removeNode API, and it removes node from tree at runtime
  removeNode(nodeId) {
    const attrs = this.getChartState();
    const node = attrs.allNodes.filter(({ data }) => attrs.nodeId(data) == nodeId)[0];
    if (!node) {
      console.log(`ORG CHART - REMOVE - Node with id "${nodeId}" not found in the tree`);
      return this;
    }

    // Remove all node childs
    // Retrieve all children nodes ids (including current node itself)
    node.descendants()
      .forEach(d => d.data._filteredOut = true)

    const descendants = getNodeChildren(node, []);
    descendants.forEach(d => d._filtered = true)

    // Filter out retrieved nodes and reassign data
    attrs.data = attrs.data.filter(d => !d._filtered);

    const updateNodesState = this.updateNodesState.bind(this);
    // Update state of nodes and redraw graph
    updateNodesState();

    return this;
  },

  exportSvg() {
    const { svg } = this.getChartState();
    this.downloadImage({ node: svg.node(), scale: 3, isSvg: true })
    return this;
  },

  downloadImage({ node, scale = 2, isSvg = false, save = true, onAlreadySerialized = d => { }, onLoad = d => { } }) {
    // Retrieve svg node
    const svgNode = node;

    if (isSvg) {
      let source = serializeString(svgNode);
      //add xml declaration
      source = '<?xml version="1.0" standalone="no"?>\r\n' + source;
      //convert svg source to URI data scheme.
      var url = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(source);
      saveAs(url, "graph.svg");
      onAlreadySerialized()
      return;
    }
    // Get image quality index (basically,  index you can zoom in)
    const quality = scale
    // Create image
    const image = document.createElement('img');
    image.onload = function () {
      // Create image canvas
      const canvas = document.createElement('canvas');
      // Set width and height based on SVG node
      const rect = svgNode.getBoundingClientRect();
      canvas.width = rect.width * quality;
      canvas.height = rect.height * quality;
      // Draw background
      const context = canvas.getContext('2d');
      context.fillStyle = '#FAFAFA';
      context.fillRect(0, 0, rect.width * quality, rect.height * quality);
      context.drawImage(image, 0, 0, rect.width * quality, rect.height * quality);
      // Set some image metadata
      let dt = canvas.toDataURL('image/png');
      if (onLoad) {
        onLoad(dt)
      }
      if (save) {
        // Invoke saving function
        saveAs(dt, 'graph.png');
      }

    };

    var url = 'data:image/svg+xml; charset=utf8, ' + encodeURIComponent(serializeString(svgNode));

    onAlreadySerialized()

    image.src = url// URL.createObjectURL(blob);
    // This function invokes save window
    function saveAs(uri, filename) {
      // create link
      var link = document.createElement('a');
      if (typeof link.download === 'string') {
        document.body.appendChild(link); // Firefox requires the link to be in the body
        link.download = filename;
        link.href = uri;
        link.click();
        document.body.removeChild(link); // remove the link when done
      } else {
        location.replace(uri);
      }
    }
    // This function serializes SVG and sets all necessary attributes
    function serializeString(svg) {
      const xmlns = 'http://www.w3.org/2000/xmlns/';
      const xlinkns = 'http://www.w3.org/1999/xlink';
      const svgns = 'http://www.w3.org/2000/svg';
      svg = svg.cloneNode(true);
      const fragment = window.location.href + '#';
      const walker = document.createTreeWalker(svg, NodeFilter.SHOW_ELEMENT, null, false);
      while (walker.nextNode()) {
        for (const attr of walker.currentNode.attributes) {
          if (attr.value.includes(fragment)) {
            attr.value = attr.value.replace(fragment, '#');
          }
        }
      }
      svg.setAttributeNS(xmlns, 'xmlns', svgns);
      svg.setAttributeNS(xmlns, 'xmlns:xlink', xlinkns);
      const serializer = new XMLSerializer();
      const string = serializer.serializeToString(svg);
      return string;
    }
  },

  exportImg({ full = false, scale = 3, onLoad = d => d, save = true } = {}) {
    const that = this;
    const attrs = this.getChartState();
    const { svg: svgImg, root } = attrs
    let count = 0;
    const selection = svgImg.selectAll('img')
    let total = selection.size()

    const exportImage = () => {
      const transform = JSON.parse(JSON.stringify(that.lastTransform()));
      const duration = that.duration();
      if (full) {
        that.fit();
      }
      const { svg } = that.getChartState()

      setTimeout(d => {
        that.downloadImage({
          node: svg.node(), scale, isSvg: false,
          onAlreadySerialized: d => {
            that.update(root)
          },
          onLoad: onLoad,
          save
        })
      }, full ? duration + 10 : 0)
    }

    if (total > 0) {
      selection
        .each(function () {
          that.toDataURL(this.src, (dataUrl) => {
            this.src = dataUrl;
            if (++count == total) {
              exportImage();
            }
          })
        })
    } else {
      exportImage();
    }


  },

  // Zoom in exposed method
  zoomIn() {
    const { svg, zoomBehavior } = this.getChartState();
    svg.transition().call(zoomBehavior.translateBy, 1.3);
  },

  // Zoom out exposed method
  zoomOut() {
    const { svg, zoomBehavior } = this.getChartState();
    svg.transition().call(zoomBehavior.scaleBy, 0.78);
  },

  // It can take selector which would go fullscreen
  fullscreen(elem) {
    const attrs = this.getChartState();
    const el = d3.select(elem || attrs.container).node();

    d3.select(document).on('fullscreenchange.' + attrs.id, function (d) {
      const fsElement = document.fullscreenElement || document.mozFullscreenElement || document.webkitFullscreenElement;
      if (fsElement == el) {
        setTimeout(d => {
          attrs.svg.attr('height', window.innerHeight - 40);
        }, 500)
      } else {
        attrs.svg.attr('height', attrs.svgHeight)
      }
    })

    if (el.requestFullscreen) {
      el.requestFullscreen();
    } else if (el.mozRequestFullScreen) {
      el.mozRequestFullScreen();
    } else if (el.webkitRequestFullscreen) {
      el.webkitRequestFullscreen();
    } else if (el.msRequestFullscreen) {
      el.msRequestFullscreen();
    }
  },

  setCentered(nodeId) {
    const attrs = this.getChartState();
    // this.setExpanded(nodeId)
    const node = attrs.allNodes.filter(d => attrs.nodeId(d.data) === nodeId)[0];
    if (!node) {
      console.log(`ORG CHART - CENTER - Node with id (${nodeId}) not found in the tree`)
      return this;
    }
    node.data._centered = true;
    node.data._expanded = true;
    return this;
  },

  clearHighlighting() {
    const attrs = this.getChartState();
    attrs.allNodes.forEach(d => {
      d.data._highlighted = false;
      d.data._upToTheRootHighlighted = false;
    })
    this.update(attrs.root)
  },

  setUpToTheRootHighlighted(nodeId) {
    const attrs = this.getChartState();
    const node = attrs.allNodes.filter(d => attrs.nodeId(d.data) === nodeId)[0];
    if (!node) {
      console.log(`ORG CHART - HIGHLIGHTROOT - Node with id (${nodeId}) not found in the tree`)
      return this;
    }
    node.data._upToTheRootHighlighted = true;
    node.data._expanded = true;
    node.ancestors().forEach(d => d.data._upToTheRootHighlighted = true)
    return this;
  },

  setHighlighted(nodeId) {
    const attrs = this.getChartState();
    const node = attrs.allNodes.filter(d => attrs.nodeId(d.data) === nodeId)[0];
    if (!node) {
      console.log(`ORG CHART - HIGHLIGHT - Node with id (${nodeId})  not found in the tree`);
      return this
    }
    node.data._highlighted = true;
    node.data._expanded = true;
    node.data._centered = true;
    return this;
  },

  toDataURL(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.onload = function () {
      var reader = new FileReader();
      reader.onloadend = function () {
        callback(reader.result);
      }
      reader.readAsDataURL(xhr.response);
    };
    xhr.open('GET', url);
    xhr.responseType = 'blob';
    xhr.send();
  },
}
