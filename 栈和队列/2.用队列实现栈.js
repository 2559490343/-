/*
使用队列实现栈的下列操作：
push(x) -- 元素 x 入栈
pop() -- 移除栈顶元素
top() -- 获取栈顶元素
empty() -- 返回栈是否为空

注意:
你只能使用队列的基本操作-- 也就是 push to back, peek/pop from front, size, 和 is empty 这些操作是合法的。
你所使用的语言也许不支持队列。 你可以使用 list 或者 deque（双端队列）来模拟一个队列 , 只要是标准的队列操作即可。
你可以假设所有操作都是有效的（例如, 对一个空的栈不会调用 pop 或者 top 操作）
*/
function MyStack() {
  this.queue = [];
}
MyStack.prototype.push = function (x) {
  this.queue.push(x);
};
MyStack.prototype.pop = function () {
  let size = this.queue.length;
  // 使用数组的push和shift模拟队列的先进先出
  // 循环进出直到队列的最后一个元素到了第一个，然后使用shift弹出
  while (size-- > 1) {
    this.queue.push(this.queue.shift());
  }
  return this.queue.shift();
};
MyStack.prototype.top = function () {
  const res = this.pop();
  this.queue.push(res);
  return res;
};
MyStack.prototype.empty = function () {
  return this.queue.length === 0;
};

const myStack = new MyStack();
myStack.push(1);
myStack.push(2);
console.log(myStack.top()); // 返回 2
console.log(myStack.pop()); // 返回 2
console.log(myStack.empty()); // 返回 False
