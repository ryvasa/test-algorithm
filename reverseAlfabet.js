const reverseAlphabet = (text) => {
  const number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const newtext = text.split("");

  const curentNumber = newtext.filter((char) => number.includes(char));
  const filteredText = newtext
    .filter((item) => !number.includes(item))
    .reverse();

  return [...filteredText, ...curentNumber].join("");
};

console.log(reverseAlphabet("NEGIE1"));
