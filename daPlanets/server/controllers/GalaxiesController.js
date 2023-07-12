
import BaseController from "../utils/BaseController.js";
import { galaxiesService } from "../services/GalaxiesService.js";

export class GalaxiesController extends BaseController {
  constructor() {
    super('api/galaxies')
    this.router
      .get('', this.getGalaxies)

      .post('', this.createGalaxy)
  }
  async getGalaxies(req, res, next) {
    try {
      const galaxies = await galaxiesService.getGalaxies()
      return res.send(galaxies)
    } catch (error) {
      next(error)
    }
  }

  async getGalaxyById(req, res, next) {
    try {
      const galaxyId = req.params.galaxyId
      const galaxy = await galaxiesService.getGalaxyById(galaxyId)
      res.send(galaxy)
    } catch (error) {
      next(error)
    }
  }
  async createGalaxy(req, res, next) {
    try {
      const galaxyData = req.body
      const galaxy = await galaxiesService.createGalaxy(galaxyData)
      return res.send(galaxy)
    } catch (error) {
      next(error)
    }
  }
}