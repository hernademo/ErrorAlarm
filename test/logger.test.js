const LoggerEmail = require('../eventEmmiter/loggerEmail')
const LoggerErrorEvent = require('../eventEmmiter/loggerErrorEvent')
const logError = require('../infraestructure/logger')


describe("Logger Tests", () => {

  test("should send an email", () => {
    const email = new LoggerEmail();
    let result = email.send({to: "user@example.com", subject: "email", message: "error"});
    // assert
    expect(result).toBe(true);
  });

  test("should send only 1 email", () => {
      const email = new LoggerEmail();

      let result = email.send({to: "user@example.com", subject: "email", message: "error"});
      expect(result).toBe(true);

      result = email.send({to: "user@example.com", subject: "email", message: "error"});
      expect(result).toBe(false);
  });

})
