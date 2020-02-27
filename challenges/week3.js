function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
  
  return nums.map(n => n * n);
}

function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");

  // start new array with first word from words array
  const newArr = [words[0]]
  for (let i = 1; i < words.length; i++) {
    // start index at 1 to miss first word. Uppercase first letter of each word 
    // thereafter + concat rest of word with slice. Push into new array.
    newArr.push(words[i][0].toUpperCase() + words[i].slice(1))
  }
  
  return newArr.join("")
}

function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");
  
  let count = 0;
  people.forEach((i) => {
    // using dot notation to access object at: 
    // array index >> object value >> .length to get no. of items in subject array.
    count += i.subjects.length;
  });
  return count;
}

function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  // Your code here!
}

function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  // Your code here!
}

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
};
