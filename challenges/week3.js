function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
  /* One way to write this */
  // let mySquare = [];
  // for (let i = 0; i < Object.values(nums).length; i++){
  //   mySquare[i] = Object.values(nums)[i] * Object.values(nums)[i];
  // }
  // return mySquare;
  /* Another way to write this */
  return nums.map(x => x * x);
}

function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");
  /* One way to write it */
  // let myNewWord = "";
  // for (let i = 0; i < Object.values(words).length; i++){
  //   if (i === 0){
  //     myNewWord += Object.values(words)[i];
  //   }
  //   else {
  //     myNewWord += Object.values(words)[i].charAt(0).toUpperCase() + Object.values(words)[i].slice(1);
  //   }
  // }
  // return myNewWord;

  /*Another way to write it */
  let myNewWord = "";
  words.forEach(function(word, index) {
    index != 0 ? word = word.charAt(0).toUpperCase() + word.slice(1) : 0;
    myNewWord += word;
  });
  return myNewWord;
}

function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");
  /* One way to write it */
  // let count = 0;
  // for (let i = 0; i < Object.values(people).length; i++){
  //   for (let j = 0; j < Object.values(people)[i]["subjects"].length; j++){
  //     count++;
  //   }
  // }
  // return count;

  /* Another way to write it */
  let count = 0;
  people.forEach(function (person){
    count += person.subjects.length;
  });
  return count;
}

function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  /* One way to write it */
  // let count = 0;
  // for (let i = 0; i < Object.values(menu).length; i++){
  //   for (let j = 0; j < Object.values(menu)[i]["ingredients"].length; j++){
  //     if (ingredient === Object.values(menu)[i]["ingredients"][j]){
  //       count++;
  //     }
  //   }
  // }
  // if (count > 0){
  //   return true;
  // }
  // else {
  //   return false;
  // }

  /* Another way to write it */

  let result = false;
  menu.forEach(function (meal) {
    if (meal.ingredients.indexOf(ingredient) === 0) {
      result = true;
    }    
  });
  return result;
}

function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  let myArrayOfNums = [];
  let count = 0;
  for (let i = 0; i < Object.values(arr1).length; i++) {
    for (let j = 0; j < Object.values(arr2).length; j++){
      if (Object.values(arr1)[i] === Object.values(arr2)[j]){
        myArrayOfNums[count] = Object.values(arr1)[i];
        count++;
      }
    }
  }
  let uniq = [...new Set(myArrayOfNums.sort())];
  return uniq;
}

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
};
