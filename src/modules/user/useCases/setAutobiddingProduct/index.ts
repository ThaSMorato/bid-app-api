import { UsersRepository } from "../../repositories/UsersRepository";
import { SetAutobiddingProductController } from "./SetAutobiddingProductController";
import { SetAutobiddingProductUseCase } from "./SetAutobiddingProductUseCase";

const usersRepository = UsersRepository.getInstance();
const setAutobiddingProductUseCase = new SetAutobiddingProductUseCase(usersRepository);
const setAutobiddingProductController = new SetAutobiddingProductController(
  setAutobiddingProductUseCase
);

export { setAutobiddingProductController };
