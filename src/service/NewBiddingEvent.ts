import { EventEmitter } from "events";
const newBiddingEventName = Symbol("newBiddingEventName");

type NewBiddingEventPayload = {
  productId: string;
  amount: number;
  userId: string;
};

export class NewBiddingEventEmitter {
  emitter: EventEmitter;
  private static INSTANCE: NewBiddingEventEmitter;

  private constructor() {
    this.emitter = new EventEmitter();
  }

  public static getInstance(): NewBiddingEventEmitter {
    if (!NewBiddingEventEmitter.INSTANCE) {
      NewBiddingEventEmitter.INSTANCE = new NewBiddingEventEmitter();
    }

    return NewBiddingEventEmitter.INSTANCE;
  }

  emmit(payload: NewBiddingEventPayload) {
    this.emitter.emit(newBiddingEventName, payload);
  }

  watch(callback: (payload: NewBiddingEventPayload) => void) {
    this.emitter.on(newBiddingEventName, callback);
  }
}
