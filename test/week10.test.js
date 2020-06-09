const {
    sumDigits,
    createRange,
    getScreentimeAlertList,
    hexToRGB,
    findWinner
  } = require("../challenges/week10");

describe("sumDigits", () => {
    test("This function takes a number, e.g. 123 and returns the sum of all its digits, e.g 6 in this example.", () => {
        expect(sumDigits(123)).toEqual(6);
        expect(sumDigits(456)).toEqual(15);
        expect(sumDigits(1024)).toEqual(7);
        expect(sumDigits(0)).toEqual(0);
        expect(sumDigits(123456789)).toEqual(45);
    });
    test("If string, convert to numbers and ignore non-numeric", () => {
        expect(sumDigits("s1:23")).toEqual(6);
    });
});

describe.only("createRange", () => {
    test("This function creates a range of numbers as an array. It received a start, an end and a step. ", () => {
        expect(createRange(1, 11, 2)).toEqual([1, 3, 5, 7, 9, 11]);
        expect(createRange(5, 40, 5)).toEqual([5, 10, 15, 20, 25, 30, 35, 40]);
    });
    test("Step is an optional parameter. If it is not provided, assume the step is 1.", () => {
        expect(createRange(5, 10)).toEqual([5, 6, 7, 8, 9, 10]);
    });
});

describe("getScreentimeAlertList", () => {
    const testData1 = [
        {
            username: "beth_1234",
            name: "Beth Smith",
            screenTime: [
                { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40} },
                { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31} },
                { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19} },
                { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61} },
            ]
        },
        {
            username: "sam_j_1989",
            name: "Sam Jones",
            screenTime: [
                { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10} },
                { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16} },
                { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31} },
            ]
        },
    ];

    test("This function takes an array of user objects and their usage in minutes and report back those who have exceeded 100 minutes ", () => {
        expect(getScreentimeAlertList(testData1, "2019-05-04")).toEqual(null);
    });
    test("What should happen if no one exceeds 100 minutes on a given day?  return null?", () => {
        expect(getScreentimeAlertList(testData1, "2019-05-03")).toEqual(null);
    });
    test("What happens on a day when no users are on?  return null?", () => {
        expect(getScreentimeAlertList(testData1, "2020-05-03")).toEqual(null);
    });
});

describe("hexToRGB", () => {
    test("This function converts Hex numbers to their RGB colour code. ", () => {
        expect(hexToRGB("#FF1133")).toEqual("rgb(255,17,51)");
        expect(hexToRGB("#FFFFFF")).toEqual("rgb(255,255,255)");
        expect(hexToRGB("#000000")).toEqual("rgb(0,0,0)");
    });
});

describe("findWinner", () => {
    test("This function accepts a tic-tac-toe board as an array and declares the winner.", () => {

        const board1 =  
            [
                ["X", "0", null],
                ["X", null, "0"],
                ["X", null, "0"]
            ];

        const board2 =  
            [
                [null, "X", "0"],
                ["X", null, "0"],
                ["X", null, "0"]
            ];

        const board3 =  
            [
                ["0", "X", "X"],
                ["X", "0", "0"],
                ["X", "X", "0"]
            ];

        expect(findWinner(board1)).toEqual("X");
        expect(findWinner(board2)).toEqual("0");
        expect(findWinner(board3)).toEqual(null);
    });
});