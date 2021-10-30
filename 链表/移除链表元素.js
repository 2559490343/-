

// 需要判断删除的是不是头结点
function solution1(head, val) {
  // 删除头结点
  while (head && head.val === val) {
    head = head.next
  }

  // 不是头结点
  let node = head;
  while (node && node.next) {
    if (node.next.val === val) {
      node.next = node.next.next
    } else {
      node = node.next
    }
  }

  return head
}


// 通过创建虚拟头结点，可以统一判断，不需要单独判断是否删除头结点
function solution2(head, val) {
  let vHead = {
    next: head,
    val: null
  }
  let node = vHead;
  while (node.next) {
    if (node.next.val === val) {
      node.next = node.next.next
    } else {
      node = node.next
    }
  }
  head = vHead.next
  return head
}
