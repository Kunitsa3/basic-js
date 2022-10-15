const {
  NotImplementedError
} = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(mode) {
    this.mode = mode === false ? 'reverse' : 'direct';
  }
  encrypt(message, key) {
    if(!message || !key) {
      throw new Error('Incorrect arguments!')
    }
    const m = message.toUpperCase();
    const k = key.toUpperCase();
    const maxLength = Math.max(m.length, k.length);
    const a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let r = '';
    let missed = 0;
    for (let i = 0; i < maxLength; i++) { 
      let flag;
      let mi;
      const mi_s = m[((i >= m.length) ? i % m.length : i)];
      if (a.indexOf(mi_s) === -1){
        flag = true;
        missed += 1;
      } else {
        mi = a.indexOf(mi_s);
      }
      const ki_s = k[((i-missed >= k.length) ? (i - missed) % k.length : i-missed)];
      const ki = a.indexOf(ki_s);
      let c = flag ? mi_s : a[(((a.length + (mi + ki)) % a.length))];
      r += c;
    }
    return this.mode === 'reverse' ? r.split('').reverse().join('').slice(0, message.length) : r.slice(0, message.length);
  }
  decrypt(message, key) {
    if(!message || !key) {
      throw new Error('Incorrect arguments!')
    }
    const m = message.toUpperCase();
    const k = key.toUpperCase();
    const maxLength = Math.max(m.length, k.length);
    const a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let r = '';
    let missed = 0;
    for (let i = 0; i < maxLength; i++) { 
      let flag;
      let mi;
      const mi_s = m[((i >= m.length) ? i % m.length : i)];
      if (a.indexOf(mi_s) === -1){
        flag = true;
        missed += 1;
      } else {
        mi = a.indexOf(mi_s);
      }
      const ki_s = k[((i-missed >= k.length) ? (i - missed) % k.length : i-missed)];
      const ki = -a.indexOf(ki_s);
      let c = flag ? mi_s : a[(((a.length + (mi + ki)) % a.length))];
      r += c;
    }
    return this.mode === 'reverse' ? r.split('').reverse().join('').slice(0, message.length) : r.slice(0, message.length);
}}


module.exports = {
  VigenereCipheringMachine
};
