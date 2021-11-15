import { Request, Response } from "express";
import { GetUserByIdUseCase } from "./GetUserByIdUseCase";

export class GetUserByIdController {
  constructor(private getUserByIdUseCase: GetUserByIdUseCase) {}
  handle(req: Request, res: Response) {
    const { user_id } = req;

    try {
      const result = this.getUserByIdUseCase.execute(user_id);

      return res.json(result);
    } catch (err) {
      return res.json({ error: err.message });
    }
  }
}
