// Data
const categories = {
  fruits: ["apple", "banana", "cherry", "pear", "peach", "plum", "grape"],
  colors: ["red", "blue", "green", "yellow", "orange", "purple", "pink"],
  animals: ["tiger", "zebra", "eagle", "shark", "koala", "camel", "rhino"],
  countries: ["germany", "france", "canada", "mexico", "italy", "spain", "india"]
};

const challenges = [
  { question: "Enter a number divisible by 7.", validate: (input) => input % 7 === 0 },
  { question: "Enter a number that is a square of an integer.", validate: (input) => Number.isInteger(Math.sqrt(input)) },
  { question: "Type a word that rhymes with 'cat'.", validate: (input) => ["bat", "rat", "hat", "mat"].includes(input) },
  { question: "Enter a word that contains exactly 4 vowels.", validate: (input) => (input.match(/[aeiou]/gi) || []).length === 4 },
  { question: "Guess a word that starts with 'S' and ends with 'E'.", validate: (input) => input.startsWith("s") && input.endsWith("e") },
  { question: "Guess a fruit that starts with 'A'.", validate: (input) => input.toLowerCase().startsWith("a") && categories.fruits.includes(input.toLowerCase()) },
  { question: "Enter a color that starts with 'P'.", validate: (input) => input.toLowerCase().startsWith("p") && categories.colors.includes(input.toLowerCase()) },
  { question: "Name an animal that starts with 'K'.", validate: (input) => input.toLowerCase().startsWith("k") && categories.animals.includes(input.toLowerCase()) },
  { question: "Guess a country that starts with 'I'.", validate: (input) => input.toLowerCase().startsWith("i") && categories.countries.includes(input.toLowerCase) },
  { question: "Enter a country with 7 letters in its name.", validate: (input) => input.length === 7 && categories.countries.includes(input.toLowerCase()) },
  { question: "I’m tall when I’m young, and I’m short when I’m old. What am I?", validate: (input) => input === "candle" },
  { question: "What has to be broken before you can use it?", validate: (input) => input === "egg" },
  { question: "What has keys but can’t open locks?", validate: (input) => input === "piano" },
  { question: "Unscramble the word: LPAPE", validate: (input) => input === "apple" },
  { question: "Unscramble the word: NAPETCILIOP", validate: (input) => input === "application" },
  { question: "Unscramble the word: MAAIGNTIONI", validate: (input) => input === "imagination" },
  { question: "Unscramble the word: NEGARO", validate: (input) => input === "orange" },
  { question: "Unscramble the word: SRNESIVAERY", validate: (input) => input === "anniversary" },
  { question: "Unscramble the word: RAEGP", validate: (input) => input === "grape" },
];
