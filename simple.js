// Add array of numbers together
function addNumbers(numbers) {
  return numbers.reduce((accumulator, number) => accumulator + number, 0);
}

module.exports = { addNumbers };
