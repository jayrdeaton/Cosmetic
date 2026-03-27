import { Cosmetic, setDefaultCosmetic } from './models'

const cosmetic = new Cosmetic()
setDefaultCosmetic(cosmetic)
cosmetic.setup()

export default cosmetic
