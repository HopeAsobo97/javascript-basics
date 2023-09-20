//Function
var name = 'Hope';
function greet() {
    var name = 'Hope';
    console.log('Hello, ' + name);
}
console.log('Greet with normal function:')
greet();

//Arrow Function
let greetWithArrowFunction = (name) => {
    console.log('Hello, ' + name);
}

console.log('Greet with arrow function:');
greetWithArrowFunction(name);