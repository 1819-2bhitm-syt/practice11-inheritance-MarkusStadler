const Person = require("./Person");
const Teacher = require("./Teacher");
const Student = require("./Student");

const p = new Person("Richard", "Roe", "male", ["reading"]);
p.sayHello();
p.tellHobbies();

console.log(); //Absatz

const t = new Teacher("Jane", "Doe", "female", [], "programming");
t.sayHello();
t.tellHobbies();

console.log(); //Absatz

const s = new Student("John", "Smith", "male", ["cooking", "swimming", "travelling"], "history");
s.sayHello();
s.tellHobbies();