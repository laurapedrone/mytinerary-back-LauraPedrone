import { Router } from "express";
import citiesController from "../controllers/citiesController.js";
const citiesRouter = Router();
const {
  getAllCities,
  getOneCity,
  createOneCity,
  createOneItinerary,
  updateOneCity,
  deleteOneCity,
} = citiesController;

citiesRouter.get("/", getAllCities);
citiesRouter.post("/", createOneCity);
citiesRouter.post("/itinerary/:id", createOneItinerary)
citiesRouter.get("/:id", getOneCity);
citiesRouter.put("/:id", updateOneCity);
citiesRouter.delete("/:id", deleteOneCity);

export default citiesRouter;
