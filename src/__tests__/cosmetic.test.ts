import cosmetic from '../'

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
    expect(cosmetic.bold('Bold')).toBe('\x1b[1mBold\x1b[22m')
  })

  test('supports chained foreground + background styles', () => {
    expect(cosmetic.bright.background.red('Alert')).toBe('\x1b[101mAlert\x1b[49m')
  })

  test('resets style state after each call', () => {
    cosmetic.green('First')
    expect(cosmetic('Second')).toBe('Second')
  })

  test('supports xterm foreground and background colors', () => {
    expect(cosmetic.xterm(42)('FG')).toBe('\x1b[38;5;42mFG\x1b[39m')
    expect(cosmetic.background.xterm(42)('BG')).toBe('\x1b[48;5;42mBG\x1b[49m')
  })

  test('supports hex foreground and background colors', () => {
    expect(cosmetic.hex('#ff6b35')('FG')).toBe('\x1b[38;2;255;107;53mFG\x1b[39m')
    expect(cosmetic.background.hex('#ff6b35')('BG')).toBe('\x1b[48;2;255;107;53mBG\x1b[49m')
  })

  test('supports rgb foreground and background colors', () => {
    expect(cosmetic.rgb(255, 107, 53)('FG')).toBe('\x1b[38;2;255;107;53mFG\x1b[39m')
    expect(cosmetic.background.rgb(255, 107, 53)('BG')).toBe('\x1b[48;2;255;107;53mBG\x1b[49m')
  })
})
