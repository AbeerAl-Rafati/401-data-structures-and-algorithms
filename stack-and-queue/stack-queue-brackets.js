let validateBrackets = (string) => {
  let bracket1 = 0;
  let bracket2 = 0;
  let bracket3 = 0;

  for (let i = 0; i < string.length; i++) {
    if (string[i] === "{" || string[i] === "}") {
      bracket1++;
    } else if (string[i] === "(" || string[i] === ")") {
      bracket2++;
    } else if (string[i] === "[" || string[i] === "]") {
      bracket3++;
    }
  }
  console.log(bracket1);
  console.log(bracket2);
  console.log(bracket3);

  // if (bracket1 === 0 || bracket2 === 0 || bracket3 === 0) {
  //   return false;
  // }
  if (bracket1 > 0 || bracket2 > 0 || bracket3 > 0) {
    if (bracket1 % 2 === 0 && bracket2 % 2 === 0 && bracket3 % 2 === 0) {
      return true;
    } else {
      return false;
    }
  }
};

module.exports = validateBrackets;

let test = validateBrackets("nehe{srt}Srt(})");
console.log(test);
