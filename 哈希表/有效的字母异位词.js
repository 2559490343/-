/**
给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。

示例 1: 输入: s = "anagram", t = "nagaram" 输出: true

示例 2: 输入: s = "rat", t = "car" 输出: false

说明: 你可以假设字符串只包含小写字母。
 */


// 1.暴力解法
// 使用双循环判断是否重复出现过
function solution1(s, t) {
  if (!s || !t) return false
  if (s.length !== t.length) return false;
  let smap = {};
  let tmap = {};
  for (let i = 0; i < s.length; i++) {
    let schar = s[i];
    smap[schar] ? (smap[schar]++) : (smap[schar] = 1)
    let sameCount = 0;
    for (let j = 0; j < t.length; j++) {
      let tchar = t[j];
      if (schar === tchar) {
        sameCount++;
      }
      tmap[tchar] = sameCount;
    }
    if (sameCount === 0) return false
  }
  let keys = Object.keys(smap);
  console.log(smap, tmap);
  for (let i = 0; i < keys.length; i++) {
    if (smap[keys[i]] !== tmap[keys[i]]) return false
  }
  return true
}
// console.log(solution1("anagram", "nagaram"));

// 2.哈希表（空间复杂度没优化）
// 时间复杂度O(n) 空间复杂度O(n) 因为用了两个不定长度的对象当做map，这里空间复杂度可以优化
function solution2(s, t) {
  if (!s || !t) return false
  if (s.length !== t.length) return false;
  let smap = {};
  let tmap = {};
  for (let i = 0; i < s.length; i++) {
    let schar = s[i];
    let tchar = t[i]
    smap[schar] ? (smap[schar]++) : (smap[schar] = 1)
    tmap[tchar] ? (tmap[tchar]++) : (tmap[tchar] = 1)
  }
  let keys = Object.keys(smap);
  for (let i = 0; i < keys.length; i++) {
    if (smap[keys[i]] !== tmap[keys[i]]) return false
  }
  return true
}
// console.log(solution2("anagram", "nagaram"));
// console.log(solution2("rat", "car"));

// 3.哈希表（空间复杂度优化版）
// 但是不知道为什么，可能是js语音的数组占用空间比对象大，此方法反而占用内存更大
function solution2(s, t) {
  if (!s || !t) return false
  if (s.length !== t.length) return false;
  // 创建一个26长度的记录每个字母出现次数的数组
  const chars = new Array(26).fill(0);
  for (let i = 0; i < s.length; i++) {
    chars[s.charCodeAt(i) - 97]++
  }
  for (let i = 0; i < t.length; i++) {
    chars[t.charCodeAt(i) - 97]--
  }
  for (let i = 0; i < chars.length; i++) {
    if (chars[i] >= 1) return false
  }
  return true
}
console.log(solution2("anagram", "nagaram"));
console.log(solution2("rat", "car"));