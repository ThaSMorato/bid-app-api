import { Router } from "express";
import { productsRoutes } from "./products.routes";
import { userRoutes } from "./user.routes";

const router = Router();

router.use(userRoutes);
router.use("/products", productsRoutes);

export { router };
