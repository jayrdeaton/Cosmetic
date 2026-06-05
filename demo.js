/* eslint-disable no-console */
const cosmetic = require('./dist/index.js')

const divider = () => console.log(cosmetic.faint('─'.repeat(50)))
const section = (title) => {
  console.log()
  console.log(cosmetic.bold.underline(title))
}

console.log()
console.log(cosmetic.bold.bright.white('  ✦ Cosmetic Demo ✦'))
console.log(cosmetic.faint('  Chainable ANSI colors & styles for Node.js'))
divider()

// --- Font Styles ---
section('Font Styles')
console.log(cosmetic.bold('Bold'))
console.log(cosmetic.faint('Faint'))
console.log(cosmetic.italic('Italic'))
console.log(cosmetic.underline('Underline'))
console.log(cosmetic.blink('Blink'))
console.log(cosmetic.reverse('Reverse'))
console.log(cosmetic.conceal('Conceal (invisible)'))

// --- Basic 8 Colors ---
section('Basic Colors')
const colors = ['black', 'red', 'green', 'yellow', 'blue', 'magenta', 'cyan', 'white']
for (const color of colors) {
  const regular = cosmetic[color](color.padEnd(8))
  const bright = cosmetic.bright[color]('bright'.padEnd(8))
  const bg = cosmetic.background[color]('  bg  ')
  const brightBg = cosmetic.bright.background[color](' bright bg ')
  console.log(`${regular}  ${bright}  ${bg}  ${brightBg}`)
}

// --- Chaining ---
section('Chaining')
console.log(cosmetic.bold.underline.green('Bold + underline + green'))
console.log(cosmetic.italic.bright.magenta('Italic + bright + magenta'))
console.log(cosmetic.bold.background.blue.bright.white('Bold + bright white on blue background'))

// --- Xterm 256 ---
section('Xterm 256 — gradient sample')
const row = []
for (let i = 196; i <= 231; i++) {
  row.push(cosmetic.xterm(i)('█'))
}
console.log(row.join(''))

// --- True Color (hex & rgb) ---
section('True Color')
const palette = [
  ['#ff6b35', 'Sunrise orange'],
  ['#f7c59f', 'Peach'],
  ['#efefd0', 'Cream'],
  ['#004e89', 'Deep blue'],
  ['#1a936f', 'Emerald']
]
for (const [hex, name] of palette) {
  console.log(cosmetic.hex(hex)(`██  ${name}  (${hex})`))
}

console.log()
const rgbStops = [
  [255, 0, 0],
  [255, 128, 0],
  [255, 255, 0],
  [0, 255, 0],
  [0, 0, 255],
  [128, 0, 255]
]
console.log(rgbStops.map(([r, g, b]) => cosmetic.rgb(r, g, b)('████')).join('') + '  rgb rainbow')

// --- Real-world patterns ---
section('Real-world Patterns')
console.log(`${cosmetic.green.bold('✔')} ${cosmetic.green('Tests passed')} ${cosmetic.faint('(42/42)')}`)
console.log(`${cosmetic.yellow.bold('⚠')} ${cosmetic.yellow('Deprecation warning')} ${cosmetic.faint('src/old.ts:12')}`)
console.log(`${cosmetic.red.bold('✖')} ${cosmetic.red('Build failed')} ${cosmetic.faint('exit code 1')}`)
console.log(`${cosmetic.blue.bold('ℹ')} ${cosmetic.blue('Server listening')} ${cosmetic.faint('http://localhost:3000')}`)

console.log()
divider()
console.log(cosmetic.faint('  npm install cosmetic'))
console.log()
