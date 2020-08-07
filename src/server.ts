import "reflect-metadata";
import { createConnection } from "typeorm";

import { Environment } from "./configs/Environment";
import { Logger } from "./configs/Logger";

import { app } from "./app";

const logger = new Logger("server");

createConnection().then(() => {
  logger.debug("Database connected...");
  app.listen(Environment.PORT, () => {
    logger.debug(`App running on port: ${Environment.PORT}`);
  });
});
