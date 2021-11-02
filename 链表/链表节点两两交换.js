/**
 * 给定一个链表，两两交换其中相邻的节点，并返回交换后的链表。
你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。
 *  示例：
    1.输入[1,2,3,4]，输出[2,1,4,3]
    2.输入[] ,输出[]
    3.输入[1] ,输出[1]
 */

function solution(head) {
  let vHead = {
    val: null,
    next: head
  };
  let curNode = vHead;
  while (curNode.next && curNode.next.next) {
    let tempNode = curNode.next;
    let tempNode2 = curNode.next.next.next;
    curNode.next = curNode.next.next;
    curNode.next.next = tempNode;
    curNode.next.next.next = tempNode2;
    curNode = curNode.next.next;
  }
  return vHead.next
}
// 递归
function solution2(head) {
  if (head === null || head.next === null) {
    return head;
  }
  const newHead = head.next;
  head.next = swapPairs(newHead.next);
  newHead.next = head;
  return newHead;
};
