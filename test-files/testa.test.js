const request = require("supertest");
const app = require("../app.js");

describe("another describe here", () => {
  console.log("hey there I have entered the testa file");
  test("responds to /abc", async () => {
    const res = await request(app).get("/abc");
    console.log('adding a console statement, just to check the commit');
    console.log("checking the console statement", res.text);
    expect(typeof res.text).toBe("string");
  });
  test("responds to another req /pqr", async () => {
    const res = await request(app).post("/pqr");
    console.log("checking another console statement", res.text);
    console.log("lets console the toBE function");
    expect(typeof res.text).toBe("string");
  });
});
