function genRandomNumbers(count, min, max, round = false) {
  const numbers = [];

  for (let i = 0; i < count; i += 1) {
    const randomNumber = Math.random() * (max - min) + min;
    numbers.push(round ? Math.round(randomNumber) : randomNumber);
  }

  return numbers;
}

module.exports = { genRandomNumbers }
