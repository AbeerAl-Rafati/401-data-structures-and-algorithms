const validateBrackets = require("../stack-queue-brackets");

describe("validateBrackets test", () => {
  it("validateBrackets", () => {
    const test = "{arts}atrs(tars";
    const test2 = "{arts}atrs(tars)";
    const test3 = "{arts}atrs(tars[]";
    const test4 = "{arts}atrs(tars)[]";

    expect(validateBrackets(test)).toEqual(false);
    expect(validateBrackets(test2)).toEqual(true);
    expect(validateBrackets(test3)).toEqual(false);
    expect(validateBrackets(test4)).toEqual(true);
  });
});
