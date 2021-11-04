/**
编写一个算法来判断一个数 n 是不是快乐数。
「快乐数」定义为：对于一个正整数，每一次将该数替换为它每个位置上的数字的平方和，然后重复这个过程直到这个数变为 1，也可能是 无限循环 但始终变不到 1。如果 可以变为  1，那么这个数就是快乐数。
如果 n 是快乐数就返回 True ；不是，则返回 False 。
示例：
输入：19
输出：true
解释：
1^2 + 9^2 = 82
8^2 + 2^2 = 68
6^2 + 8^2 = 100
1^2 + 0^2 + 0^2 = 1
 */

// 思路:
// 这道题目看上去貌似一道数学问题，其实并不是！
// 题目中说了会 无限循环，那么也就是说求和的过程中，sum会重复出现，这对解题很重要！
// sum一旦出现重复，说明就进入了死循环
// 
function solution(n) {
  if (isNaN(n)) return false;
  if (n < 0) return false;
  const resultMap = {};
  let arr = String(n).split('').map(item => Number(item));
  do {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i] * arr[i]
    }
    if (sum === 1) return true
    if (resultMap[sum]) {
      return false
    } else {
      resultMap[sum] = 1;
    }
    arr = String(sum).split('').map(item => Number(item));
  } while (true)
  // return false
}
console.log(solution(123));
console.log(solution(19));