const request = require("supertest");
const app = require("../app.js");

describe("here we go", () => {
  console.log("hey there I have entered the testz file");
  test("responds to /", async () => {
    const res = await request(app).get("/");
  });
  test("responds to post req /xyz", async () => {
    const res = await request(app).post("/xyz");
    expect(typeof res.body.data[0].isBooksOpted).toBe("boolean");
    expect(typeof res.body.data[0].orderStatus).toBe("string");
    expect(Array.isArray(res.body.data[0].productDetails)).toBe(true);
  });
});
