/**
 * 反转字符串中的单词
 *
 * 示例：
    输入："Let's take LeetCode contest"
    输出："s'teL ekat edoCteeL tsetnoc"
 */

// 方法 1
const reverseWords = str => {
  let strAry = str.split(' '); // 字符串按空格进行分隔返回数组
  let reverseAry = strAry.map(item => { 
    return item.split('').reverse().join('');
  });
  
  return reverseAry.join(' ');
};


const rawStr = "Let's take LeetCode contest";
const result = reverseWords(rawStr);

console.log('rawStr:', rawStr);
console.log('result:', result);

