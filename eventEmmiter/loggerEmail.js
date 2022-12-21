const moment = require('moment'); 
const EmailSender = require('../infraestructure/emailSender')

class LoggerEmail  {
        constructor() {
            this._lastEmail = null;
            this._secondsToSendEmail = 60;
            this._emailSender = new EmailSender();
        }

    get isFirstEmail() { 
        return this._lastEmail == null;  
    }

    send(sender) {

        if (this.shouldSendEmail()) {
            console.log(`Error email added ${sender.message}`)
            this._emailSender.send(sender);
            this._lastEmail  = moment(new Date());

            return true;
        }
        
        return false;
    }

    shouldSendEmail() {

        if (this.isFirstEmail){
            return true;
        }

        const end = moment(new Date());
        const seconds = end.diff(this._lastEmail, 'seconds');
        console.log(`Duration last email ${seconds}`);

        return seconds > this._secondsToSendEmail;
    }
}

module.exports = LoggerEmail;