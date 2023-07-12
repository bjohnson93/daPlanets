import { dbContext } from "../db/DbContext.js"
import { galaxiesService } from "./GalaxiesService.js"

class PlanetsService {
  async createPlanet(planetData) {
    await galaxiesService.getGalaxyById(planetData.galaxyId)

    const planet = dbContext.Planets.create(planetData)
    return planet
  }

}

export const planetsService = new PlanetsService()