const request = require("supertest");
const students = require("../../routes/students");
const app = require("../../app");
const studentData = [
  { name: "carla", subjects: ["science", "math"] },
  { name: "denise", subjects: ["english", "math"] },
  { name: "adam", subjects: ["science", "history"] }
];

const testStudents = [
  { name: "bob", subjects: ["science", "math"] },
  { name: "marley", subjects: ["english", "math"] },
  { name: "john", subjects: ["science", "history"] }
];

describe("Students Route", () => {
  test("should get all students", () => {
    return request(app)
      .get("/students")
      .expect(200)
      .expect("Content-Type", /json/);
  });
  test("should post studenst", () => {
    return request(app)
      .post("/students")
      .send({ name: "bobun" })
      .set("Accept", "application/json")
      .expect(201)
      .then(res => {
          expect(res.body.id).toEqual(expect.any(String))
          expect(res.body.name).toEqual('bobun')
          expect(res.body.subjects).toEqual(expect.any(Array))
      });
  });
});
describe("/students", () => {
  let path = "/students/123";

  test("should edit a student record", done => {
    request(app)
      .put(path)
      .send({ name: "alfred", subjects: ["science", "sociology"] })
      .set("Accept", "application/json")
      .then(res => {
        expect(res.body).toEqual(expect.any(Object));
        expect(res.body).toEqual({
          id: "123",
          name: "alfred",
          subjects: ["science", "sociology"]
        });
        done();
      });
  });
});
