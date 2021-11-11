/**
第61题:
给你一个链表的头节点 head ，旋转链表，将链表每个节点向右移动 k 个位置
输入：head = [1,2,3,4,5], k = 2
输出：[4,5,1,2,3]
 */

var rotateRight = function (head, k) {
  // 记给定链表的长度为 n，注意到当向右移动的次数 k≥n 时，
  // 我们仅需要向右移动 k mod n 次即可。
  k = k % getListLen(head);
  if (!head) return null;
  if (!head.next) return head
  let node = head;
  let lastNode;
  // 循环修改头结点和尾结点
  while (k--) {
    let oldHead = node;
    let [last, lastPre] = getLastNode(oldHead);
    lastNode = last;
    lastNode.next = oldHead;
    lastPre.next = null;
    node = lastNode;
  }
  return node;
};
function getLastNode(head) {
  let cur = head;
  let pre = null
  while (cur.next) {
    pre = cur;
    cur = cur.next
  }
  return [cur, pre]

}

function getListLen(head) {
  let len = 0;
  let cur = head;
  while (cur) {
    cur = cur.next;
    len++
  }
  return len
}