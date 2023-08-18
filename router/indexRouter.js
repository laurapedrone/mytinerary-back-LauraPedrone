import { Router } from "express";
import citiesController from "../controllers/citiesController.js";
const indexRouter = Router();
const {getAllCities, getOneCity}  = citiesController

indexRouter.get("/", (request, response, next) => {
  console.log(request)
  response.send("Bienvenidos a mi servidor en /api");
});

indexRouter.get("/cities", getAllCities);
indexRouter.get("/cities/one", getOneCity);

export default indexRouter;
