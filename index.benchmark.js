// Import data
const largeData = require('./data/large');
const mediumData = require('./data/medium');
const smallData = require('./data/small');

// Import functions
const { partitionEvenOdd } = require('./complex');
const { addNumbers } = require('./simple');

// All benchmarks have the following properties
const commonSchema = {
  maxAttempts: 1,
  runs: 10,
  timeout: 10000,
};

const addNumbersLarge = {
  ...commonSchema,
  benchmark: () => addNumbers(largeData),
};

const addNumbersMedium = {
  ...commonSchema,
  benchmark: () => addNumbers(mediumData),
};

const addNumbersSmall = {
  ...commonSchema,
  benchmark: () => addNumbers(smallData),
};

const partitionEvenOddLarge = {
  ...commonSchema,
  benchmark: () => {
    partitionEvenOdd(largeData);
  },
};

const partitionEvenOddMedium = {
  ...commonSchema,
  benchmark: () => {
    partitionEvenOdd(mediumData);
  },
};

const partitionEvenOddSmall = {
  ...commonSchema,
  benchmark: () => {
    partitionEvenOdd(smallData);
  },
};

module.exports = {
  addNumbersLarge,
  addNumbersMedium,
  addNumbersSmall,
  partitionEvenOddLarge,
  partitionEvenOddMedium,
  partitionEvenOddSmall,
};
