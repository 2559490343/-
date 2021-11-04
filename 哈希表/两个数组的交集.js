/**
 * 题意：给定两个数组，编写一个函数来计算它们的交集。
 * 示例：
 * 输入：nums1=[1,2,2,1],nums2=[2,2]
 * 输出：[2]
 */

// 1、遍历两个数组记录重复出现的数字然后使用set去重
function solution(nums1, nums2) {
  if (!nums1 || !nums2 || !nums1.length || !nums2.length) return []
  let map = {};
  let result = [];
  for (let i = 0; i < nums1.length; i++) {
    map[nums1[i]] ? (map[nums1[i]]++) : (map[nums1[i]] = 1)
  }
  for (let i = 0; i < nums2.length; i++) {
    if (map[nums2[i]]) map[nums2[i]] = false
  }
  console.log(map);
  let keys = Object.keys(map);
  for (let i = 0; i < keys.length; i++) {
    if (map[keys[i]] === false) {
      result.push(keys[i])
    }
  }
  return Array.from(new Set(result))
}

// console.log(solution([1, 2, 2, 1], [2, 2]));

// 2、更优解
// 直接使用set来完成过滤
function solution2(nums1, nums2) {
  if (!nums1 || !nums2 || !nums1.length || !nums2.length) return [];
  let result = new Set([]);
  // 为了保证数组更长的当参照
  // 短数组用来遍历找重复，节省时间
  if (nums2.length > nums1.length) {
    let _ = nums1;
    nums1 = nums2;
    nums2 = _;
  }
  let set = new Set(nums1);
  for (let i = 0; i < nums2.length; i++) {
    if (set.has(nums2[i])) {
      result.add(nums2[i])
    }
  }
  return Array.from(result)
}

console.log(solution2([1, 2, 2, 1], [2, 2]));
