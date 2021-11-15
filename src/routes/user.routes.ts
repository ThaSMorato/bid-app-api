import { Router } from "express";
import { userLoginController } from "../modules/user/useCases/userLogin";

const userRoutes = Router();

userRoutes.post("/login", (req, res) => {
  userLoginController.handle(req, res);
});

export { userRoutes };
