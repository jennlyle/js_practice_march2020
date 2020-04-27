function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  let myArray = [];
  nums.forEach(function(num, index) {
    num < 1 ? myArray.push(num) : 0;
  });
  return myArray;
}

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  let myArray = []
  names.forEach(function(name, index){
    name.charAt(0) === char ? myArray.push(name) : 0;
  });
  return myArray;
}

function findVerbs(words) {
  if (!words) throw new Error("words is required");
  let myArray = [];
  words.forEach(function (word, index) {
    word.includes('to ') ? myArray.push(word) : 0;

  });
  return myArray;
}

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  let myArray = [];
  nums.forEach(function(num, index){
    Number.isInteger(num) ? myArray.push(num) : 0;
  });
  return myArray;
}

function getCities(users) {
  if (!users) throw new Error("users is required");
  // Your code here
}

function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  // Your code here
}

function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  // Your code here
}

module.exports = {
  findSmallNums,
  findNamesBeginningWith,
  findVerbs,
  getIntegers,
  getCities,
  getSquareRoots,
  findSentencesContaining,
  getLongestSides
};
