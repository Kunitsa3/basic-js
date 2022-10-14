const {
  NotImplementedError
} = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: '',
  getLength() {
    return this.chain.split('~~').length;
  },
  addLink(value) {
    const newValue = `${value}` ? value : ' ';
    this.chain = !this.chain ? `${this.chain}( ${newValue} )` : `${this.chain}~~( ${newValue} )`;
    return this;
  },
  removeLink(position) {
    if (position <= 0 || !Number.isInteger(position) || position > this.getLength()) {
      this.chain = '';
      throw new Error(`You can't remove incorrect link!`)
    }
    this.chain = this.chain.split('~~').filter((el, i) => i !== position - 1).join('~~')
    return this;
  },
  reverseChain() {
    this.chain = this.chain.split('~~').reverse().join('~~');
    return this;
  },
  finishChain() {
    const currentChain = this.chain;
    this.chain = '';
    return currentChain;
  }
};

module.exports = {
  chainMaker
};