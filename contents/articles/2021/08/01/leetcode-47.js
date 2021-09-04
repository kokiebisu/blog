/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  const result = []
  function helper(cur, rem) {
    if (cur.length === nums.length) {
      result.push(cur)
      return
    }
    for (let i = 0; i < rem.length; i++) {
      if (i !== 0 && rem[i] === rem[i - 1]) {
        continue
      }
      helper(
        [...cur, rem[i]],
        [...rem.slice(0, i), ...rem.slice(i + 1, rem.length)]
      )
    }
  }
  helper([], nums)
  return result
}

console.log(permuteUnique([1, 1, 2])