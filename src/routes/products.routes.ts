import { Router } from "express";
import { ensureAuthenticated } from "../middleware/EnsureAuthenticated";
import { getProductByIdController } from "../modules/product/useCases/GetProductById";
import { listAllProductsController } from "../modules/product/useCases/ListAllProducts";

const productsRoutes = Router();

productsRoutes.get("/", ensureAuthenticated, (req, res) => {
  listAllProductsController.handle(req, res);
});

productsRoutes.get("/:id", ensureAuthenticated, (req, res) => {
  getProductByIdController.handle(req, res);
});

export { productsRoutes };
