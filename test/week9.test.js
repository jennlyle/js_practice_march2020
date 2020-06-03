const {
    sumMultiples,
    isValidDNA,
    getComplementaryDNA,
    isItPrime,
    createMatrix,
    areWeCovered
  } = require("../challenges/week9");
  
describe("sumMultiples", () => {
    test("This function will receive an array of numbers and should return the sum \n" + 
    "of any numbers which are a multiple of 3 or 5", () => {
        expect(sumMultiples([3, 5])).toEqual(8);
        expect(sumMultiples([0, 3, 5, 7])).toEqual(8);
        expect(sumMultiples([])).toEqual(0);
        expect(sumMultiples([1, 7, 33, 55, 92, 107])).toEqual(88);
        expect(sumMultiples([1, 7, 13, 15, 92, 107])).toEqual(15);
        expect(sumMultiples([1, 7, 13, 92, 107])).toEqual(0);
        expect(sumMultiples([0, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16])).toEqual(60);
    });
});

describe("isValidDNA", () => {
    test("This function will receive a string of characters and should return \n" + 
    "true/false depending on whether it is a valid DNA string. A valid DNA \n" + 
    "string may contain characters C, G, T or A only.", () => {
        expect(isValidDNA("CGTA")).toEqual(true);
    });

    test("If not valid DNA, return false", () => {
        expect(isValidDNA("abcd")).toEqual(false);
        expect(isValidDNA("1234")).toEqual(false);
    });

    test("lowercase is okay...", () => {
        expect(isValidDNA("gattaca")).toEqual(true);
    });
});

describe("getComplementaryDNA", () => {
    test("This function will receive a valid DNA string (see above) and should \n" + 
    "return a string of the complementary base pairs. In DNA, T always pairs with \n" + 
    "A, and C always pairs with G. So a string of \"ACTG\" would have a complementary \n" + 
    "DNA string of \"TGAC\".", () => {
        expect(getComplementaryDNA("ACTG")).toEqual("TGAC");
    });

    test("If not valid DNA, return undefined", () => {
        expect(getComplementaryDNA("abcd")).toEqual(undefined);
        expect(getComplementaryDNA("1234")).toEqual(undefined);
    });    

    test("lowercase is okay...", () => {
        expect(getComplementaryDNA("gattaca")).toEqual("CTAATGT");
    });
});

describe("isItPrime", () => {
    test("This function should receive a number and return true/false depending " + 
    " on whether it is a prime number or not. A prime number is a number that can " + 
    " only be divided evenly by 1 and itself (for example, 7)", () => {
        expect(isItPrime(7)).toEqual(true);
        expect(isItPrime(13)).toEqual(true);
        expect(isItPrime(14)).toEqual(false);
        expect(isItPrime(10945)).toEqual(false);
        expect(isItPrime(4391)).toEqual(true);
    });
});


describe("createMatrix", () => {
    test(" * This function should receive a number and return an array of n arrays, " + 
    " each filled with n items. The parameter \"fill\" should be used as the filler " + 
    " of the arrays. For example, given parameters 3 and \"foo\" the resulting matrix " +
    " should be: \n" +
    " [ " +
    "   [\"foo\", \"foo\", \"foo\"], " +
    "   [\"foo\", \"foo\", \"foo\"], " +
    "   [\"foo\", \"foo\", \"foo\"] " +
    " ]", () => {
        expect(createMatrix(3, "foo")).toEqual([["foo", "foo", "foo"], ["foo", "foo", "foo"], ["foo", "foo", "foo"]]);
        expect(createMatrix(5, 0)).toEqual([[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]]);
    });
});


describe("areWeCovered", () => {

    const staff = [
        { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
        { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
        { name: "Jennifer", rota: ["Monday", "Wednesday", "Friday"] },
        { name: "James", rota: ["Friday", "Sunday", "Tuesday", "Wednesday"] },
    ];

    const day1 = "Sunday";
    const day2 = "Monday";
    const day3 = "Tuesday";
    const day4 = "Wednesday";
    const day5 = "Thursday";
    const day6 = "Friday";
    const day7 = "Saturday";


    test(" * This function takes an array of staff objects in the format: \n" +
    "[ \n" + 
    " { name: \"Sally\", rota: [\"Monday\", \"Tuesday\", \"Friday\"] }, \n" +
    " { name: \"Pedro\", rota: [\"Saturday\", \"Sunday\", \"Tuesday\", \"Wednesday\"] }, \n" +
    " ...etc \n" +
    "] \n" +
    "and a day of the week. For the café to run successfully, at least 3 staff " +
    "members are required per day. The function should return true/false depending " + 
    "on whether there are enough staff scheduled for the given day.", () => {

        expect(areWeCovered(staff, day1)).toEqual(false);
        expect(areWeCovered(staff, day2)).toEqual(false);
        expect(areWeCovered(staff, day3)).toEqual(true);
        expect(areWeCovered(staff, day4)).toEqual(true);
        expect(areWeCovered(staff, day5)).toEqual(false);
        expect(areWeCovered(staff, day6)).toEqual(true);
        expect(areWeCovered(staff, day7)).toEqual(false);
    });
});
