function capitalize(word) {
  if (word === undefined) throw new Error("word is required");
  return word[0].toUpperCase() + word.slice(1);
};

function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");

  return firstName[0] + "." + lastName[0];
};

function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is requied");
  if (vatRate === undefined) throw new Error("vatRate is required");
  
  // convert VAT % into decimal
  const toDecimal = vatRate / 100;
  
  return parseFloat(((originalPrice * toDecimal) + originalPrice).toFixed(2));
};

function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");

  // get final sale price (convert % into decimal)
  const salePrice = originalPrice - (originalPrice * (reduction / 100));

  // parseFloat converts toFixed string back into number
  return parseFloat(salePrice.toFixed(2));
};

function getMiddleCharacter(str) {
  if (str === undefined) throw new Error("str is required");

  // get middle index of string. Round down if floating point.
  const middleIndex = Math.floor((str.length) / 2);

  // for strings of even length
  if (str.length % 2 === 0) {
    return str[middleIndex - 1] + str[middleIndex];
  };
  // for strings of odd length
  return str[middleIndex];
};

function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");

  // split word into individual characters in array, reverse 
  //and use join to turn back to a string
  return word.split("").reverse().join("");

};

function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");

  let newArray = [];
  words.forEach((w) => {
    newArray.push(w.split("").reverse().join(""));
  });

  return newArray;
};


function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");

  let count = 0;
  users.forEach((u) => {
    if (u.type === 'Linux') {
      count++;
    };
  });
  return count;
};

function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");

  let total = 0;
  scores.forEach((n) => {
    total = total + n;
  });
  return parseFloat((total / scores.length).toFixed(2));
};


function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");
  // location of first conditional important. Fails if placed after fizz or buzz
  // because fizzbuzz number would pass n % 3 === 0  or n % 5 === 0 checks.
  if (n % 3 === 0 && n % 5 === 0) {
    return 'fizzbuzz';
  } else if (n % 3 === 0) {
    return 'fizz';
  } else if (n % 5 === 0) {
    return 'buzz';
  } else {
    return n;
  };
};

module.exports = {
  capitalize,
  generateInitials,
  addVAT,
  getSalePrice,
  getMiddleCharacter,
  reverseWord,
  reverseAllWords,
  countLinuxUsers,
  getMeanScore,
  simpleFizzBuzz
};
