const {
    sumDigits,
    createRange,
    getScreentimeAlertList,
    hexToRGB,
    findWinner
  } = require("../challenges/week10");

describe("sumDigits", () => {
    test("Throws an error if number is not passed", () => {
        expect(() => sumDigits()).toThrow("n is required");

    });
});

describe("createRange", () => {
    test("Throws an error if start or end is undefined", () => {
        expect(() => createRange(undefined, "end")).toThrow("start is required");
        expect(() => createRange("start", undefined)).toThrow("end is required");
    });
});

describe("getScreentimeAlertList", () => {
    test("Throws an error if users or date is not passed", () => {
        expect(() => getScreentimeAlertList(undefined, "date")).toThrow("users is required");
        expect(() => getScreentimeAlertList("users", undefined)).toThrow("date is required");
    });
});

describe("hexToRGB", () => {
    test("Throws an error if hex string is not passed", () => {
        expect(() => hexToRGB()).toThrow("hexStr is required");
    });
});

describe("findWinner", () => {
    test("Throws an error if board is not passed", () => {
        expect(() => findWinner()).toThrow("board is required");
    });
});
