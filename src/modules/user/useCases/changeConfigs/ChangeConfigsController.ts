import { Request, Response } from "express";
import { ChangeConfigsUseCase } from "./ChangeConfigsUseCase";

export class ChangeConfigsController {
  constructor(private changeConfigsUseCase: ChangeConfigsUseCase) {}
  handle(req: Request, res: Response) {
    const { user_id } = req;
    const { maximum_bid_amount, bid_alert_at } = req.body;

    try {
      this.changeConfigsUseCase.execute(user_id, maximum_bid_amount, bid_alert_at);

      return res.status(200).send();
    } catch (err) {
      return res.json({ error: err.message });
    }
  }
}
