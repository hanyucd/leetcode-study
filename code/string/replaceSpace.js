/**
 * leetcode 剑指 Offer 05.
 * 替换空格
 *
 * 示例：
    输入：s = "We are happy."
    输出："We%20are%20happy."
 */
let rawStr = 'We are happy';

//  方法一
const replaceSpace = str => {
  return str.split(' ').join('%20');
};

const result = replaceSpace(rawStr);
console.log(result)

// 方法二
const replaceSpace2 = str => {
  return str.replace(/ /g, '%20');
};

const result2 = replaceSpace2(rawStr);
console.log(result2)