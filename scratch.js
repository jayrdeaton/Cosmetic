let prefixes = [];

let Cosmetic = class Cosmetic {
  constructor() {
    this.prefixes = [];
    this.suffix = '\x1b[0m';
    // this.underline = this.underline;
    // Object.setPrototypeOf(this.underline, Cosmetic.prototype)
    // Object.defineProperty(this.underline, 'prefixes', {
    //   value: this.prefixes,
    //   writable: true
    // });
    // Object.defineProperty(this.underline, 'suffix', {
    //   value: this.suffix,
    //   writable: true
    // });
    // // this.cyan = this.cyan;
    // Object.setPrototypeOf(this.cyan, Cosmetic.prototype)
    // Object.defineProperty(this.cyan, 'prefixes', {
    //   value: this.prefixes,
    //   writable: true
    // });
    // Object.defineProperty(this.cyan, 'suffix', {
    //   value: this.suffix,
    //   writable: true
    // });
    // Object.setPrototypeOf(this.setStyle, Cosmetic.prototype);
    // Object.setPrototypeOf(this.encode, Cosmetic.prototype);
      Object.defineProperty(this.setStyle, )
      this.underline = this.setStyle('\x1b[4m');
      this.cyan = this.setStyle('\x1b[36m');
      // this.encode = this.encode.bind(this);
      // this.setStyle = this.encode.bind(this);
      this.setup = true;
    };
    setStyle(style) {
      if (!this.setup) {
        return this.setStyle;
      }
      console.log('HERE')
      this.prefixes.unshift(style);
      return this.encode();
    };
    encode(string) {
      console.log('heyoooo')
      for (let prefix of this.aprefixes) {
        string = `${prefix}${string}`;
      };
      string += this.suffix;
      return string;
    };


  };


// let encode = (string) => {
//   console.log(string)
//   // for (let prefix of this.prefixes) {
//   //   string = `${prefix}${string}`;
//   // };
//   // string += this.suffix;
//   return string;
// };
// let setStyle = (style, cosmetic) => {
//   if (!this.setup) {
//     return cosmetic;
//   }
//   console.log('HERE')
//   cosmetic.prefixes.unshift(style);
//   return encode;
// };
// let Cosmetic = class Cosmetic {
//   constructor() {
//     this.prefixes = [];
//     this.suffix = '\x1b[0m';
//     Object.setPrototypeOf(setStyle, Cosmetic.prototype);
//     this.underline = setStyle('\x1b[4m', this);
//     // Object.setPrototypeOf(encode, Cosmetic.prototype);
//     this.encode = encode(this);
//     this.setup = true;
//   };
// };

let cosmetic = new Cosmetic();

module.exports = cosmetic;
