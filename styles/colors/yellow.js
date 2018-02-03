// let yellow = (string) => {
//   return `\x1b[33m${string}\x1b[0m`;
// };
// yellow.prototype.test = () => {
//   console.log('here')
// };
// module.exports = yellow;

module.exports = {
  toString() {
    return 'hello';
  },
  constructor(string) {
    return `\x1b[33m${string}\x1b[0m`;
  },
  underline(string) {
    this.constructor(string);
    return yellow
    // this.constructor(`\x1b[4m${string}`);
  }
};
