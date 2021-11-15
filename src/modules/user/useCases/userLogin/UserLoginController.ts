import { Request, Response } from "express";
import { UserLoginUseCase } from "./UserLoginUseCase";

export class UserLoginController {
  constructor(private userLoginUseCase: UserLoginUseCase) {}
  handle(req: Request, res: Response) {
    const { login, password } = req.body;

    try {
      const result = this.userLoginUseCase.execute(login, password);

      return res.json(result);
    } catch (err) {
      return res.json({ error: err.message });
    }
  }
}
