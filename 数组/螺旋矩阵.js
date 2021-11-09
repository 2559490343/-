/**
 * 给定一个正整数 n，生成一个包含 1 到 n2 所有元素，且元素按顺时针顺序螺旋排列的正方形矩阵。
   示例:
  输入: 3 输出: [ [ 1, 2, 3 ], [ 8, 9, 4 ], [ 7, 6, 5 ] ]
 * 
 */

function solution(n) {
  let startX = 0;
  let startY = 0;
  let offset = 1;
  let count = 1;
  let loop = parseInt(n / 2);
  let mid = parseInt(n / 2);
  let result = Array.from({ length: n }, () => Array(n));
  let i, j
  while (loop--) {
    // 上面一行从左往右
    for (j = startY; j < startY + n - offset; j++) {
      result[startX][j] = count++;
    }
    // 右边列从上往下
    for (i = startX; i < startX + n - offset; i++) {
      result[i][j] = count++;
    }
    // 底部行从右往左
    for (; j > startY; j--) {
      result[i][j] = count++;
    }
    // 左边列从下往上
    for (; i > startY; i--) {
      result[i][j] = count++;
    }
    startX++;
    startY++;
    offset += 2;
  }
  // 如果n是奇数还得额外算中间那个值
  if (n % 2 === 1) {
    result[mid][mid] = count
  }
  return result
}
console.log(solution(3));