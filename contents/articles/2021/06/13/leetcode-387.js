/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  let stack = []
  const map = {}
  for (let i = 0; i < s.length; i++) {
    if (!map[s[i]]) {
      // add it to stack
      stack.push({ index: i, char: s[i] })
      // add it to map
      map[s[i]] = true
    } else {
      stack = stack.filter(el => el.char !== s[i])
    }
  }
  if (!stack.length) {
    return -1
  }
  return stack[0]["index"]
}

console.log(firstUniqChar("aabb"))
