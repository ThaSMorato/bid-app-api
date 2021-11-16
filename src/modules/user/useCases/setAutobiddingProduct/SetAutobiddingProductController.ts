import { Request, Response } from "express";
import { SetAutobiddingProductUseCase } from "./SetAutobiddingProductUseCase";

export class SetAutobiddingProductController {
  constructor(private setAutobiddingProductUseCase: SetAutobiddingProductUseCase) {}
  handle(req: Request, res: Response) {
    const { user_id } = req;
    const { product_id } = req.body;

    try {
      this.setAutobiddingProductUseCase.execute(user_id, product_id);

      return res.status(200).send();
    } catch (err) {
      return res.json({ error: err.message });
    }
  }
}
