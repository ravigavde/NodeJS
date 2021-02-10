// in many case we want to start an event or we want to trigger an action on an event, so we use events in NodeJS

// "Emitters" emit named events( eg ."start") that cause Function objects "listeners" to be called.

// Event Emitter import from core module

const EventEmitter = require('events');

// create an instance of eventEmitter
const eventEmitter = new EventEmitter();

//All objects that emit events are instances of the EventEmitter class,These objects expose an eventEmitter.on() that allows to register one or more function 

eventEmitter.on('start', (number) => {
    console.log(`started the start the event ${number} `);
}); 


//when the emit function is called all the functions registered to that function is called synchronus
eventEmitter.emit('start',12)

//Asynchronous vs. synchronous

eventEmitter.on("end", ()=>{
    console.log("In the end event block");
    setImmediate(()=>{
        console.log("called in async fucntion");
    })
    console.log("exiting the end event block");
})

console.log("start of end event");
eventEmitter.emit("end")
console.log("end of end event");

// so if we look towards the sequence in which the "called in async block"  gets called we can say it is asynnchronusly called

// Once - if we want our event to be called only once
let count = 0;

eventEmitter.once("one",()=>{
    console.log("Called the event one",++count)
});

eventEmitter.emit("one") // gets called for this triggering only

eventEmitter.emit("one") // ignroed this tirgger


// error events

eventEmitter.on('error',(error)=>{
    console.error(error.message);
})

eventEmitter.emit('error',new Error("intentionally thrown error"))

// getting the total events registered to an eventEmitter instance

let EventNames = eventEmitter.eventNames();

console.log(EventNames);