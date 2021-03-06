// 给定一个字符串 s 和一些长度相同的单词 words。找出 s 中恰好可以由 words 中所有单词串联形成的子串的起始位置。

// 注意子串要与 words 中的单词完全匹配，中间不能有其他字符，但不需要考虑 words 中单词串联的顺序。

// 输入：
//   s = "barfoothefoobarman",
//   words = ["foo","bar"]
// 输出：[0,9]
// 解释：
// 从索引 0 和 9 开始的子串分别是 "barfoo" 和 "foobar" 。
// 输出的顺序不重要, [9,0] 也是有效答案。

// 输入：
//   s = "wordgoodgoodgoodbestword",
//   words = ["word","good","best","word"]
// 输出：[]

/**
 *
 * @param {string} s
 * @param {string[]} words
 */
function findSubstring(s, words) {
  let ret = [];
  let range = (r, _arr) => {
    if (r.length === words.length) {
      ret.push(r);
    } else {
      _arr.forEach((v, i) => {
        let tmp = [].concat(_arr);
        tmp.splice(i, 1);
        range(r.concat(v), tmp);
      });
    }
  };
  range([], words);
  return ret
    .map(i => s.indexOf(i.join("")))
    .filter(i => i !== -1)
    .sort();
}

console.log(findSubstring("barfoothefoobarman", ["foo", "bar"]));
