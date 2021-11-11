/**
给定一个赎金信 (ransom) 字符串和一个杂志(magazine)字符串，
判断第一个字符串 ransom 能不能由第二个字符串 magazines 里面的字符构成。
如果可以构成，返回 true ；否则返回 false。
(题目说明：为了不暴露赎金信字迹，要从杂志上搜索各个需要的字母，组成单词来表达意思。
  杂志字符串中的每个字符只能在赎金信字符串中使用一次。)
注意：

你可以假设两个字符串均只含有小写字母。
canConstruct("a", "b") -> false
canConstruct("aa", "ab") -> false
canConstruct("aa", "aab") -> true
 */

// 因为题目所只有小写字母，那可以采用空间换取时间的哈希策略，
//  用一个长度为26的数组还记录magazine里字母出现的次数。
// 然后再用ransomNote去验证这个数组是否包含了ransomNote所需要的所有字母。
function solution(ransomNote, magazine) {
  let mapArr = Array(26).fill(0)
  for (let i = 0; i < magazine.length; i++) {
    mapArr[magazine.charCodeAt(i) - 97]++
  }
  for (let i = 0; i < ransomNote.length; i++) {
    mapArr[ransomNote.charCodeAt(i) - 97]--
    if (mapArr[ransomNote.charCodeAt(i) - 97] < 0) {
      return false
    }
  }
  return true
}
console.log(solution("a", "b"));
console.log(solution("aa", "ab"));
console.log(solution("aa", "aab"));
