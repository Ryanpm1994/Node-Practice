const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('tutorial', (num1, num2) => {
    console.log(num1 + num2);
});

eventEmitter.emit('tutorial', 1, 2);

class Person extends EventEmitter{
    constructor(name) {
        super();
        this.newName = name;
    }

    get name() {
        return this.newName;
    }
}

let pedro = new Person('Pedro');
let christina = new Person('Christina');

pedro.on('name', ()=> {
    console.log(`my name is ${pedro.name}` );
})

christina.on('name', ()=> {
    console.log(`my name is ${christina.name}` );
})

pedro.emit('name');
christina.emit('name');