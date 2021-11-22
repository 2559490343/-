/*
请实现一个函数，把字符串 s 中的每个空格替换成"%20"。
示例 1： 输入：s = "We are happy."
输出："We%20are%20happy."
*/

/*
思路：
如果想把这道题目做到极致，就不要只用额外的辅助空间了！
首先扩充数组到每个空格替换成"%20"之后的大小。
然后从后向前替换空格，也就是双指针法，过程如下：
i指向新长度的末尾，j指向旧长度的末尾。
图例：https://tva1.sinaimg.cn/large/e6c9d24ely1go6qmevhgpg20du09m4qp.gif

---js有个方法 replace 用正则匹配所有空格然后直接替换，一行代码搞定，但是是js内部实现的
*/

function solution(s) {
  let strArr = s.split('');
  let count = 0;
  // 计算有几个空格
  for (let i = 0; i < strArr.length; i++) {
    const str = strArr[i];
    if (str === ' ') count++
  }
  let left = strArr.length - 1;
  // 原数组长度加上count*2就是替换空格后的新长度
  let right = strArr.length + count * 2 - 1;
  while (left >= 0) {
    if (strArr[left] === ' ') {
      strArr[right--] = '0';
      strArr[right--] = '2';
      strArr[right--] = '%';
      left--;
    } else {
      strArr[right--] = strArr[left--]
    }
  }
  return strArr.join('')
}
console.log(solution("We are happy."));