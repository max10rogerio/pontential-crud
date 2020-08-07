import * as dotenv from "dotenv";

dotenv.config();

export class Environment {
  static PORT = parseInt(process.env?.PORT ?? "9999");
  static IS_DEV_MODE = process.env.NODE_ENV === "development";
  static IS_TEST_MODE = process.env.NODE_ENV === "test";
}
