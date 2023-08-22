import { Router } from "express";
import citiesController from "../controllers/citiesController.js";
const citiesRouter = Router();
const {getAllCities, getOneCity, createOneCity}  = citiesController

citiesRouter.get("/", getAllCities);
citiesRouter.post("/", createOneCity);
citiesRouter.get("/:id", getOneCity);

export default citiesRouter