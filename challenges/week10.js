/**
 * This function takes a number, e.g. 123 and returns the sum of all its digits, e.g 6 in this example.
 * @param {Number} n
 */
const sumDigits = n => {
    if (n === undefined) throw new Error("n is required");
    if (!Number.isInteger(n)) throw new Error("n must be an integer");
    let arr = n.toString(10).split('').map(Number);
    let sum = 0;
    arr.forEach(num => sum += num);
    return sum;
};
  
/**
 * This function creates a range of numbers as an array. It received a start, an end and a step. 
 * Step is the gap between numbers in the range. For example, if start = 3, end = 11 and step = 2 
 * the resulting range would be: [3, 5, 7, 9, 11]
 * Both the start and the end numbers are inclusive.
 * Step is an optional parameter. If it is not provided, assume the step is 1.
 * @param {Number} start
 * @param {Number} end
 * @param {Number} step
 */
const createRange = (start, end, step) => {
    if (start === undefined) throw new Error("start is required");
    if (end === undefined) throw new Error("end is required");
    if (typeof(start) != "number") throw new Error("start must be a number");
    if (typeof(end) != "number") throw new Error("end must be a number");
    step === undefined ? step = 1 : 0;
    if (!Number.isInteger((end - start) / step + 1)) throw new Error("end is not a valid value for this range");
  
    let myArray = [];
    for (let $i = 0; $i < (end - start) / step + 1; $i++){
      myArray.push(start + ($i * step));
  
    }
    return myArray;
};
  
  /**
   * This function takes an array of user objects and their usage in minutes of various applications. 
   * The format of the data should be as follows:
   * [
   *  {
   *    username: "beth_1234",
   *    name: "Beth Smith",
   *    screenTime: [
   *                 { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40} },
   *                 { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31} },
   *                 { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19} },
   *                 { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61} },
   *                ]
   *   },
   *   {
   *    username: "sam_j_1989",
   *    name: "Sam Jones",
   *    screenTime: [
   *                 { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10} },
   *                 { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16} },
   *                 { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31} },
   *                ]
   *   },
   * ]
   *
   * The function should return an array of usernames of users who have used more than 100 minutes of 
   * screentime for a given date.
   * The date will be provided in the format "2019-05-04" (YYYY-MM-DD)
   * For example, if passed the above users and the date "2019-05-04" the function should 
   * return ["beth_1234"] as she used over 100 minutes of screentime on that date.
   * @param {Array} users
   */
  const getScreentimeAlertList = (users, date) => {
    if (users === undefined) throw new Error("users is required");
    if (date === undefined) throw new Error("date is required");
    if (typeof users != "object") throw new Error("users should be an object");

    function isValidDate(num) {
        if (!/^\d{4}-\d{1,2}-\d{1,2}$/.test(num)){
            return false;
        }
        let parts = num.split("-");
        let year = parseInt(parts[0], 10);
        let month = parseInt(parts[1], 10);
        let day = parseInt(parts[2], 10);
        if (year < 2000 || year > (new Date().getFullYear()) || month == 0 || month > 12) {
            return false;
        }
        let monthLength = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];
        if(year % 400 == 0 || (year % 100 != 0 && year % 4 == 0))
            monthLength[1] = 29;
        return day > 0 && day <= monthLength[month - 1];
    }
  
    if (isValidDate(date) === false) throw new Error("date is not valid");
 
    let myArray = [];
    users.forEach(function(user){
        if (typeof(user["username"]) != "string") throw new Error("username should be a string");
        if (typeof(user["name"]) != "string") throw new Error("name should be a string");
        user["screenTime"].forEach(function(screenTimeDateAndUsage){
            if (isValidDate(screenTimeDateAndUsage["date"]) === false) throw new Error("screenTime date is not valid");
             if (screenTimeDateAndUsage["date"] === date){
                const reducer = (accumulator, currentValue) => accumulator + currentValue;
                if (Object.values(screenTimeDateAndUsage["usage"]).reduce(reducer) > 99) {
                    myArray.push(user["username"]);
                }
            }
        });
    });
    return myArray;
  };
  
  /**
   * This function will receive a hexadecimal color code in the format #FF1133. A hexadecimal 
   * code is a number written in hexadecimal notation, i.e. base 16. If you want to know more 
   * about hexadecimal notation:
   * https://www.youtube.com/watch?v=u_atXp-NF6w
   * For colour codes, the first 2 chars (FF in this case) represent the amount of red, the next 2 
   * chars (11) represent the amound of green, and the last 2 chars (33) represent the amount of blue.
   * Colours can also be represented in RGB format, using decimal notation.
   * This function should transform the hex code into an RGB code in the format:
   * "rgb(255,17,51)"
   * Hint: You will need to convert each hexadecimal value for R, G and B into its decimal equivalent!
   * @param {String} str
   */
  const hexToRGB = hexStr => {
    if (hexStr === undefined) throw new Error("hexStr is required");

    hexStr.charAt(0) != "#" ? hexStr = "#" + hexStr : 0;

    let myString = "rgb(";
    myString += hexToDec(hexStr.substring(1, 3)) +",";
    myString += hexToDec(hexStr.substring(3, 5)) +",";
    myString += hexToDec(hexStr.substring(5, 7)) +")";
    return myString;

    function hexToDec(value){
      return (numbericCheck(value.substring(1, 2)) * Math.pow(16, 0)) + (numbericCheck(value.substring(0, 1)) * Math.pow(16, 1));
    }

    function numbericCheck(value){
      return isNaN(value) ? letterToNumber(value.toUpperCase()) : value;
    }

    function letterToNumber(value){
      if (value === "A"){
        return 10;
      }
      else if (value === "B"){
        return 11;
      }
      else if (value === "C"){
        return 12;
      }
      else if (value === "D"){
        return 13;
      }
      else if (value === "E"){
        return 14;
      }
      else if (value === "F"){
        return 15;
      }
    }  

  };
  
  /**
   * This function takes a noughts and crosses board represented as an array, where an empty space is 
   * represented with null.
   * [
   *  ["X", "0", null],
   *  ["X", null, "0"],
   *  ["X", null, "0"]
   * ]
   * The function should return "X" if player X has won, "0" if the player 0 has won, and null if there 
   * is currently no winner.
   * @param {Array} board
   */
  const findWinner = board => {
    if (board === undefined) throw new Error("board is required");
    if (!Array.isArray(board)) throw new Error("board must be an array");
    let myWinner = null;
    board[0][0] === board[0][1] && board[0][1] === board[0][2] ? myWinner = board[0][0] : 0;
    board[1][0] === board[1][1] && board[1][1] === board[1][2] ? myWinner = board[1][0] : 0;
    board[2][0] === board[2][1] && board[2][1] === board[2][2] ? myWinner = board[2][0] : 0;
    board[0][0] === board[1][0] && board[1][0] === board[2][0] ? myWinner = board[0][0] : 0;
    board[0][1] === board[1][1] && board[1][1] === board[2][1] ? myWinner = board[0][1] : 0;
    board[0][2] === board[1][2] && board[1][2] === board[2][2] ? myWinner = board[0][2] : 0;
    board[0][0] === board[1][1] && board[1][1] === board[2][2] ? myWinner = board[0][0] : 0;
    board[2][0] === board[1][1] && board[1][1] === board[2][0] ? myWinner = board[2][0] : 0;
    return myWinner;
  };
  
    module.exports = {
    sumDigits,
    createRange,
    getScreentimeAlertList,
    hexToRGB,
    findWinner
  };