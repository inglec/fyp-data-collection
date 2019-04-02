// "sortedUniq" removes duplicate values from sorted arrays
const { sortedUniq } = require('lodash/array');

// Partition array into object of even and odd sorted arrays without duplicates
function partitionEvenOdd(numbers) {
  const even = [];
  const odd = [];

  // Partition numbers into even or odd
  numbers.forEach((number) => {
    if (number % 2 === 0) {
      even.push(number);
    } else {
      odd.push(number);
    }
  });

  // Sort arrays in ascending order
  even.sort();
  odd.sort();

  // Return object with keys "even" and "odd" without duplicate values
  return {
    even: sortedUniq(even),
    odd: sortedUniq(odd),
  };
}

module.exports = { partitionEvenOdd };
