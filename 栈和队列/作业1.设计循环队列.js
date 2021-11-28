/**
设计你的循环队列实现。 循环队列是一种线性数据结构，其操作表现基于 FIFO（先进先出）原则并且队尾被连接在队首之后以形成一个循环。它也被称为“环形缓冲器”。
循环队列的一个好处是我们可以利用这个队列之前用过的空间。在一个普通队列里，一旦一个队列满了，我们就不能插入下一个元素，即使在队列前面仍有空间。但是使用循环队列，我们能使用这些空间去存储新的值。
你的实现应该支持如下操作：
MyCircularQueue(k): 构造器，设置队列长度为 k 。
Front: 从队首获取元素。如果队列为空，返回 -1 。
Rear: 获取队尾元素。如果队列为空，返回 -1 。
enQueue(value): 向循环队列插入一个元素。如果成功插入则返回真。
deQueue(): 从循环队列中删除一个元素。如果成功删除则返回真。
isEmpty(): 检查循环队列是否为空。
isFull(): 检查循环队列是否已满。

示例：
MyCircularQueue circularQueue = new MyCircularQueue(3); // 设置长度为 3
circularQueue.enQueue(1);  // 返回 true
circularQueue.enQueue(2);  // 返回 true
circularQueue.enQueue(3);  // 返回 true
circularQueue.enQueue(4);  // 返回 false，队列已满
circularQueue.Rear();  // 返回 3
circularQueue.isFull();  // 返回 true
circularQueue.deQueue();  // 返回 true
circularQueue.enQueue(4);  // 返回 true
circularQueue.Rear();  // 返回 4
 */


/*
思路：
根据问题描述，该问题使用的数据结构应该是首尾相连的 环。
任何数据结构中都不存在环形结构，但是可以使用一维 数组 模拟，通过操作数组的索引构建一个 虚拟 的环。很多复杂数据结构都可以通过数组实现。
对于一个固定大小的数组，任何位置都可以是队首，只要知道队列长度，就可以根据下面公式计算出队尾位置：
tailIndex=(headIndex+count−1)modcapacity
其中 capacity 是数组长度，count 是队列长度，headIndex 和 tailIndex 分别是队首 head 和队尾 tail 索引。下图展示了使用数组实现循环的队列的例子。
*/

function MyCircularQueue(k) {
  this.capacity = k;
  this.queue = Array(k).fill(null)
  this.headIndex = 0;
  this.count = 0;
}
MyCircularQueue.prototype.enQueue = function (value) {
  if (this.count === this.capacity) {
    // 说明队列已满
    return false;
  }
  // 计算尾位置然后插入值 插入时不需要-1
  this.queue[(this.headIndex + this.count) % this.capacity] = value;
  this.count++;
  return true
}
MyCircularQueue.prototype.deQueue = function () {
  if (this.count === 0) return false;
  this.headIndex = (this.headIndex + 1) % this.capacity;
  this.count--;
  return true;
}
MyCircularQueue.prototype.Front = function () {
  if (this.count === 0) return -1;
  return this.queue[this.headIndex];
}
MyCircularQueue.prototype.Rear = function () {
  if (this.count === 0) return -1;
  return this.queue[(this.headIndex + this.count - 1) % this.capacity]
}
MyCircularQueue.prototype.isEmpty = function () {
  return this.count === 0
}
MyCircularQueue.prototype.isFull = function () {

  return this.count === this.capacity
}