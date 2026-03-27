import cosmetic from '../'

type CosmeticCallable = {
  [key: string]: unknown
} & ((value: string) => string)

const c = cosmetic as unknown as CosmeticCallable

const print = (value: string): void => {
  process.stdout.write(`${value}\n`)
}

describe('cosmetic print matrix', () => {
  const ttyDescriptor = Object.getOwnPropertyDescriptor(process.stdout, 'isTTY')

  beforeAll(() => {
    Object.defineProperty(process.stdout, 'isTTY', {
      value: true,
      configurable: true
    })
  })

  afterAll(() => {
    if (ttyDescriptor) {
      Object.defineProperty(process.stdout, 'isTTY', ttyDescriptor)
      return
    }

    delete (process.stdout as { isTTY?: boolean }).isTTY
  })

  test('printing all options', () => {
    print((c.bold as (value: string) => string)('Bold'))
    print((c.faint as (value: string) => string)('Faint'))
    print((c.italic as (value: string) => string)('Italic'))
    print((c.underline as (value: string) => string)('Underline'))
    print((c.blink as (value: string) => string)('Blink'))
    print((c.rapidBlink as (value: string) => string)('Rapid Blink'))
    print((c.reverse as (value: string) => string)('Reverse'))
    print((c.conceal as (value: string) => string)('Conceal'))

    print((c.random as (value: string) => string)('Random'))

    const colors = ['black', 'red', 'green', 'yellow', 'blue', 'magenta', 'cyan', 'white'] as const

    for (const color of colors) {
      print((c[color] as unknown as (value: string) => string)(color))

      const bright = c.bright as CosmeticCallable
      print((bright[color] as unknown as (value: string) => string)(`Bright ${color}`))

      const background = c.background as CosmeticCallable
      print((background[color] as unknown as (value: string) => string)(`Background ${color}`))

      const brightBackground = (c.bright as CosmeticCallable).background as CosmeticCallable
      print((brightBackground[color] as unknown as (value: string) => string)(`Bright Background ${color}`))
    }

    let xtermString = ''
    for (let i = 0; i < 256; i++) {
      xtermString += (c.xterm as (value: number) => (value: string) => string)(i)(` Xterm ${i}`)
    }
    print(xtermString)

    xtermString = ''
    for (let i = 0; i < 256; i++) {
      const background = c.background as CosmeticCallable
      xtermString += (background.xterm as (value: number) => (value: string) => string)(i)(` Background Xterm ${i}`)
    }
    print(xtermString)

    expect(true).toBe(true)
  })
})
