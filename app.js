const LoggerErrorEvent = require('./eventEmmiter/loggerErrorEvent')
const logError = require('./infraestructure/logger')
const LoggerEmail = require('./eventEmmiter/loggerEmail')

const event = new LoggerErrorEvent();
event.add("test error")
event.add("test error")
event.add("test error")
event.add("test error")

/*
setInterval(() => {
    event.add("test error")
  }, 1000)
  */