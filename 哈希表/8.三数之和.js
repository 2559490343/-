/**
给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，
使得 a + b + c = 0 ？请你找出所有满足条件且不重复的三元组。
注意： 答案中不可以包含重复的三元组。
示例：
给定数组 nums = [-1, 0, 1, 2, -1, -4]，
满足要求的三元组集合为： [ [-1, 0, 1], [-1, -1, 2] ]
 */


// 1.哈希表解法
// 两层for循环就可以确定 a 和b 的数值了，可以使用哈希法来确定 0-(a+b) 是否在 数组里出现过，其实这个思路是正确的，但是我们有一个非常棘手的问题，就是题目中说的不可以包含重复的三元组。
// 把符合条件的三元组放进vector中，然后再去重，这样是非常费时的，很容易超时，也是这道题目通过率如此之低的根源所在。
// 去重的过程不好处理，有很多小细节，如果在面试中很难想到位。
// 时间复杂度可以做到O(n^2)，但还是比较费时的，因为不好做剪枝操作
function solution1(nums) {

}

// 2.双指针解法
// 动画https://code-thinking.cdn.bcebos.com/gifs/15.%E4%B8%89%E6%95%B0%E4%B9%8B%E5%92%8C.gif
function solution2(nums) {
  const len = nums.length;
  if (len < 3) return [];
  nums.sort((a, b) => a - b);
  const res = [];
  for (let i = 0; i < len - 2; i++) {
    // 排序之后如果每次循环的第一个数大于零，说明相加不可能等于零，直接跳过
    if (nums[i] > 0) break;
    // a去重
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    let l = i + 1, r = len - 1;
    while (l < r) {
      const sum = nums[i] + nums[l] + nums[r];
      if (sum < 0) { l++; continue };
      if (sum > 0) { r--; continue };
      res.push([nums[i], nums[l], nums[r]])
      // b c 去重 
      while (l < r && nums[l] === nums[++l]);
      while (l < r && nums[r] === nums[--r]);
    }
  }
  return res;
}