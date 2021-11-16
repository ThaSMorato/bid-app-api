import { UsersRepository } from "../../repositories/UsersRepository";

export class SetAutobiddingProductUseCase {
  constructor(private usersRepository: UsersRepository) {}
  execute(id: string, product_id: string) {
    this.usersRepository.handleAutobidding(id, product_id);
  }
}
