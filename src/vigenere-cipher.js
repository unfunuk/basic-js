const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  encryptX(x, key) {
    let shift = key.toUpperCase().charCodeAt(0) - 65;
    let newCode = x.charCodeAt(0) + shift;
    if (newCode > 90) newCode -= 26;
    return String.fromCharCode(newCode);
  }
  decryptX(x, key) {
    let shift = key.toUpperCase().charCodeAt(0) - 65;
    let newCode = x.charCodeAt(0) - shift;
    if (newCode < 65) newCode += 26;;
    return String.fromCharCode(newCode)
  }
  constructor(direct = true) {
    this.direct = direct;
  }
  encrypt(message, key) {
    if (!arguments || arguments.length < 2) throw Error('Error');
    let k = 0;
    let res = [];
    for (let i = 0; i < message.length; i++) {
      let x = message.charAt(i).toUpperCase();
      if (/^[A-Z]$/.test(x)) {
        res.push(this.encryptX(x, key.charAt(k)));
        k++;
        if (k == key.length) k = 0;
      } else {
        res.push(x);
      }
    }
    if (!this.direct) res = res.reverse();
    return res.join('');
  }
  decrypt(encryptedMessage, key) {
    if (!arguments || arguments.length < 2) throw Error('Error');
    let k = 0;
    let res = [];
    for (let i = 0; i < encryptedMessage.length; i++) {
      let x = encryptedMessage.charAt(i).toUpperCase();
      if (/^[A-Z]$/.test(x)) {
        res.push(this.decryptX(x, key.charAt(k)));
        k++;
        if (k == key.length) k = 0;
      } else {
        res.push(x);
      }
    }
    if (!this.direct) res = res.reverse();
    return res.join('');
  }
}

module.exports = VigenereCipheringMachine;
