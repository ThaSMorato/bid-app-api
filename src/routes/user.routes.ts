import { Router } from "express";
import { ensureAuthenticated } from "../middleware/EnsureAuthenticated";
import { getUserByIdController } from "../modules/user/useCases/getUserById";
import { setAutobiddingProductController } from "../modules/user/useCases/setAutobiddingProduct";
import { userLoginController } from "../modules/user/useCases/userLogin";

const userRoutes = Router();

userRoutes.post("/login", (req, res) => {
  userLoginController.handle(req, res);
});

userRoutes.get("/user", ensureAuthenticated, (req, res) => {
  getUserByIdController.handle(req, res);
});

userRoutes.patch("/user/autobid", ensureAuthenticated, (req, res) => {
  setAutobiddingProductController.handle(req, res);
});

export { userRoutes };
