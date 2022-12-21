
const LoggerErrorEvent = require('../eventEmmiter/loggerErrorEvent')
const EmailSender = require('../infraestructure/emailSender')

jest.mock('../infraestructure/emailSender');

beforeEach(() => {
    EmailSender.mockClear();
  });


  test("EmailSender should been called only 1 Times", () => {

    const event = new LoggerErrorEvent();
    event.add("Test error")
    event.add("Test error next")
    event.add("Test error next")
    event.add("Test error next")
    

    const mockInstance = EmailSender.mock.instances[0];
    const mockSendEmail = mockInstance.send;
    expect(mockSendEmail).toHaveBeenCalledTimes(1);
  });