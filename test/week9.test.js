const {
    sumMultiples,
    isValidDNA,
    getComplementaryDNA,
    isItPrime,
    createMatrix,
    areWeCovered
  } = require("../challenges/week9");
  
describe("sumMultiples", () => {
    test("Throws an error if array is not passed", () => {
        expect(() => sumMultiples()).toThrow("arr is required");
        expect(() => sumMultiples("foo")).toThrow("arr needs to be an Array");
    });

    test("return a default of 0 if an empty array is passed", () => {
        expect(sumMultiples([])).toEqual(0);
    }); 

    test("treats decimals the same.", () => {
        expect(sumMultiples([0, 3.0, 5, 7, 1.2])).toEqual(8);
    }); 

    test("return the sum of any multiples of 3 or 5", () => {
        expect(sumMultiples([3, 5])).toEqual(8);
        expect(sumMultiples([0, 3, 5, 7])).toEqual(8);
        expect(sumMultiples([1, 7, 33, 55, 92, 107])).toEqual(88);
        expect(sumMultiples([1, 7, 13, 15, 92, 107])).toEqual(15);
        expect(sumMultiples([1, 7, 13, 92, 107])).toEqual(0);
        expect(sumMultiples([0, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16])).toEqual(60);
    });
});

describe("isValidDNA", () => {
    test("Throws an error if string is not passed", () => {
        expect(() => isValidDNA(undefined)).toThrow("str is required");
        expect(() => isValidDNA(2)).toThrow("str needs to be a String");
    });

    test("receives a string and returns true or false if could be a DNA string", () => {
        expect(isValidDNA("CGTA")).toEqual(true);
    });

    test("If not valid DNA, return false", () => {
        expect(isValidDNA("abcd")).toEqual(false);
    });

    test("lowercase is okay...", () => {
        expect(isValidDNA("gattaca")).toEqual(true);
    });
});

describe("getComplementaryDNA", () => {
    test("Throws an error if string is not passed", () => {
        expect(() => getComplementaryDNA(undefined)).toThrow("str is required");
        expect(() => getComplementaryDNA(2)).toThrow("str needs to be a String");
    });

    test("returns DNA base pairs", () => {
        expect(getComplementaryDNA("ACTG")).toEqual("TGAC");
    });

    test("If not valid DNA, return undefined", () => {
        expect(getComplementaryDNA("abcd")).toEqual(undefined);
    });    

    test("lowercase is okay...", () => {
        expect(getComplementaryDNA("gattaca")).toEqual("CTAATGT");
    });
});

describe("isItPrime", () => {
    test("Throws an error if number is not passed", () => {
        expect(() => isItPrime(undefined)).toThrow("n is required");
        expect(() => isItPrime("2.01")).toThrow("n needs to be an integer");
    });

    test("returns true/false when determining if a number is prime.", () => {
        expect(isItPrime(7)).toEqual(true);
        expect(isItPrime(13)).toEqual(true);
        expect(isItPrime(14)).toEqual(false);
        expect(isItPrime(10945)).toEqual(false);
        expect(isItPrime(4391)).toEqual(true);
    });

    test("floating number that represents integer should be okay", () => {
        expect(isItPrime(13.0)).toEqual(true);
    });
});


describe("createMatrix", () => {
    test("Throws an error if number is not passed", () => {
        expect(() => createMatrix(undefined, "foo")).toThrow("n is required");
        expect(() => createMatrix(3, undefined)).toThrow("fill is required");
        expect(() => createMatrix(3.2, "foo")).toThrow("n needs to be an integer");
    });

    test("Creates a matrix based on inputs offered", () => {
        expect(createMatrix(3, "foo")).toEqual([["foo", "foo", "foo"], ["foo", "foo", "foo"], ["foo", "foo", "foo"]]);
    });

    test("works with numbers?", () => {
        expect(createMatrix(5, 0)).toEqual([[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]]);
    });

    test("works with boolean?", () => {
        expect(createMatrix(2, true)).toEqual([[true, true], [true, true]]);
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

    const staff1 = "Not an object";

    test("Throws an error for any undefined data passed in", () => {
        expect(() => areWeCovered(staff, undefined)).toThrow("day is required");
        expect(() => areWeCovered(undefined, "Friday")).toThrow("staff is required");
    });

    test("Throws an error if staff is not an object", () => {
        expect(() => areWeCovered(staff1, "Monday")).toThrow("staff needs to be an Object");
    });

    test("Javascript sometimes treats null as an object, so cannot be null", () => {
        expect(() => areWeCovered(null, "Monday")).toThrow("staff cannot be null");
    });

    test("if an 'invalid' day is entered", () => {
        expect(() => areWeCovered(staff, "foo")).toThrow("day entered is invalid, try Monday");
    });

    test("Determines if staff coverage for a given day is adequate", () => {

        expect(areWeCovered(staff, day1)).toEqual(false);
        expect(areWeCovered(staff, day2)).toEqual(false);
        expect(areWeCovered(staff, day3)).toEqual(true);
        expect(areWeCovered(staff, day4)).toEqual(true);
        expect(areWeCovered(staff, day5)).toEqual(false);
        expect(areWeCovered(staff, day6)).toEqual(true);
        expect(areWeCovered(staff, day7)).toEqual(false);
    });
});
