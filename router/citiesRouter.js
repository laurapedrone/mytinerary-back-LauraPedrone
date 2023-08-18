import { Router } from "express";
import citiesController from "../controllers/citiesController.js";
const citiesRouter = Router();
const {getAllCities, getOneCity}  = citiesController

citiesRouter.get("/", getAllCities);
citiesRouter.get("/:id", getOneCity);

export default citiesRouter