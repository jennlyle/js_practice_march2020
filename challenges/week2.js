function getFillings(sandwich) {
  if (sandwich === undefined) throw new Error("ingredients is required");
  return sandwich.fillings;
}

function isFromManchester(person) {
  if (person === undefined) throw new Error("person is required");
  return person.city === "Manchester" ? true : false;
}

function getBusNumbers(people) {
  if (people === undefined) throw new Error("people is required");
  return Math.ceil(people / 40);
}

function countSheep(arr) {
  if (arr === undefined) throw new Error("arr is required");
  /* One way to write this */
  // let count = 0;
  // for (let animal in arr){
  //   arr[animal] === "sheep" ? count++ : 0;
  // }
  // return count;
  /*Another way to write this */
  let count = 0;
  arr.forEach(function(animal) {
    animal === "sheep" ? count++ : 0;
  });
  return count;
}

function hasMPostCode(person) {
  if (person === undefined) throw new Error("person is required");
  return person.address.postCode.charAt(0) === "M" && person.address.city === "Manchester" ? true : false;
}

module.exports = {
  getFillings,
  isFromManchester,
  countSheep,
  getBusNumbers,
  hasMPostCode
};
