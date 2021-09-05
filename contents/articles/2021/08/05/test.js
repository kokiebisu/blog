var spiral = function (nums) {
  const map = new Array(nums).fill(0).map(() => new Array(nums).fill(0))
  function helper(cur, col, row) {
    if (col >= nums || row >= nums || col < 0 || row < 0) {
      return
    }
    map[row][col] = cur
    if (col < nums && row === 0) {
      helper(cur + 1, col + 1, row)
    }
    if (row < nums && col === nums - 1) {
      helper(cur + 1, col, row + 1)
    }
    if (col < nums && row === nums - 1) {
      helper(cur + 1, col - 1, row)
    }
    if (row < nums && col === 0) {
      console.log(row - 1, col)
      if (map[row - 1][col] !== 0) {
        helper(cur + 1, col + 1, row)
      } else {
        helper(cur + 1, col, row - 1)
      }
    }
  }
  helper(1, 0, 0)
  return map
}

console.log(spiral(4))
