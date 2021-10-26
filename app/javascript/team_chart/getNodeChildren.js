export default function getNodeChildren({ data, children, _children }, nodeStore) {
  // Store current node ID
  nodeStore.push(data);

  // Loop over children and recursively store descendants id (expanded nodes)
  if (children) {
    children.forEach((d) => {
      this.getNodeChildren(d, nodeStore);
    });
  }

  // Loop over _children and recursively store descendants id (collapsed nodes)
  if (_children) {
    _children.forEach((d) => {
      this.getNodeChildren(d, nodeStore);
    });
  }

  // Return result
  return nodeStore;
}
