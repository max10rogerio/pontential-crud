import { Router } from "express";

import { developerController } from "./controllers/developerController";
import { developerValidators } from "./validators/developerValidators";

export const routes = Router();

routes.get("/developers", developerController.findAll);
routes.get(
  "/developers/:id",
  developerValidators.findById,
  developerController.findById
);
routes.post("/developers", developerValidators.post, developerController.post);
routes.put("/developers/:id", developerController.update);
routes.delete("/developers/:id", developerController.delete);
