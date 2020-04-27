function capitalize(word) {
  if (word === undefined) throw new Error("word is required");
  return word.replace(word.charAt(0), word.charAt(0).toUpperCase());
}

function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");
  return firstName.charAt(0) + "." + lastName.charAt(0);
}

function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is requied");
  if (vatRate === undefined) throw new Error("vatRate is required");
  return Math.round((originalPrice * (vatRate / 100) + originalPrice) * 100) / 100
}

function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");
  return Math.round((originalPrice - (originalPrice * reduction/100)) * 100) / 100;
}

function getMiddleCharacter(str) {
  if (str === undefined) throw new Error("str is required");
    return (str.length/2 === Math.floor(str.length/2)) ? (str.charAt((str.length/2) - 1)) + (str.charAt(str.length/2)) : str.charAt(str.length/2);
}

function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");
  return word.split("").reverse().join("");
}

function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");
  let newArray = [];
  for (let i = 0; i < words.length; i++){
    newArray[i] = reverseWord(words[i]);
  }
  return newArray;
}

function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");
  let count = 0;
  for (let i = 0; i < users.length; i++){
    if (users[i]["type"] === "Linux"){
      count++;
    }
  }
  return count;
}

function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");
  let myTotal = 0;
  for (let i = 0; i < scores.length; i++){
      myTotal += scores[i];
  }
  return Math.round((myTotal / scores.length) * 100) / 100
}

function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");
  if ((n / 3 === Math.floor(n/3)) && (n / 5 === Math.floor(n/5))){
      return "fizzbuzz";
  }
  else if (n / 3 === Math.floor(n/3)){
    return "fizz";
  }
  else if (n / 5 === Math.floor(n/5)){
    return "buzz";
  }
  else{
    return n;
  }
}

module.exports = {
  capitalize,
  generateInitials,
  addVAT,
  getSalePrice,
  getMiddleCharacter,
  reverseWord,
  reverseAllWords,
  countLinuxUsers,
  getMeanScore,
  simpleFizzBuzz
};
