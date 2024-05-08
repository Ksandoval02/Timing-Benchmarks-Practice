// Adds up positive integers from 1-n
function addNums(n) {
  let sum = 0
  for (let i = 1; i <= n; i++) {
    sum += i
  }
  return sum
  // Fill this in

}
// 1 + 2 + 3 + 4 + 5 = 15
addNums(5);  // 15

// Adds up values of addNums(1) through addNums(n)
function addManyNums(n) {
  let sum = 0
  for (let i = 1; i <= n; i++){
    sum += addNums(i)
  }
  return sum
  // Fill this in
}
// addNums(1) + addNums(2) + addNums(3)
//   = 1 + 3 + 6
//   = 10
addManyNums(3);  // 10

module.exports = [addNums, addManyNums];
