/**
给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。
有效字符串需满足：
左括号必须用相同类型的右括号闭合。
左括号必须以正确的顺序闭合。
注意空字符串可被认为是有效字符串。

示例 1:
输入: "()"
输出: true
示例 2:
输入: "()[]{}"
输出: true
示例 3:
输入: "(]"
输出: false
示例 4:
输入: "([)]"
输出: false
示例 5:
输入: "{[]}"
输出: true
 */

function solution(s) {
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (char === '(') stack.push(')')
    else if (char === '{') stack.push('}')
    else if (char === '[') stack.push(']')
    // 如果字符和栈顶的括号不一致，则说明不匹配
    else if (char !== stack[stack.length - 1]) return false
    // 如果还没遍历完栈就已经空了，说明不匹配
    else if (stack.length === 0) return false
    // 此时括号匹配 把栈顶弹出
    else stack.pop()
  }
  // 遍历完之后如果栈还有元素，说明多出了括号，不匹配
  return stack.length === 0
}