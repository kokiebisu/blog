var containsDuplicate = function (nums) {
  return Array.from(new Set(nums)).sort().join("") !== nums.sort().join("")
}

console.log(containsDuplicate([1, 2, 3]))
