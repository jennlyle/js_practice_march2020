function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
  return nums.map(x => x * x);
}

function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");
  let myNewWord = "";
  words.forEach(function(word, index) {
    index != 0 ? word = word.charAt(0).toUpperCase() + word.slice(1) : 0;
    myNewWord += word;
  });
  return myNewWord;
}

function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");
  let count = 0;
  people.forEach(person => count += person.subjects.length);
  return count;
}

function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  let result = false;
  menu.forEach(meal => meal.ingredients.indexOf(ingredient) === 0 ? result = true : 0 );
  return result;
}

function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  let myArrayOfNums = [];
  arr1.forEach(arr1Num => arr2.forEach(arr2Num => arr1Num === arr2Num ? myArrayOfNums.push(arr2Num) : 0));
  return [...new Set(myArrayOfNums.sort())];
}

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
};
