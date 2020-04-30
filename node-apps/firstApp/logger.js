const EventEmitter = require('events')

var url = 'http://mylogger.io'
class Logger extends EventEmitter{
    log(message){
        console.log(message)
        // raise an event
        this.emit('111',{id:1,url:'url1'})
    
    }
}


module.exports = Logger;