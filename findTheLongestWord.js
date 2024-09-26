const findTheLongestWord = (text) => {
  return text
    .split(" ")
    .reduce((longest, word) => (word.length > longest.length ? word : longest));
};

const sentence = "Saya sangat senang mengerjakan soal algoritma";
console.log(findTheLongestWord(sentence));
