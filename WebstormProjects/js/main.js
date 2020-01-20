// Task 1 Solution
const calculate = (str) => {
  const mathKeys = Object.getOwnPropertyNames(Math);
  const mathValues = mathKeys.map((key) => Math[key]);

  return Function(mathKeys, 'return (' + str + ');').apply(null, mathValues);
};



// Task 2 Solution
const numbersPeter = (number) => {
  let numberArr = [];
  number += '';

  for (let n of number) {
    numberArr.push(+n);
  }

  const changeNumber = (numberArr) => {
    for (let i = 0; i < numberArr.length - 1; i++) {
      if (numberArr[i] > numberArr[i + 1]) {
        if (i + 1 === numberArr.length - 1) {
          numberArr.length = numberArr.length - 1;
          numberArr.fill(9);
          break;
        } else {
          numberArr[i] -= 1;
          numberArr.fill(9, i + 1, numberArr.length);
          if (
            typeof numberArr[i - 1] !== 'undefined'
            && numberArr[i - 1] > numberArr[i]
          ) {
            changeNumber(numberArr);
          }
        }
      }
    }
  };

  changeNumber(numberArr);

  return +numberArr.join('');
};

// Task 3 Solution

