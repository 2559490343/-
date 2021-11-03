/**
给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。
进阶：你能尝试使用一趟扫描实现吗？
 */


// 典型的双指针解法,用fast指针先走n步，然后fast和slow一起走
// 直到fast走到末尾，删除slow指向的节点即可
function solution(head, n) {
  // 使用虚拟头结点
  const vhead = {
    next: head,
    val: null
  }
  let fast = vhead;
  let slow = vhead;
  while (n-- && fast) {
    fast = fast.next;
  }
  // fast再提前走一步，因为需要让slow指向删除节点的上一个节点
  fast = fast.next
  while (fast) {
    fast = fast.next;
    slow = slow.next
  }
  slow.next = slow.next.next;
  return vhead.next
}