function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
  let mySquare = [];
  for (i = 0; i < Object.values(nums).length; i++){
    mySquare[i] = Object.values(nums)[i] * Object.values(nums)[i];
  }
  return mySquare;
}

function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");
  myNewWord = "";
  for (i = 0; i < Object.values(words).length; i++){
    if (i === 0){
      myNewWord += Object.values(words)[i];
    }
    else {
      myNewWord += Object.values(words)[i].charAt(0).toUpperCase() + Object.values(words)[i].slice(1);
    }
  }
  return myNewWord;
};

function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");
  let count = 0;
  for (i = 0; i < Object.values(people).length; i++){
    for (j = 0; j < Object.values(people)[i]["subjects"].length; j++){
      count++;
    }
  }
  return count;
}

function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  count = 0;
  for (i = 0; i < Object.values(menu).length; i++){
    for (j = 0; j < Object.values(menu)[i]["ingredients"].length; j++){
      if (ingredient === Object.values(menu)[i]["ingredients"][j]){
        count++;
      }
    }
  }
  if (count > 0){
    return true;
  }
  else {
    return false;
  }
}

function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  myArrayOfNums = [];
  count = 0;
  for (i = 0; i < Object.values(arr1).length; i++) {
    for (j = 0; j < Object.values(arr2).length; j++){
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
