const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");

  const index = nums.indexOf(n)+1
  const value = nums[index]

  if (index && index < nums.length) {
    return value;
  } else {
    return null;
  }
};

const count1sand0s = str => {
  if (str === undefined) throw new Error("str is required");
  
  const obj = {
    1: [...str].filter(n => n === '1').length,
    0: [...str].filter(n => n === '0').length
  };
  return obj;
};

const reverseNumber = n => {
  if (n === undefined) throw new Error("n is required");
  
  // cannot use spread operator on numbers, so used template literal to convert to string first
  // wrapped expression in parseInt to return numbers, exc leading zeros.
  return parseInt([...`${n}`].reverse().join(''));
};

const sumArrays = arrs => {
  if (arrs === undefined) throw new Error("arrs is required");
  
  // .flat() array method, flattens sub arrays into single array. Can control flatten depth by passing
  // depth argument into flat method. ie. .flat(2)
  //const newArr = arrs.flat();

  // reduce array method takes 'reducer' function to iterate and output single value
  const reducer = (count, value) => count + value;
  return arrs.flat().reduce(reducer);
};

const arrShift = arr => {
  if (arr === undefined) throw new Error("arr is required");
  // Your code here!
};

const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
  // Your code here!
};

const getWordFrequencies = str => {
  if (str === undefined) throw new Error("str is required");
  // Your code here!
};

module.exports = {
  findNextNumber,
  count1sand0s,
  reverseNumber,
  sumArrays,
  arrShift,
  findNeedle,
  getWordFrequencies
};
