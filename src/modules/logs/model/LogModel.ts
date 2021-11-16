import { v4 as uuidv4 } from "uuid";

export class Log {
  id: string;
  user_id: string;
  product: string;
  amount: string;
  timestamp: number;

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}
