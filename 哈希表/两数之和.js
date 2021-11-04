/**
给定一个整数数组 nums 和一个目标值 target，
请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍。

示例:
给定 nums = [2, 7, 11, 15], target = 9
因为 nums[0] + nums[1] = 2 + 7 = 9
所以返回 [0, 1]
 */

// 1、暴力解法
// 双循环遍历找结果 O(n^2)

function solution1(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if ((nums[i] + nums[j]) === target) {
        return [i, j]
      }
    }
  }
  return []
}

// console.log(solution1([2, 7, 11, 15], 9));
// 2、相减之后查找整个数组
// 耗时也不少，其实跟暴力解法差不多
function solution2(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    let n = target - nums[i];
    let index = nums.indexOf(n);
    if (index > -1 && index !== i) return [i, index]
  }
  return []
}
// console.log(solution2([2, 7, 11, 15], 9));
// 3、利用哈希表
// 每次都判断相减的余数是否存在于map中，存在就说明找到了
// 此方法不需要每次查找都遍历整个数组，只需要遍历一整个数组一次就行，所以时间复杂度为 O(n)
function solution3(nums, target) {
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    if (map[target - nums[i]] !== undefined) {
      return [i, map[target - nums[i]]];
    }
    map[nums[i]] = i;
  }
  return []
}