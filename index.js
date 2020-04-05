function generateBoard(param1) {
  var result = [];
  var temp = param1 * param1;
  let tempArr = [];

  for (var i = 0; i < param1; i++) {
    result.push([]);

    if (param1 % 2 !== 0) {
      if (i % 2 !== 0) {
        // genap
        for (var j = 0; j < param1; j++) {
          result[i].push(temp);
          temp -= 1;
        }
      } else {
        // ganjil
        for (var j = 0; j < param1; j++) {
          tempArr.push(temp);
          temp -= 1;
        }
        for (var k = tempArr.length - 1; k >= 0; k--) {
          result[i].push(tempArr[k]);
        }
        tempArr = [];
      }
    } else {
      if (i % 2 === 0) {
        // genap
        for (var j = 0; j < param1; j++) {
          result[i].push(temp);
          temp -= 1;
        }
      } else {
        // ganjil
        for (var j = 0; j < param1; j++) {
          tempArr.push(temp);
          temp -= 1;
        }
        for (var k = tempArr.length - 1; k >= 0; k--) {
          result[i].push(tempArr[k]);
        }
        tempArr = [];
      }
    }
  }

  return result;
}

// console.log(generateBoard(3));
// console.log(generateBoard(15));
console.log(generateBoard(8));
