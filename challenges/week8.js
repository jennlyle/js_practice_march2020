const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");
  return ((nums.indexOf(n) <= 0) || (nums[nums.indexOf(n) + 1] === undefined)) ? null : nums[nums.indexOf(n) + 1];
};

const count1sand0s = str => {
  if (str === undefined) throw new Error("str is required");
  let onesCounter = 0;
  let zerosCounter = 0;
  str.split("").forEach(num => num === "1" ? onesCounter++ : zerosCounter++);
  return { 1: onesCounter, 0: zerosCounter };
};

const reverseNumber = n => {
  if (n === undefined) throw new Error("n is required");
  let array = n.toString().split("").reverse();
  let string = "";
  array.forEach(num => string = string.concat(num));
  return parseInt(string);
};

const sumArrays = arrs => {
  if (arrs === undefined) throw new Error("arrs is required");
  let sum = 0;
  arrs.forEach(arr => arr.forEach(num => sum += num));
  return sum;
};

const arrShift = arr => {
  if (arr === undefined) throw new Error("arr is required");
  arr.length === 0 ? arr = [] : [arr[0], arr[arr.length - 1]] = [arr[arr.length - 1], arr[0]];
  return arr;
};

const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
  let count = 0;
  Object.values(haystack).forEach(item => typeof item === "string" ? item.toLowerCase().includes(searchTerm.toLowerCase()) === true ? count++ : 0 : 0);
  return count > 0 ? true : false;
};

const getWordFrequencies = str => {
  if (str === undefined) throw new Error("str is required");
  str = str.replace(/[.,\/#?!$%\^&\*;:{}=\-_`~()]/g,"").split(" ");
  let obj = {}
  str.forEach(word => 
    Object.keys(obj).includes(word) ? obj[word] = obj[word] + 1 : obj[word.toLowerCase()] = 1);
  return obj;
};

module.exports = {
  findNextNumber,
  count1sand0s,
  reverseNumber,
  sumArrays,
  arrShift,
  findNeedle,
  getWordFrequencies
};
