import cosmetic from '../'

type CosmeticCallable = {
  [key: string]: unknown
} & ((value: string) => string)

const c = cosmetic as unknown as CosmeticCallable

describe('cosmetic', () => {
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

  test('applies bold formatting', () => {
    expect((c.bold as (value: string) => string)('Bold')).toBe('\x1b[1mBold\x1b[22m')
  })

  test('supports chained foreground + background styles', () => {
    const alert = (c.bright as CosmeticCallable).background as CosmeticCallable
    expect((alert.red as (value: string) => string)('Alert')).toBe('\x1b[101mAlert\x1b[49m')
  })

  test('resets style state after each call', () => {
    ;(c.green as (value: string) => string)('First')
    expect(c('Second')).toBe('Second')
  })

  test('supports xterm foreground and background colors', () => {
    expect((c.xterm as (value: number) => (value: string) => string)(42)('FG')).toBe('\x1b[38;5;42mFG\x1b[39m')

    const bg = c.background as CosmeticCallable
    expect((bg.xterm as (value: number) => (value: string) => string)(42)('BG')).toBe('\x1b[48;5;42mBG\x1b[49m')
  })
})
