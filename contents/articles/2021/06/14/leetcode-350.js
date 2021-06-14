/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  nums1 = nums1.sort((a, b) => a - b)
  nums2 = nums2.sort((a, b) => a - b)
  let pointer1 = 0
  let pointer2 = 0
  const result = []
  while (pointer1 < nums1.length && pointer2 < nums2.length) {
    if (nums1[pointer1] === nums2[pointer2]) {
      result.push(nums1[pointer1])
      pointer1++
      nums2 = [
        ...nums2.slice(0, pointer2),
        ...nums2.slice(pointer2 + 1, nums2.length),
      ]
    } else if (nums1[pointer1] > nums2[pointer2]) {
      pointer2++
    } else {
      pointer1++
    }
  }
  return result
}

console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4]))
