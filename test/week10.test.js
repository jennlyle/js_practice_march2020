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
        expect(() => sumDigits("foo")).toThrow("n must be an integer");

    });

    test("Sums the digits of the number passed", () => {
        expect(sumDigits(123)).toEqual(6);
        expect(sumDigits(0)).toEqual(0);
        expect(sumDigits(1)).toEqual(1);
        expect(sumDigits(123456789)).toEqual(45);
    });
});

describe("createRange", () => {
    test("Throws an error if start or end is undefined", () => {
        expect(() => createRange(undefined, "end")).toThrow("start is required");
        expect(() => createRange("start", undefined)).toThrow("end is required");
        expect(() => createRange("start", 3)).toThrow("start must be a number");
        expect(() => createRange(3, "end")).toThrow("end must be a number");
    });
    test("Throws an error if end is not inclusive", () => {
        expect(() => createRange(1, 4, 2)).toThrow("end is not a valid value for this range");
    });
    test("Testing to see if expected results come with integers", () => {
        expect(createRange(3, 11, 2)).toEqual([3, 5, 7, 9, 11]);
        expect(createRange(1, 4)).toEqual([1, 2, 3, 4]);
    });
    test("Will it work with decimals?", () => {
        expect(createRange(1, 2, 0.5)).toEqual([1, 1.5, 2]);
    });
    test("Will it work with negative numbers?", () => {
        expect(createRange(-1, 2, 0.5)).toEqual([-1, -0.5, 0, 0.5, 1, 1.5, 2]);
    });
});

describe.only("getScreentimeAlertList", () => {

    const testdata = [
        {
            username: "beth_1234",
            name: "Beth Smith",
            screenTime: [
                { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40} },
                { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31} },
                { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19} },
                { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61} }
            ]
        },
        {
            username: "sam_j_1989",
            name: "Sam Jones",
            screenTime: [
                { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10} },
                { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16} },
                { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31} }
            ]
        }
    ];

    const testdata1 = [
        {
            username: false,
            name: "Beth Smith",
            screenTime: [
                { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40} },
                { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31} },
                { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19} },
                { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61} }
            ]
        },
        {
            username: "sam_j_1989",
            name: "Sam Jones",
            screenTime: [
                { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10} },
                { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16} },
                { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31} }
            ]
        }
    ];

    const testdata2 = [
        {
            username: "beth_1234",
            name: "Beth Smith",
            screenTime: [
                { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40} },
                { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31} },
                { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19} },
                { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61} }
            ]
        },
        {
            username: "sam_j_1989",
            name: undefined,
            screenTime: [
                { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10} },
                { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16} },
                { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31} }
            ]
        }
    ];
    
    const testdata3 = [
        {
            username: "beth_1234",
            name: "Beth Smith",
            screenTime: [
                { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40} },
                { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31} },
                { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19} },
                { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61} }
            ]
        },
        {
            username: "sam_j_1989",
            name: "Sam Jones",
            screenTime: [
                { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10} },
                { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16} },
                { date: "2023-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31} }
            ]
        }
    ];

    test("Throws an error if users or date is not passed", () => {
        expect(() => getScreentimeAlertList(undefined, "date")).toThrow("users is required");
        expect(() => getScreentimeAlertList(testdata, undefined)).toThrow("date is required");
    });

    test("Throws an error if users is not an object", () => {
        expect(() => getScreentimeAlertList("foo", "2020-06-01")).toThrow("users should be an object");
    });

    test("Throws an error if the date is not valid, such as leap years, fake dates or date set to the future", () => {
        expect(() => getScreentimeAlertList(testdata, "2019-02-29")).toThrow("date is not valid");
        expect(() => getScreentimeAlertList(testdata, "2021-05-04")).toThrow("date is not valid");
        expect(() => getScreentimeAlertList(testdata, "2019-13-04")).toThrow("date is not valid");
        expect(() => getScreentimeAlertList(testdata, "2019-05-32")).toThrow("date is not valid");
    });

    test("Throws an error if username and name within object passed is not a string", () => {
        expect(() => getScreentimeAlertList(testdata1, "2019-05-04")).toThrow("username should be a string");
        expect(() => getScreentimeAlertList(testdata2, "2019-05-04")).toThrow("name should be a string");
    });

    test("Throws an error if a date inside of screenTime is not valid", () => {
        expect(() => getScreentimeAlertList(testdata3, "2019-05-04")).toThrow("screenTime date is not valid");
    });

    test("Should output the name of the user who has exceeded 100 minutes", () => {
        expect(getScreentimeAlertList(testdata, "2019-05-04")).toEqual(["beth_1234"]);
    });

    test("returns empty array if no users have exceeded 100 minutes", () => {
        expect(getScreentimeAlertList(testdata, "2019-06-11")).toEqual([]);
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
