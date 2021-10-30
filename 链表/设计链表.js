/**
 * 
题意：
在链表类中实现这些功能：
get(index)：获取链表中第 index 个节点的值。如果索引无效，则返回-1。
addAtHead(val)：在链表的第一个元素之前添加一个值为 val 的节点。插入后，新节点将成为链表的第一个节点。
addAtTail(val)：将值为 val 的节点追加到链表的最后一个元素。
addAtIndex(index,val)：在链表中的第 index 个节点之前添加值为 val  的节点。如果 index 等于链表的长度，则该节点将附加到链表的末尾。如果 index 大于链表长度，则不会插入节点。如果index小于0，则在头部插入节点。
deleteAtIndex(index)：如果索引 index 有效，则删除链表中的第 index 个节点。
 * 
 * 
 */
function LinkNode(val, next) {
  this.val = val;
  this.next = next;
}
function MyLinkedList() {
  this._head = null;
  this._size = 0;
  this._tail = null;
}
MyLinkedList.prototype.getNode = function (index) {
  if (index < 0 || index >= this._size) return null;
  let node = this._head;
  while (node && index-- > 0) {
    node = node.next;
  }
  return node
}
// 获取链表中第 index 个节点的值。如果索引无效，则返回-1。
MyLinkedList.prototype.get = function (index) {
  if (index < 0 || index >= this._size) return -1;
  const node = this.getNode(index)
  return node ? node.val : -1
}
// 在链表的第一个元素之前添加一个值为 val 的节点。插入后，新节点将成为链表的第一个节点。
MyLinkedList.prototype.addAtHead = function (val) {
  const newNode = new LinkNode(val, this._head);
  this._head = newNode;
  this._size++;
  // 此时说明是第一次添加，所以要把尾结点也赋值上
  if (!this._tail) this._tail = newNode;
}
// 将值为 val 的节点追加到链表的最后一个元素。
MyLinkedList.prototype.addAtTail = function (val) {
  const newNode = new LinkNode(val, null);
  this._size++;
  // 已有尾结点的情况
  if (this._tail) {
    this._tail.next = newNode;
    this._tail = newNode;
    return
  }
  //没有尾结点的情况，此时说明链表的size为0
  this._tail = newNode;
  this._head = newNode;
}
// 在链表中的第 index 个节点之前添加值为 val  的节点。
// 如果 index 大于链表长度，则不会插入节点。如果index小于0，则在头部插入节点。
// 如果 index 等于链表的长度，则该节点将附加到链表的末尾。
MyLinkedList.prototype.addAtIndex = function (index, val) {
  if (index > this._size) return new Error('index不能大于链表的长度!');
  // 如果index小于或者等于0，则在头部插入节点。
  if (index <= 0) {
    return this.addAtHead(val)
  }
  // 插在尾部
  if (index === this._size) {
    return this.addAtTail(val)
  }
  // 插在中间
  const preNode = this.getNode(index - 1)
  preNode.next = new LinkNode(val, preNode.next);
  this._size++;

}
// 如果索引 index 有效，则删除链表中的第 index 个节点。
MyLinkedList.prototype.deleteAtIndex = function (index) {
  if (index >= this._size) return new Error('index不能大于等于链表的长度!');
  if (index < 0) return new Error('index不能小于0！');
  // 处理删除头结点的情况
  if (index === 0) {
    this._head = this._head.next;
    this._size--;
    return
  }

  const preNode = this.getNode(index - 1)
  preNode.next = preNode.next.next

  // 处理删除尾结点的情况
  if (index === this._size - 1) {
    this._tail = preNode
  }

  this._size--;
}