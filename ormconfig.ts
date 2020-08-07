import { CustomNamingStrategy } from "./src/configs/database/CustomNamingStrategy";
import { Environment } from "./src/configs/Environment";

const DEFAULTS = {
  type: "postgres",
  host: "database",
  port: 5432,
  username: "postgres",
  password: "123456",
  logging: Environment.IS_DEV_MODE,
  entities: ["src/entity/**/*.ts"],
  migrations: ["src/migration/**/*.ts"],
  subscribers: ["src/subscriber/**/*.ts"],
  namingStrategy: new CustomNamingStrategy(),
  cli: {
    entitiesDir: "src/entity",
    migrationsDir: "src/migration",
    subscribersDir: "src/subscriber",
  },
};

module.exports = {
  database: Environment.IS_TEST_MODE ? "test" : "gazin",
  ...DEFAULTS,
};
