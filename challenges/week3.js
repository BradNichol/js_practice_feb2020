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
  
  // NOTE - initially tried forEach to loop. Failed because:
  // 'There is no way to stop or break a forEach() loop' from MDN
  // for loop breaks Ok so used this instead.

  for (let i = 0; i < menu.length; i++) {
    if (menu[i].ingredients.includes(ingredient)) {
      return true;
    }
  }
  return false;
}

function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  
  const arr3 = [];
  arr1.forEach((n1) => {
    arr2.forEach((n2) => {
      if (n1 === n2) {
        arr3.push(n1)
      }
    })
  })

  // set can be used to return unique values only
  return [...new Set(arr3)]
}

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
};
