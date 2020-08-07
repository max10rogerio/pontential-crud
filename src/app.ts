import Express from "express";

import { routes } from "./routes";
import { handleErrorMiddleware } from "./helpers/error";

const app = Express();

app.use(Express.json());
app.use(routes);
app.use(handleErrorMiddleware);

export { app };
