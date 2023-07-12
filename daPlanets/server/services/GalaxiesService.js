import { dbContext } from "../db/DbContext.js"
import { BadRequest } from "../utils/Errors.js"

class GalaxiesService {

  //review the get galaxy by id, this was a bit confusing
  async getGalaxyById(galaxyId) {
    const galaxy = await dbContext.Galaxies.findById(galaxyId)

    if (!galaxy) {
      throw new BadRequest('Invalid ID')
    }

    return galaxy
  }
  async getGalaxies() {
    const galaxies = await dbContext.Galaxies.find()

    return galaxies
  }
  async createGalaxy(galaxyData) {
    const galaxy = await dbContext.Galaxies.create(galaxyData)
    return galaxy
  }

}

export const galaxiesService = new GalaxiesService()