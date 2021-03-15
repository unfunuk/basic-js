const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (members === null || members === undefined) {
    return false;
  }
  let k = 0;
  let array = [];
  for (let i = 0; i < members.length; i++) {
    if (typeof members[i] == "string") {
      let mas = members[i].split('');
      for (let s = 0; s < mas.length; s++) {
        if (mas[s] != ' ') {
          array[k] = mas[s].toUpperCase();
          k++;
          break;
        }
      }
    }
  }
  if (array.length === 0) {
    return false;
  }
  return array.sort().join('');

};
