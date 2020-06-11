/**
 * This function will receive an array of numbers and should return the sum
 * of any numbers which are a multiple of 3 or 5
 * @param {Array} arr
 * @returns {Number}
 */
const sumMultiples = arr => {
  if (arr === undefined) throw new Error("arr is required");
  if (!Array.isArray(arr)) throw new Error("arr needs to be an Array");
  let sum = 0;
  function multOf3Or5(value){
    return ((value / 3) === (Math.floor(value / 3))) || 
    ((value / 5) === (Math.floor(value / 5))) ? true : false;
  }
  arr.forEach(num => multOf3Or5(num) === true ? sum += num : 0);
  return sum;
};

/**
 * This function will receive a string of characters and should return true/false depending on whether it is a valid DNA string. A valid DNA string may contain characters C, G, T or A only.
 * @param {String} str
 * @returns {Boolean}
 */
const isValidDNA = str => {
  if (str === undefined) throw new Error("str is required");
  if (typeof str != "string") throw new Error("str needs to be a String");
  const myDNA = ["C", "G", "T", "A"];
  let count = 0;
  str.split("").forEach(letter => !myDNA.includes(letter.toUpperCase()) ? count++ : 0);
  return count > 0 ? false : true;
};

/**
 * This function will receive a valid DNA string (see above) and should return a string of the complementary base pairs. In DNA, T always pairs with A, and C always pairs with G. So a string of "ACTG" would have a complementary DNA string of "TGAC".
 * @param {String} str
 * @returns {String}
 */
const getComplementaryDNA = str => {
  if (str === undefined) throw new Error("str is required");
  if (typeof str != "string") throw new Error("str needs to be a String");
  let myNewString = "";
  function matchPairs(letter){
    if (letter === "A"){
      return "T";
    }
    else if (letter === "T"){
      return "A";
    }
    else if (letter === "C"){
      return "G";
    }
    else {
      return "C";
    }
  }
  isValidDNA(str) === false ? myNewString = undefined : str.split("").forEach(letter=> myNewString += matchPairs(letter.toUpperCase()));
  return myNewString;
};

/**
 * This function should receive a number and return true/false depending on whether it is a prime number or not. A prime number is a number that can only be divided evenly by 1 and itself (for example, 7)
 * @param {Number} n
 * @returns {Boolean}
 */
const isItPrime = n => {
  if (n === undefined) throw new Error("n is required");
  if (Number.isInteger(n) === false) throw new Error("n needs to be an integer");
  for(let i = 2; i < n; i++) {
    if(n % i === 0) {
      return false;
    }
  }
  return n > 1;
};

/**
 * This function should receive a number and return an array of n arrays, each filled with n items. The parameter "fill" should be used as the filler of the arrays. For example, given parameters 3 and "foo" the resulting matrix should be:
 * [
 *   ["foo", "foo", "foo"],
 *   ["foo", "foo", "foo"],
 *   ["foo", "foo", "foo"]
 * ]
 * @param {Number} n
 * @param {Any} fill
 * @returns {Array}
 */
const createMatrix = (n, fill) => {
  if (n === undefined) throw new Error("n is required");
  if (fill === undefined) throw new Error("fill is required");
  if (Number.isInteger(n) === false) throw new Error("n needs to be an integer");
  let arr1 = [];
  let arr2 = [];
  for (let i = 0; i < n; i++){
    arr2 = [];
    for (let j = 0; j < n; j++){
      arr2.push(fill);
    }
    arr1.push(arr2);
  }
  return arr1;
};

/**
 * This function takes an array of staff objects in the format:
 * [
 *  { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
 *  { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
 *  ...etc
 * ]
 * and a day of the week. For the café to run successfully, at least 3 staff members are required per day. The function should return true/false depending on whether there are enough staff scheduled for the given day.
 * @param {Array} staff
 * @param {String} day
 * @returns {Boolean}
 */
const areWeCovered = (staff, day) => {
  if (staff === undefined) throw new Error("staff is required");
  if (day === undefined) throw new Error("day is required");
  if (typeof(staff) != "object") throw new Error("staff needs to be an Object");
  if (staff === null) throw new Error("staff cannot be null");
  const arrayOfDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  if (!arrayOfDays.includes(day)) throw new Error("day entered is invalid, try Monday");
  let count = 0;
  Object.values(staff).forEach(arr => arr.rota.indexOf(day) != -1 ? count++ : 0);
  return count > 2 ? true : false;
};

module.exports = {
  sumMultiples,
  isValidDNA,
  getComplementaryDNA,
  isItPrime,
  createMatrix,
  areWeCovered
};