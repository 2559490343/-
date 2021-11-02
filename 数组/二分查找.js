// 假设数组有序（升序）且无重复元素
function solution(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    let middle = parseInt((right + left) / 2);
    let x = arr[middle];
    if (x > target) {
      right = middle - 1;
    } else if (x < target) {
      left = middle + 1
    } else {
      return middle
    }
  }
  return -1
}

console.log(solution([-1, 0, 3, 5, 9, 12], 9));
console.log(solution([-1, 0, 3, 5, 9, 12], 2));