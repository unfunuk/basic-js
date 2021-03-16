const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new RangeError('Error')
  }
  let mas = [];
  let k = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != "--discard-next" && arr[i] != "--discard-prev" && arr[i] != "--double-next" && arr[i] != "--double-prev") {
      mas[k] = arr[i];
      k++;
    }
    else {
      if (arr[i] == "--discard-next" && arr[i + 1] != undefined) {
        i++;
      }
      if (arr[i] == "--discard-prev" && arr[i - 1] != undefined && arr[i - 2] != "--discard-next") {
        mas.splice(k - 1, 1);
        k--;
      }
      if (arr[i] == "--double-next" && arr[i + 1] != undefined) {
        mas[k] = arr[i + 1];
        k++;
      }
      if (arr[i] == "--double-prev" && arr[i - 1] != undefined && arr[i - 2] != "--discard-next") {
        mas[k] = arr[i - 1];
        k++;
      }
    }
  }
  return mas;
};


