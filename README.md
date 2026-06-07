# Cosmetic

A chainable ANSI color and style library for Node.js terminals

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

### Styles

```js
cosmetic.bold('Bold')
cosmetic.faint('Faint')
cosmetic.italic('Italic')
cosmetic.underline('Underline')
cosmetic.blink('Blink')
cosmetic.rapidBlink('Rapid Blink') // Not always supported
cosmetic.reverse('Reverse')
cosmetic.conceal('Conceal')
```

### Colors

The basic 8 colors support regular, bright, foreground, and background variants:

```js
cosmetic.red('Red')
cosmetic.bright.red('Bright Red')
cosmetic.background.red('Background Red')
cosmetic.bright.background.red('Bright Background Red')
```

Available colors: `black`, `red`, `green`, `yellow`, `blue`, `magenta`, `cyan`, `white`

### Chaining

Styles are chainable:

```js
cosmetic.underline.green('Underlined green text')
cosmetic.bold.bright.background.red('Bold bright red background')
```

### Xterm

All 256 Xterm colors:

```js
cosmetic.xterm(42)('Foreground')
cosmetic.background.xterm(42)('Background')
```

### True Color

24-bit color via hex or RGB:

```js
cosmetic.hex('#ff6b35')('Hex foreground')
cosmetic.background.hex('#1a1a2e')('Hex background')

cosmetic.rgb(255, 107, 53)('RGB foreground')
cosmetic.background.rgb(26, 26, 46)('RGB background')
```

## TypeScript

The `Cosmetic` type represents the default export and is useful for annotating variables or parameters:

```ts
import cosmetic, { type Cosmetic } from 'cosmetic'

function createLogger(color: Cosmetic) {
  return (message: string) => color(message)
}

const warn = createLogger(cosmetic.yellow)
const error = createLogger(cosmetic.bright.red)
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
