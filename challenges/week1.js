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
  if (vatRate){
    // convert VAT into decimal
    const toDecimal = vatRate / 100
    return Math.floor((originalPrice * toDecimal) + originalPrice);
  } else {
    return originalPrice;
  }
}

function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");
  
  // convert % to decimal
  const toDecimal = reduction / 100;
  // calculate final price
  const salePrice = originalPrice - (originalPrice * toDecimal)

  // check if salePrice is a number and not float
  if (Number.isInteger(salePrice)){
    return salePrice;
  } else {
    // toFixed seems to covert to string, so use parseFLoat to convert back to a floating point
    return parseFloat(salePrice.toFixed(2))
  }
  
}

function getMiddleCharacter(str) {
  if (str === undefined) throw new Error("str is required");
  // Add your code here!
}

function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");
  // Add your code here!
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
