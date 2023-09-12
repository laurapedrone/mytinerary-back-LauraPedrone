import { Router } from "express";
import citiesRouter from "./citiesRouter.js";
import authRouter from "./authRouter.js";

const indexRouter = Router();

indexRouter.get("/", (request, response, next) => {
  console.log(request);
  response.send("Bienvenidos a mi servidor en /api");
});

indexRouter.use("/cities", citiesRouter);
indexRouter.use("/auth", authRouter);

export default indexRouter;
