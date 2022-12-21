
const logError = require('../infraestructure/logger')
const LoggerEvent = require('./loggerEvent.js')
const LoggerEmail = require('./loggerEmail')


class LoggerErrorEvent {
    constructor(loggerEvent) {
        this._event = new LoggerEvent();
        this._emailSender = new LoggerEmail();

        this._event.addListener(error => logError(error))
        this._event.addListener(error => this._emailSender.send({to: "user@example.com", subject: "email", message: error}))
    }   

    add(error) {
        if (error != null){
            this._event.add(error);
        }
    }


}

module.exports = LoggerErrorEvent;
