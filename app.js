#!/usr/bin/env node

import fs from "node:fs/promises";

const filePath = process.argv[2];
const filteringWord = process.argv[3]?.toLowerCase();

if (!filePath) {
  console.log("File path is needed.");
  process.exit(1);
}

const fileContent = await fs.readFile(filePath, "utf-8");

const wordsArray = fileContent
  .split(/\W+/)
  .filter((word) => word)
  .map((word) => word.toLowerCase());

if (filteringWord) {
  const filteredWords = wordsArray.filter((word) => word === filteringWord);

  console.log({
    [filteringWord]: filteredWords.length,
  });
  process.exit(0);
}

const wordsCount = {};
wordsArray.forEach((word) => {
  if (word in wordsCount) {
    wordsCount[word] += 1;
  } else {
    wordsCount[word] = 1;
  }
});

console.log(wordsCount);
