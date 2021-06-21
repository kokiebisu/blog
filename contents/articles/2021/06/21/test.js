var countPrimes = function (n) {
  let count = 0
  if (n < 2) {
    return 0
  }
  for (let i = 2; i <= n; i++) {
    if (
      (count % 2 !== 0 || count === 2) &&
      (count % 3 !== 0 || count === 3) &&
      (count % 5 !== 0 || count === 5) &&
      (count % 7 !== 0 || count === 7)
    ) {
      count++
    }
  }
  return count
}

console.log(countPrimes(3))
