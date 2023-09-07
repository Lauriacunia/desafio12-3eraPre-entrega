import { Router } from "express";
import {
  getAll,
  create,
  getOne,
  update,
  deleteOne,
} from "../../controllers/product.controller.js";
import { validateRequest } from "../../middleware/validators.js";

const router = Router();

/**Rutas */
router.get("/", getAll);
router.get("/:id", getOne);
router.post("/", validateRequest, create);
router.put("/:id", validateRequest, update);
router.delete("/:id", deleteOne);

export default router;
