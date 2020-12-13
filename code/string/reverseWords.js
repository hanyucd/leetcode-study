/**
 * leetcode 557. 
 * 反转字符串中的单词
 *
 * 示例：
    输入："Let's take LeetCode contest"
    输出："s'teL ekat edoCteeL tsetnoc"
 */

const reverseWords = str => {
  let strAry = str.split(' '); // 字符串按空格进行分隔返回数组
  let reverseAry = strAry.map(item => { 
    return item.split('').reverse().join('');
  });
  
  return reverseAry.join(' ');
};


const rawStr = "Let's take LeetCode contest";
const result = reverseWords(rawStr);

// console.log('rawStr:', rawStr);
// console.log('result:', result);

/**
 * 翻转单词顺序
 * 
 * 示例：
 *  输入： 'I am a student.'
 *  输出： 'student. a am I'
 */

 const reverseSentence = str => {
   if(!str) return '';
   return str.split(' ').reverse().join(' ');
 };

const rawStr2 = "I am a student.";
const result2 = reverseSentence(rawStr2);

console.log('rawStr2:', rawStr2);
console.log('result2:', result2);