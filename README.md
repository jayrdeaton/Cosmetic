# Cosmetic

A library to color encode strings

## Getting Started

### Installing

```bash
npm install cosmetic
```

### Using

```js
// ESM
import cosmetic from 'cosmetic'

// CJS
const cosmetic = require('cosmetic')

console.log(cosmetic.green('Success!'))
```

There are many different font styles

```js
console.log(cosmetic.bold('Bold'))
console.log(cosmetic.faint('Faint'))
console.log(cosmetic.italic('Italic'))
console.log(cosmetic.underline('Underline'))
console.log(cosmetic.blink('Blink'))
console.log(cosmetic.rapidBlink('Rapid Blink')) // Not always supported...
console.log(cosmetic.reverse('Reverse'))
console.log(cosmetic.conceal('Conceal'))
```

Styles are chainable

```js
console.log(cosmetic.underline.green('Underlined green text'))
```

The basic 8 colors, regular and bright, foreground and background

```js
console.log(cosmetic.black('Black'))
console.log(cosmetic.bright.black('Bright Black'))
console.log(cosmetic.background.black('Background Black'))
console.log(cosmetic.bright.background.black('Bright Background Black'))

console.log(cosmetic.red('Red'))
console.log(cosmetic.bright.red('Bright Red'))
console.log(cosmetic.background.red('Background Red'))
console.log(cosmetic.bright.background.red('Bright Background Red'))

console.log(cosmetic.green('Green'))
console.log(cosmetic.bright.green('Bright Green'))
console.log(cosmetic.background.green('Background Green'))
console.log(cosmetic.bright.background.green('Bright Background Green'))

console.log(cosmetic.yellow('Yellow'))
console.log(cosmetic.bright.yellow('Bright Yellow'))
console.log(cosmetic.background.yellow('Background Yellow'))
console.log(cosmetic.bright.background.yellow('Bright Background Yellow'))

console.log(cosmetic.blue('Blue'))
console.log(cosmetic.bright.blue('Bright Blue'))
console.log(cosmetic.background.blue('Background Blue'))
console.log(cosmetic.bright.background.blue('Bright Background Blue'))

console.log(cosmetic.magenta('Magenta'))
console.log(cosmetic.bright.magenta('Bright Magenta'))
console.log(cosmetic.background.magenta('Background Magenta'))
console.log(cosmetic.bright.background.magenta('Bright Background Magenta'))

console.log(cosmetic.cyan('Cyan'))
console.log(cosmetic.bright.cyan('Bright Cyan'))
console.log(cosmetic.background.cyan('Background Cyan'))
console.log(cosmetic.bright.background.cyan('Bright Background Cyan'))

console.log(cosmetic.white('White'))
console.log(cosmetic.bright.white('Bright White'))
console.log(cosmetic.background.white('Background White'))
console.log(cosmetic.bright.background.white('Bright Background White'))
```

Also you can use all 256 Xterm colors

```js
for (let i = 0; i < 256; i++) {
  console.log(cosmetic.xterm(i)(`Xterm ${i}`))
  console.log(cosmetic.background.xterm(i)(`Xterm ${i} Background`))
}
```

Or use true color (24-bit) with hex or RGB values

```js
console.log(cosmetic.hex('#ff6b35')('Hex foreground'))
console.log(cosmetic.background.hex('#1a1a2e')('Hex background'))

console.log(cosmetic.rgb(255, 107, 53)('RGB foreground'))
console.log(cosmetic.background.rgb(26, 26, 46)('RGB background'))
```

Combine different styles, foreground, and background colors to completely customize your strings. Enjoy!

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
