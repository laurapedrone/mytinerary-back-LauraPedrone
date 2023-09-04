import { Router } from "express";
import citiesController from "../controllers/citiesController.js";
const citiesRouter = Router();
const {
  getAllCities,
  getOneCity,
  createOneCity,
  updateOneCity,
  deleteOneCity,
} = citiesController;

citiesRouter.get("/", getAllCities);
citiesRouter.post("/", createOneCity);
citiesRouter.get("/:id", getOneCity);
citiesRouter.put("/:id", updateOneCity);
citiesRouter.delete("/:id", deleteOneCity);

export default citiesRouter;
