function findSmallNums(nums) {
  let myArray = [];
  nums.forEach(num => num < 1 ? myArray.push(num) : 0);
  return myArray;
}

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  let myArray = []
  names.forEach(name => name.charAt(0) === char ? myArray.push(name) : 0);
  return myArray;
}

function findVerbs(words) {
  if (!words) throw new Error("words is required");
  let myArray = [];
  words.forEach(word => word.includes('to ') ? myArray.push(word) : 0);
  return myArray;
}

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  let myArray = [];
  nums.forEach(num => Number.isInteger(num) ? myArray.push(num) : 0);
  return myArray;
}

function getCities(users) {
  if (!users) throw new Error("users is required");
  let myArray = [];
  users.forEach(user => myArray.push(user.data.city.displayName));
  return myArray;
}

function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  let myArray = [];
  nums.forEach(function(num) {
    num = Math.round(Math.sqrt(num) * 100) / 100;
    myArray.push(num);
  });
  return myArray;
}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  let myArray = [];
  sentences.forEach(sentence => sentence.toLowerCase().includes(str) ? myArray.push(sentence) : 0);
  return myArray;
}

function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  let myArray = [];
  triangles.forEach(function (triangle){
    let myNum = 0;
    triangle.forEach(side => side > myNum ? myNum = side : 0 );
    myArray.push(myNum);
  });
  return myArray;
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
