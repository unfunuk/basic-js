const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let count = 0;
  for (let i = 0; i < matrix.length; i++) {
    let mas = matrix[i];
    for (let s = 0; s < mas.length; s++) {
      if (mas[s] == "^^") {
        count++;
      }
    }
  }
  return count;
};
