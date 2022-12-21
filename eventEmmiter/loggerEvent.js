const EventEmitter = require('events');

class LoggerEvent extends EventEmitter {
    constructor() {
        super();
    }   

    add(error) {
       
        this.emit("errorAdded", error);

        return this;
    }

    addListener(listener) {
        this.on("errorAdded", listener);
    }
}

module.exports = LoggerEvent;