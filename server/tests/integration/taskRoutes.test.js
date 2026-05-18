const request = require("supertest");
const app = require("../../src/app");

describe("Task Routes", () => {
  test("should create a new task", async () => {
    const response = await request(app)
      .post("/tasks")
      .send({
        title: "Finish CMSC129"
      });

    expect(response.statusCode).toBe(201);
  });
});