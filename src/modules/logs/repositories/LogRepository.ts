import logs from "../../../../data/logs.json";
import { Log } from "../model/LogModel";

export class LogRepository {
  private logs: Log[];
  private static INSTANCE: LogRepository;

  private constructor() {
    this.logs = logs as Log[];
  }

  public static getInstance() {
    if (!LogRepository.INSTANCE) {
      LogRepository.INSTANCE = new LogRepository();
    }

    return LogRepository.INSTANCE;
  }

  create(user_id: string, product: string, amount: number) {
    const log: Log = new Log();

    Object.assign(log, {
      user_id,
      product,
      amount,
      timestamp: Date.now(),
    });

    this.logs.push(log);
  }

  getAll(): Log[] {
    return this.logs;
  }

  getLogById(id: string): Log {
    const log = this.logs.find((p) => p.id === id);

    if (!log) throw new Error("Log not found");

    return log;
  }
}
