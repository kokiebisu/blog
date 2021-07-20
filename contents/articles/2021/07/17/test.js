var searchInsert = function (nums, target) {
  if (nums[nums.length - 1] < target) {
    return nums.length
  }

  if (nums[0] > target) {
    return 0
  }

  let start = 0
  let end = nums.length - 1
  while (end >= start) {
    const middle = Math.floor((start + end) / 2)

    if (nums[middle] === target) {
      return middle
    } else if (nums[middle] > target) {
      if (nums[middle - 1] < target) {
        return middle
      }
      end = middle
    }
    if (nums[middle] < target) {
      if (nums[middle + 1] > target) {
        return middle + 1
      }
      start = middle
    }
  }
}

console.log(searchInsert([1, 3], 2))
