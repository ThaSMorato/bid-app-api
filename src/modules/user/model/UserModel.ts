export class User {
  id: string;
  login: string;
  password: string;
  role: "regular";
  maximum_bid_amount: number;
  bid_alert_at: number;
  name: string;
  avatar_url: string;
  products_on_autobid: string[];
}
