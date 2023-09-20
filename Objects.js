let person = {
    name: 'John',
    age: 25,
    profession: 'Engineer'
}

person.introduce = function(){
    console.log('Hello, I am ' + person.name + '.\nI am ' + person.age + '.\nI work as an ' + person.profession);
}
person.introduce();

let myPerson = {
    name: 'Hope',
    age: 19,
    isDeveloper: true
}

console.log('\n\nName: ' + myPerson.name);
console.log('Age: ' + myPerson.age);
console.log('Developer: ' + myPerson.isDeveloper);
