import { Request, Response } from "express";
import { GetProductByIdUseCase } from "./GetProductByIdUseCase";

export class GetProductByIdController {
  constructor(private getProductByIdUseCase: GetProductByIdUseCase) {}
  handle(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const result = this.getProductByIdUseCase.execute(id);

      return res.json(result);
    } catch (err) {
      return res.json({ error: err.message });
    }
  }
}
