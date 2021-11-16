import { Request, Response } from "express";
import { NewBidOnProductUseCase } from "./NewBidOnProductUseCase";

export class NewBidOnProductController {
  constructor(private newBidOnProductUseCase: NewBidOnProductUseCase) {}
  handle(req: Request, res: Response) {
    try {
      const { user_id } = req;
      const { id: productId } = req.params;
      const { amount } = req.body;

      this.newBidOnProductUseCase.execute(productId, amount, user_id);

      return res.status(201).send();
    } catch (err) {
      return res.json({ error: err.message });
    }
  }
}
