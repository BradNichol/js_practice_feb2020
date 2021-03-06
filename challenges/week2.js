function getFillings(sandwich) {
  if (sandwich === undefined) throw new Error("ingredients is required");

  return sandwich.fillings;
}

function isFromManchester(person) {
  if (person === undefined) throw new Error("person is required");

  // refactored, as === operand will return true or false without extra syntax.
  return person.city === 'Manchester';
}

function getBusNumbers(people) {
  if (people === undefined) throw new Error("people is required");

  const busCapacity = 40;
  // Math.ceil rounds up to nearest whole integer
  return Math.ceil(people / busCapacity);

}

function countSheep(arr) {
  if (arr === undefined) throw new Error("arr is required");

  let count = 0;
  arr.forEach((i) => {
    if (i === 'sheep') {
      count++
    }
  });
  return count;
}

function hasMPostCode(person) {
  if (person === undefined) throw new Error("person is required");

  if (person.address.postCode.startsWith('M') && person.address.city === 'Manchester') {
    return true;
  }
  return false;
}

module.exports = {
  getFillings,
  isFromManchester,
  countSheep,
  getBusNumbers,
  hasMPostCode
};
