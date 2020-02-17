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
  // check if VAT is > 0
  if (vatRate) {
    // convert VAT into decimal
    const toDecimal = vatRate / 100;
    return Math.floor((originalPrice * toDecimal) + originalPrice);
  } else {
    return originalPrice;
  };
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
    return str[middleIndex-1] + str[middleIndex];
  };
  // for strings of odd length
  return str[middleIndex];
};

function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");
  
  // split word into individual characters in array
  const splitWord = word.split("")
  // reverse method to reverse array
  const reverseWord = splitWord.reverse()
  // join returns a string
  return reverseWord.join("")

}

function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");
  // Add your code here!
}

function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");
  // Add your code here!
}

function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");
  // Add your code here!
}

function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");
  // Add your code here!
}

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
