import request from "supertest";

import { app } from "../app";
import { connection } from "./utils/helpers";

const REQUEST_VALUES = {
  nome: "Test user",
  sexo: "m",
  hobby: "Test app!",
  datanascimento: "1995-01-01",
};

const createDeveloper = async (values: Record<string, any> = {}) => {
  return request(app)
    .post("/developers")
    .send({ ...REQUEST_VALUES, ...values });
};

beforeAll(async () => {
  await connection.create();
});

afterAll(async () => {
  await connection.close();
});

beforeEach(async () => {
  await connection.clear();
});

describe("Test Developer routes", () => {
  it("Create a developer", async () => {
    const response = await createDeveloper();

    expect(response.status).toBe(201);
    expect(response.body.idade).toBe(25);
  });

  it("List developers", async () => {
    const response = await request(app).get("/developers");

    expect(response.status).toBe(200);
    expect(response.body.length).toBe(0);
  });

  it("Find developers with query params", async () => {
    await createDeveloper();

    const response = await request(app).get("/developers").query({
      nome: REQUEST_VALUES.nome,
    });

    expect(response.status).toBe(200);
    expect(response.body.length).toBe(1);
  });

  it("Expect an invalid response on search a developer", async () => {
    await createDeveloper();

    const response = await request(app).get("/developers").query({
      nome: "xxx",
    });

    expect(response.status).toBe(404);
  });

  it("Find a developer by id", async () => {
    const developer = await createDeveloper();
    const response = await request(app).get(`/developers/${developer.body.id}`);

    expect(response.status).toBe(200);
  });

  it("Expect an error on find a developer by invalid id", async () => {
    const response = await request(app).get(`/developers/1111`);

    expect(response.status).toBe(404);
  });

  it("Update a developer", async () => {
    const newName = "Another Test";
    const developer = await createDeveloper();
    const response = await request(app)
      .put(`/developers/${developer.body.id}`)
      .send({
        nome: newName,
      });

    expect(response.body.nome).toBe(newName);
  });

  it("Expect an error on update a developer", async () => {
    await createDeveloper();

    const response = await request(app).put(`/developers/1111`).send({
      nome: "test",
    });

    expect(response.status).toBe(400);
  });

  it("Delete a developer", async () => {
    const developer = await createDeveloper();
    const response = await request(app).delete(
      `/developers/${developer.body.id}`
    );

    expect(response.status).toBe(204);
  });

  it("Expect an error on delete a developer", async () => {
    await createDeveloper();

    const response = await request(app).delete(`/developers/1111`);

    expect(response.status).toBe(204);
  });
});
