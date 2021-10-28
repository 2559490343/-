// 给你一个按 非递减顺序 排序的整数数组 nums，返回 每个数字的平方 组成的新数组，要求也按 非递减顺序 排序。
// 示例 1： 输入：nums = [-4,-1,0,3,10] 输出：[0,1,9,16,100] 解释：平方后，数组变为 [16,1,0,9,100]，排序后，数组变为 [0,1,9,16,100]
// 示例 2： 输入：nums = [-7,-3,2,3,11] 输出：[4,9,9,49,121]

// 1.暴力排序 O(n + nlogn)
// 最简单暴力的就是先给每个值取平方，然后再对数组进行排序
function solution1(nums) {
  let results = [];
  for (let i = 0; i < nums.length; i++) {
    results.push(nums[i] * nums[i]);
  }
  // 升序排序
  results.sort((a, b) => a - b)
  return results
}
// console.log(solution1([-4, -1, 0, 3, 10]));

// 2.双指针法
// 数组本身是升序排序的，但是考虑到负数的平方可能更大，
// 所以平方最大值只可能在数组首尾两项，判断哪项更大就放进results的最后一项，以此类推
function solution2(nums) {
  let left = 0;
  let right = nums.length - 1;
  let results = [];
  let i = nums.length - 1;
  while (i >= 0) {
    let leftVal = nums[left] * nums[left];
    let rightVal = nums[right] * nums[right]
    if (leftVal >= rightVal) {
      results[i--] = leftVal;
      left++
    } else {
      results[i--] = rightVal
      right--
    }
  }
  return results
}
console.log(solution2([-4, -1, 0, 3, 10]));
console.log(solution2([-7, -3, 2, 3, 11]));