// Objects in JavaScript are collections of key/value pairs.

console.log("\n[+++] Create objects = Object.create()")
// Initialize an object with properties and methods
const job = {
    position: 'cashier',
    type: 'hourly',
    isAvailable: true,
    showDetails() {
        const accepting = this.isAvailable ? 'is accepting applications' : "is not currently accepting applications";

        console.log(`The ${this.position} position is ${this.type} and ${accepting}.`);
    }
};

// Use Object.create to pass properties
const barista = Object.create(job);
barista.position = "barista";
barista.showDetails();
// OutPut:
// The barista position is hourly and is accepting applications.

console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++")
console.log("\n[+++] Get all object keys = Object.keys()")
// Initialize an object
const employees = {
    boss: 'Michael',
    secretary: 'Pam',
    sales: 'Jim',
    accountant: 'Oscar'
};

// Get the keys of the object
const keys = Object.keys(employees);

console.log(keys);

// Output
// ["boss", "secretary", "sales", "accountant"]

// Iterate through the keys
Object.keys(employees).forEach(key => {
    let value = employees[key];

     console.log(`${key}: ${value}`);
});

const length = Object.keys(employees).length;

console.log(length);
console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++")

console.log("\n[+++] Get all object values = Object.values()")
// Initialize an object
const session = {
    id: 1,
    time: `26-July-2018`,
    device: 'mobile',
    browser: 'Chrome'
};

// Get all values of the object
const values = Object.values(session);

console.log(values);
// Output
// [1, "26-July-2018", "mobile", "Chrome"]

console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++")
console.log("\n[+++] Get all object entries = Object.entries()")
// Initialize an object
const operatingSystem = {
    name: 'Ubuntu',
    version: 18.04,
    license: 'Open Source'
};

// Get the object key/value pairs
const entries = Object.entries(operatingSystem);

console.log(entries);

// Output
// [
//     ["name", "Ubuntu"]
//     ["version", 18.04]
//     ["license", "Open Source"]
// ]

// Loop through the results
entries.forEach(entry => {
    let key = entry[0];
    let value = entry[1];

    console.log(`${key}: ${value}`);
});

console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++")
console.log("\n[+++] object assign = Object.assign()")
// Initialize an object
const name1 = {
    firstName: 'Philip',
    lastName: 'Fry'
};

// Initialize another object
const details = {
    job: 'Delivery Boy',
    employer: 'Planet Express'
};

// Merge the objects
const character = Object.assign(name1, details);
// Note:-- One thing to point out about Object.assign is that now character is really a pointer to name.
console.log("name1",name1)
console.log("character",character);

// Output
// {firstName: "Philip", lastName: "Fry", job: "Delivery Boy", employer: "Planet Express"}

console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++")
console.log("\n[+++] object merge with ...")
// Initialize an object
const name2 = {
    firstName: 'Philip',
    lastName: 'Fry'
};

// Initialize another object
const details1 = {
    job: 'Delivery Boy',
    employer: 'Planet Express'
};

// Merge the object with the spread operator
const character1 = {...name2, ...details1}

console.log("details1",details1)
console.log("character1",character1);
// Output
// {firstName: "Philip", lastName: "Fry", job: "Delivery Boy", employer: "Planet Express"}

console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++")
console.log("\n[+++] freeze object = Object.freeze()")
// Initialize an object
// Object.freeze() prevents modification to properties and values of an object, and prevents properties from being added or removed from an object.
const user1 = {
    username: 'AzureDiamond',
    password: 'hunter2'
};

// Freeze the object
const newUser1 = Object.freeze(user1);

newUser1.password = '*******';
newUser1.active = true;

console.log(newUser1);

// Output
// {username: "AzureDiamond", password: "hunter2"}
console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++")
console.log("\n[+++] seal object  = Object.seal()")
// Object.seal() prevents new properties from being added to an object, but allows the modification of existing properties. 
// Initialize an object
const user = {
    username: 'AzureDiamond',
    password: 'hunter2'
};

// Seal the object
const newUser = Object.seal(user);

newUser.password = '*******';
newUser.active = true;

console.log(newUser);
// Output
// {username: "AzureDiamond", password: "*******"}
console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++")

// Two variables, two distinct objects with the same properties
console.log("\n[+++] Two variables, two distinct objects with the same properties")
var fruit = {name: 'apple'};
var fruitbear = {name: 'apple'};

console.log("fruit == fruitbear ",fruit == fruitbear) // return false
console.log("fruit === fruitbear ",fruit === fruitbear)// return false
console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++")

console.log("\n[+++] Two variables, a single object")
var fruit = {name: 'apple'};
var fruitbear = fruit;  // assign fruit object reference to fruitbear

// here fruit and fruitbear are pointing to same object
console.log("fruit == fruitbear ",fruit == fruitbear) // return true
console.log("fruit === fruitbear ",fruit === fruitbear)// return true
console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++")

console.log("\n[+++] Change a property = Object.defineProperty")
var person = {
    firstName: "John",
    lastName : "Doe",
    language : "EN" 
};
// Change a property
Object.defineProperty(person, "language", {value : "NO"});
// This example makes language not enumerable:
// Object.defineProperty(person, "language", {enumerable:false});
// Object.defineProperty(person, "year", {value:"2008"})
console.log(person)
console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++")

console.log("\n[+++] getOwnPropertyNames = Object.getOwnPropertyNames")
console.log(Object.getOwnPropertyNames(person))
console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++")


console.log("\n[+++] object get = Object.defineProperty Get")
var obj = {counter:0};

// Define setters
Object.defineProperty(obj, "reset", {
    get : function () {
        this.counter = 0;
    }
});
Object.defineProperty(obj, "increment", {
    get : function () {
        this.counter++;
        console.log("increment=this.counter++ ==",this.counter)
    }
});
Object.defineProperty(obj, "decrement", {
    get : function () {this.counter--; console.log("decrement= this.counter-- == ",this.counter)}
});
Object.defineProperty(obj, "add", {
    set : function (value) {this.counter += value;console.log("Add= this.counter += value == ",this.counter)}
});
Object.defineProperty(obj, "subtract", {
    set : function (i) {this.counter += i;console.log("subtract=this.counter += i == ",this.counter)}
});

obj.reset;
obj.add = 5;
obj.subtract = 1;
obj.increment;
obj.decrement;

console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++")

// Links
// https://www.w3schools.com/js/js_object_es5.asp
// https://www.digitalocean.com/community/tutorials/how-to-use-object-methods-in-javascript