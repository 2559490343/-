/**
 * 题意：反转一个单链表。
示例: 输入: 1->2->3->4->5->NULL 输出: 5->4->3->2->1->NULL
 */

// 1.双指针
function solution1(head) {
  // 临时节点用来记录当前节点的下一个节点
  let tempNode = null;
  // 记录当前节点的上一个节点，其实是当做新的头结点
  let preNode = null;
  let curNode = head;
  while (curNode) {
    tempNode = curNode.next;
    curNode.next = preNode;
    preNode = curNode;
    curNode = tempNode;
  }
  return preNode
}

// 2.递归
// 递归的逻辑其实跟双指针一样，只不过实现形式从循环变成了递归
function solution2(head) {
  const reverse = (preNode, curNode) => {
    if (!curNode) return preNode;
    let temp = curNode.next;
    curNode.next = preNode;
    return reverse(curNode, temp)
  }
  return reverse(null, head)
}