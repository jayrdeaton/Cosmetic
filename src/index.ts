import { Cosmetic, setDefaultCosmetic } from './models/Cosmetic.js'

export type { Cosmetic }

const cosmetic = new Cosmetic()
setDefaultCosmetic(cosmetic)
cosmetic.setup()

export default cosmetic as unknown as Cosmetic
