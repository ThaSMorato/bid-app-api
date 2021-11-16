import { serverHttp } from "./app";
import { botServiceUseCase } from "./modules/user/useCases/botService";
import { NewBiddingEventEmitter } from "./service/NewBiddingEvent";

serverHttp.listen(4000, () => {
  console.log("listening on PORT 4000");

  const newBiddingEventEmitter = NewBiddingEventEmitter.getInstance();
  newBiddingEventEmitter.watch(({ amount, productId, userId }) => {
    botServiceUseCase.execute(productId, amount, userId);
  });
});
