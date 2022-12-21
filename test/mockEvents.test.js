const LoggerEvent = require('../eventEmmiter/loggerEvent')
const LoggerEmail = require('../eventEmmiter/loggerEmail')
const LoggerErrorEvent = require('../eventEmmiter/loggerErrorEvent')
const logError = require('../infraestructure/logger')
const EmailSender = require('../infraestructure/emailSender')

jest.mock('../eventEmmiter/loggerEmail');
jest.mock('../infraestructure/logger');
jest.mock('../infraestructure/emailSender');


beforeEach(() => {
  LoggerEmail.mockClear();
  logError.mockClear();  
});

describe("Logger Tests", () => {

  test("initial test", () => {
    expect(LoggerEmail).not.toHaveBeenCalled();
    expect(logError).not.toHaveBeenCalled();
  });

  test("SendEmail should been called", () => {
  
    const event = new LoggerErrorEvent();
    event.add("Test error")
    expect(LoggerEmail).toHaveBeenCalledTimes(1);
    expect(logError).toHaveBeenCalledTimes(1);


    const mockInstance = LoggerEmail.mock.instances[0];
    const mockSendEmail = mockInstance.send;
    expect(mockSendEmail).toHaveBeenCalledWith({to: "user@example.com", subject: "email", message: "Test error"});
  });
  
})






  