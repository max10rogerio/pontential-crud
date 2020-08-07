import request from "supertest";

import { app } from "../app";
import { connection } from "./utils/helpers";

describe("Test app initialization", () => {
  it("It should response the GET method with status 404", async () => {
    const response = await request(app).get("/");

    expect(response.status).toBe(404);
  });
  it("It should database has been configured", async () => {
    await expect(connection.create()).resolves.not.toThrow();
  });
});
