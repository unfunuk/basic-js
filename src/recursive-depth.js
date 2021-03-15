const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let result = 1;
    mas = arr.filter(element => Array.isArray(element));
    if (mas.length > 0) {
      mas = mas.flat();
      result += this.calculateDepth(mas);
    }
    return result;
  }
};