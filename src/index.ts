import { Cosmetic, setDefaultCosmetic } from './models/Cosmetic.js'

const cosmetic = new Cosmetic()
setDefaultCosmetic(cosmetic)
cosmetic.setup()

export default cosmetic
