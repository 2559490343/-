// 题目：给你一个数组 nums 和一个值 val，你需要 原地 移除所有数值等于 val 的元素，并返回移除后数组的新长度。
// 不要使用额外的数组空间，你必须仅使用 O(1) 额外空间并原地修改输入数组。
// 元素的顺序可以改变。你不需要考虑数组中超出新长度后面的元素。
// 示例 1: 给定 nums = [3,2,2,3], val = 3, 函数应该返回新的长度 2, 并且 nums 中的前两个元素均为 2。 你不需要考虑数组中超出新长度后面的元素。
// 示例 2: 给定 nums = [0,1,2,2,3,0,4,2], val = 2, 函数应该返回新的长度 5, 并且 nums 中的前五个元素为 0, 1, 3, 0, 4。

// 1.暴力解法 O(n^2)
// 暴力解法就是使用双循环，外层循环遍历数组，内层循环更新数组
function solution1(nums, val) {
  let size = nums.length;
  for (let i = 0; i < size; i++) {
    if (nums[i] === val) {
      for (let j = i + 1; j < size; j++) {
        nums[j - 1] = nums[j]
      }
      // 因为i后面的数组都向前移了一位，所以i也得向前移一位
      i--;
      // 数组长度减少了1
      size--;
    }
  }
  console.log(nums);
  return size
}
// console.log(solution1([3, 2, 2, 3], 3));
// console.log(solution1([0, 1, 2, 2, 3, 0, 4, 2], 2));

// 2.双指针解法 O(n)
// 一个快指针遍历整个数组，另一个慢指针记录数组长度（除去了目标值val）
function solution2(nums, val) {
  let slowIndex = 0;
  for (let fastIndex = 0; fastIndex < nums.length; fastIndex++) {
    if (nums[fastIndex] !== val) {
      nums[slowIndex++] = nums[fastIndex]
    }
  }
  return slowIndex

}
console.log(solution2([3, 2, 2, 3], 3));
console.log(solution2([0, 1, 2, 2, 3, 0, 4, 2], 2));
