import { Request, Response } from "express";
import { ListAllProductsUseCase } from "./ListAllProductsUseCase";

export class ListAllProductsController {
  constructor(private listAllProductsUseCase: ListAllProductsUseCase) {}
  handle(req: Request, res: Response) {
    try {
      const result = this.listAllProductsUseCase.execute();

      return res.json(result);
    } catch (err) {
      return res.json({ error: err.message });
    }
  }
}
