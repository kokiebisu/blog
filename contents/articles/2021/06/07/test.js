const longestCommonPrefix = function (strs) {
  let result = ""
  // if there is an empty array
  if (!strs.length) {
    return result
  }

  if (
    !strs.every(el => {
      return el !== ""
    })
  ) {
    return result
  }

  if (strs.length === 1) {
    return strs.join("")
  }

  // Check if there are any common prefixes.
  // Checking the first index
  for (let i = 0; i < strs[0].length; i++) {
    if (strs.every(el => el[i] === strs[0][i])) {
      result += strs[0][i]
    } else {
      break
    }
  }

  return result
}

console.log(longestCommonPrefix(["flower", "", "flower", "flowe"]))
