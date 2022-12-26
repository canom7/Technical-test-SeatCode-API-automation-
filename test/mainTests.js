const { expect } = require("chai");
let chai = require("chai");
let chaiHttp = require("chai-http");

chai.use(chaiHttp);

describe("Exercice 2 API automation", () => {
  it("It should exist the world SeatCode in the field owner->login", function (done) {
    const loginValue = "seatcode";
    chai
      .request("https://api.github.com/repos")
      .get("/metrolab/SingleDateAndTimePicker")
      .end((err, response) => {
        expect(response).to.have.status(200);
        expect(response.body.owner.login).to.equal(loginValue);
        done();
      });
  });
});
