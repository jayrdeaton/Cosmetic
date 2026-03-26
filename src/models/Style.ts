export class Style {
  prefix: string
  suffix: string
  constructor(prefix: string, suffix: string) {
    this.prefix = `\x1b[${prefix}m`
    this.suffix = `\x1b[${suffix}m`
  }
}
