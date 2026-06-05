import { Style } from './Style.js'

let defaultCosmetic: Cosmetic | undefined

export const setDefaultCosmetic = (instance: Cosmetic): void => {
  defaultCosmetic = instance
}

export class Cosmetic {
  styles: Style[]
  bgEnabled: boolean
  brightEnabled: boolean

  constructor() {
    this.styles = []
    this.bgEnabled = false
    this.brightEnabled = false

    const encoder = this.encoder as unknown as Cosmetic
    Object.setPrototypeOf(encoder, Cosmetic.prototype)
    return encoder
  }
  setup(): void {
    this.styles = []
    this.bgEnabled = false
    this.brightEnabled = false
    // this.xterm = this.xterm.bind(this.encoder)
    // return this;
  }
  xterm(num: number): this {
    if (this.bgEnabled) {
      this.styles.unshift(new Style(`48;5;${num}`, '49'))
    } else {
      this.styles.unshift(new Style(`38;5;${num}`, '39'))
    }
    return this
  }
  encoder(this: Cosmetic | undefined, string: string): string {
    if (!process.stdout || !process.stdout.isTTY) return string
    const instance = this ?? defaultCosmetic
    if (!instance) return string
    for (const style of instance.styles) string = `${style.prefix}${string}${style.suffix}`
    instance.setup()
    return string
  }
  rgb(r: number, g: number, b: number): this {
    if (this.bgEnabled) {
      this.styles.unshift(new Style(`48;2;${r};${g};${b}`, '49'))
    } else {
      this.styles.unshift(new Style(`38;2;${r};${g};${b}`, '39'))
    }
    return this
  }
  hex(hexString: string): this {
    const hex = hexString.replace(/^#/, '')
    const r = parseInt(hex.slice(0, 2), 16)
    const g = parseInt(hex.slice(2, 4), 16)
    const b = parseInt(hex.slice(4, 6), 16)
    return this.rgb(r, g, b)
  }
  get random() {
    return this.xterm(Math.round(Math.random() * 256))
  }
  get background() {
    this.bgEnabled = true
    return this
  }
  get foreground() {
    this.bgEnabled = false
    return this
  }
  get bright() {
    this.brightEnabled = true
    return this
  }
  get dark() {
    this.brightEnabled = false
    return this
  }
  get reset() {
    this.styles.unshift(new Style('0', '0'))
    return this
  }
  get normal() {
    return this.reset
  }
  get bold() {
    this.styles.unshift(new Style('1', '22'))
    return this
  }
  get faint() {
    this.styles.unshift(new Style('2', '22'))
    return this
  }
  get italic() {
    this.styles.unshift(new Style('3', '23'))
    return this
  }
  get underline() {
    this.styles.unshift(new Style('4', '24'))
    return this
  }
  get blink() {
    this.styles.unshift(new Style('5', '25'))
    return this
  }
  get rapidBlink() {
    this.styles.unshift(new Style('6', '25'))
    return this
  }
  get reverse() {
    this.styles.unshift(new Style('7', '27'))
    return this
  }
  get conceal() {
    this.styles.unshift(new Style('8', '28'))
    return this
  }
  // Colors
  get black() {
    if (this.brightEnabled) {
      if (this.bgEnabled) {
        this.styles.unshift(new Style('100', '49'))
      } else {
        this.styles.unshift(new Style('90', '39'))
      }
    } else {
      if (this.bgEnabled) {
        this.styles.unshift(new Style('40', '49'))
      } else {
        this.styles.unshift(new Style('30', '39'))
      }
    }
    return this
  }
  get red() {
    if (this.brightEnabled) {
      if (this.bgEnabled) {
        this.styles.unshift(new Style('101', '49'))
      } else {
        this.styles.unshift(new Style('91', '39'))
      }
    } else {
      if (this.bgEnabled) {
        this.styles.unshift(new Style('41', '49'))
      } else {
        this.styles.unshift(new Style('31', '39'))
      }
    }
    return this
  }
  get green() {
    if (this.brightEnabled) {
      if (this.bgEnabled) {
        this.styles.unshift(new Style('102', '49'))
      } else {
        this.styles.unshift(new Style('92', '39'))
      }
    } else {
      if (this.bgEnabled) {
        this.styles.unshift(new Style('42', '49'))
      } else {
        this.styles.unshift(new Style('32', '39'))
      }
    }
    return this
  }
  get yellow() {
    if (this.brightEnabled) {
      if (this.bgEnabled) {
        this.styles.unshift(new Style('103', '49'))
      } else {
        this.styles.unshift(new Style('93', '39'))
      }
    } else {
      if (this.bgEnabled) {
        this.styles.unshift(new Style('43', '49'))
      } else {
        this.styles.unshift(new Style('33', '39'))
      }
    }
    return this
  }
  get blue() {
    if (this.brightEnabled) {
      if (this.bgEnabled) {
        this.styles.unshift(new Style('104', '49'))
      } else {
        this.styles.unshift(new Style('94', '39'))
      }
    } else {
      if (this.bgEnabled) {
        this.styles.unshift(new Style('44', '49'))
      } else {
        this.styles.unshift(new Style('34', '39'))
      }
    }
    return this
  }
  get magenta() {
    if (this.brightEnabled) {
      if (this.bgEnabled) {
        this.styles.unshift(new Style('105', '49'))
      } else {
        this.styles.unshift(new Style('95', '39'))
      }
    } else {
      if (this.bgEnabled) {
        this.styles.unshift(new Style('45', '49'))
      } else {
        this.styles.unshift(new Style('35', '39'))
      }
    }
    return this
  }
  get cyan() {
    if (this.brightEnabled) {
      if (this.bgEnabled) {
        this.styles.unshift(new Style('106', '49'))
      } else {
        this.styles.unshift(new Style('96', '39'))
      }
    } else {
      if (this.bgEnabled) {
        this.styles.unshift(new Style('46', '49'))
      } else {
        this.styles.unshift(new Style('36', '39'))
      }
    }
    return this
  }
  get white() {
    if (this.brightEnabled) {
      if (this.bgEnabled) {
        this.styles.unshift(new Style('107', '49'))
      } else {
        this.styles.unshift(new Style('97', '39'))
      }
    } else {
      if (this.bgEnabled) {
        this.styles.unshift(new Style('47', '49'))
      } else {
        this.styles.unshift(new Style('37', '39'))
      }
    }
    return this
  }
}
