const repetedWord = require("../repetedWord");

describe("return repeted word", () => {
  test('return word "the"', () => {
    let str =
      "It was a queer, sultry summer, the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York...";
    expect(repetedWord(str)).toEqual("the");
  });

  test('return word "it"', () => {
    let str =
    "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness"
    expect(repetedWord(str)).toEqual("was");
  });

  test('return word "a"', () => {
    let str = "Once upon a time, there was a brave princess who...";
    expect(repetedWord(str)).toEqual("a");
  });
});
