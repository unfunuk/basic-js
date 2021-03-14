const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let array = [];
  let k = 0;
  for (let i = 0; i < members.length; i++) {
    if (typeof members[i] == "string") {
      let mas = members[i].split('');
      array[k] = mas[0].toUpperCase();
      k++;
    }
  }
  if (array.length == 0) {
    return false;
  }
  alert(array.sort().join());

};
