function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  
  // filter is used to return an array of items that pass criteria
  return nums.filter(n => n < 1);
}

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  
  return names.filter(name => name.startsWith(char));
}

function findVerbs(words) {
  if (!words) throw new Error("words is required");
  
  return words.filter(verbs => verbs.startsWith("to") && verbs[2] === " ");
}

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  
  // Number.isInteger returns boolean value
  return nums.filter(int => Number.isInteger(int));
}

function getCities(users) {
  if (!users) throw new Error("users is required");
  
  // refactored from using forEach and push, as map returns array.
  return users.map(user => user.data.city.displayName);

}

function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  
  // parseFloat converts back to float. Math.sqrt returns the square root of a number
  return nums.map(n => parseFloat(Math.sqrt(n).toFixed(2)));
}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  
  return sentences.filter(sentence => sentence.toLowerCase().includes(str));
}

function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  
  // refactored from using forEach + push to map.  arr = [];
  // use spread operator to convert individual array into variables 
  return triangles.map(t => Math.max(...t));
 
}

module.exports = {
  findSmallNums,
  findNamesBeginningWith,
  findVerbs,
  getIntegers,
  getCities,
  getSquareRoots,
  findSentencesContaining,
  getLongestSides
};
