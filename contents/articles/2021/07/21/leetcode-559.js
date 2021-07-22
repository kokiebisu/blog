/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number}
 */
var maxDepth = function (root) {
  if (root == null) {
    return 0
  }
  function inner(node, count) {
    if (!node.children) {
      return count
    } else {
      let maxCount = 0
      for (let child of node.children) {
        maxCount = Math.max(inner(child, count + 1), maxCount)
      }
      return maxCount
    }
  }
  return inner(root, 1)
}

console.log(maxDepth([1, null, 3, 2, 4, null, 5, 6]))
