const personName = "Vinay";
const personAge = 20;
const personSchool = "Vikas";


// const personName = "Reena";

// const a = 10;

// a = 12;

// console.log('a', a);

// Object
// person = 1026
// {} = 1028
const person  = {
    name: "Vinay",
    age: 20,
    school: "Vikas",
    isStudent: true,
    address: {
        city: "Hyderabad",
        state: "Telangana",
    },
    getName: function(){
        return this.name;
    },
    getAge: function () {
        return this.age;
    },
    getSchool: function () {
        return this.school;
    },
    getAddress: function () {
        return this.address;
    }
}
person.height = "5.6";
person.name = "Vivek";

const address = person.getAddress();

console.log(person);

