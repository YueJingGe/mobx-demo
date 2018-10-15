// 生成几位汉字
export function generateWord(number) {
  let res = '';
  for (let i = 0; i < number; i++) {
    res += String.fromCodePoint(Math.round(Math.random() * 20) + 19968);
  }
  return res;
}