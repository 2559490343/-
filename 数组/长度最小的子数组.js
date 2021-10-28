// 给定一个含有 n 个正整数的数组和一个正整数 s ，找出该数组中满足其和 ≥ s 的长度最小的 连续 子数组，并返回其长度。如果不存在符合条件的子数组，返回 0。
// 示例：
// 输入：s = 7, nums = [2,3,1,2,4,3] 输出：2 解释：子数组 [4,3] 是该条件下的长度最小的子数组。

//1.暴力解法 O(n^2)
// 双循环一直寻找符合条件的数组
function solution1(val, nums) {
  const len = nums.length;
  let currentArr = [];
  let result = [];
  let subLen = 0;
  for (let i = 0; i < len; i++) {
    let sum = 0;
    for (let j = i; j < len; j++) {
      sum += nums[j];
      currentArr.push(nums[j]);
      // 遇到总和大于等于目标值时，立刻停止，记录当前子数组，取最短的数组，然后继续下一次循环
      if (sum >= val) {
        subLen = j - i + 1;
        result = result.length === 0 ? currentArr :
          result.length > currentArr.length ? currentArr : result;
        currentArr = [];
        break;
      }
    }
  }
  return result
}
console.log(solution1(7, [2, 3, 1, 2, 4, 3]));

// 2.滑动窗口（双指针的一种） O(n)
// 演示动画https://code-thinking.cdn.bcebos.com/gifs/209.%E9%95%BF%E5%BA%A6%E6%9C%80%E5%B0%8F%E7%9A%84%E5%AD%90%E6%95%B0%E7%BB%84.gif
// 
