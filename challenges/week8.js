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

  // reduce array method takes 'reducer' function to iterate and output single value
  const reducer = (count, value) => count + value;
  return arrs.flat().reduce(reducer);
};

const arrShift = arr => {
  if (arr === undefined) throw new Error("arr is required");
  
  if (arr.length > 1) {
    // last element, slice from index 1 to last-1, first element
    return [arr[arr.length-1], ...arr.slice(1, arr.length-1), arr[0]];
  }
  return arr;
};

const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
  
  // used toString() to convert all values to string to be able to use .includes()
  // & .toLowerCase() methods

  for (let k in haystack) {
    if (haystack[k].toString().toLowerCase().includes(searchTerm.toLowerCase())) {
      return true;
      } 
    }
    return false;
};

const getWordFrequencies = str => {
  if (str === undefined) throw new Error("str is required");
  
  // Split string into array
  const strToArr = str.split(' ');
  
  //initialise empty object
  let frequencyObj = {};

  // initialise counter
  let counter = 0;
  strToArr.forEach(i => {
    // get each word in array
    let word = strToArr[counter];
    // increase counter for next word
    counter++
    // if word is not in object, set word key with value of 1
    if (!frequencyObj[word]) {
      frequencyObj[word] = 1;
    // if word key is present, just increase value by 1
    } else {
      frequencyObj[word]++;
    }
  });

  return frequencyObj;
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
