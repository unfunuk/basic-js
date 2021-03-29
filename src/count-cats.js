const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let count = 0;
  for (let i = 0; i < matrix.length; i++) {
    let arr = matrix[i];
    for (let s = 0; s < arr.length; s++) {
      if (arr[s] == "^^") {
        count++;
      }
    }
  }
  return count;
};
