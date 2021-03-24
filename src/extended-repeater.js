const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  str = String(str);
  let string = str;
  str = "";
  let j = 0;
  let mas = [];
  let mas2 = [];
  let repeatTimes;
  let separator;
  let addition;
  let additionRepeatTimes;
  let additionSeparator;
  let nrepeatTimes = 1;
  let nseparator;
  let naddition;
  let nadditionRepeatTimes = 1;
  let nadditionSeparator;
  for (let key in options) {
    mas[j] = options[key];
    mas2[j] = String(key);
    j++;
  }
  for (let i = 0; i < mas2.length; i++) {
    if (mas2[i] == 'repeatTimes') { repeatTimes = mas2[i]; nrepeatTimes = mas[i]; }
    if (mas2[i] == 'separator') { separator = mas2[i]; nseparator = mas[i]; }
    if (mas2[i] == 'addition') { addition = mas2[i]; naddition = mas[i]; }
    if (mas2[i] == 'additionRepeatTimes') { additionRepeatTimes = mas2[i]; nadditionRepeatTimes = mas[i]; }
    if (mas2[i] == 'additionSeparator') { additionSeparator = mas2[i]; nadditionSeparator = mas[i]; }
  };
  for (let k = 0; k < Number(nadditionRepeatTimes); k++) {
    if (addition != undefined) {
      string += naddition;
    }
    if (k < Number(nadditionRepeatTimes) - 1) {
      if (additionSeparator != undefined) {
        string += nadditionSeparator;
      }
      else {
        string += "|";
      }
    }
  }
  for (let n = 0; n < Number(nrepeatTimes); n++) {
    str += string;
    if (n < Number(nrepeatTimes) - 1) {
      if (separator != undefined) {
        str += nseparator;
      }
      else {
        str += "+";
      }
    }

  }
  return str;
};
