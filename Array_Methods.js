var names = ['Ransom','Junior','Bradley', 'Ryan']
//For each
console.log('My Friends:')
names.forEach(function (name) {
    console.log(name);
});



var friends = [{
    id: 1,
    name: 'Ransom',
    isDeveloper: true
    },

    {
        id: 2,
        name: 'Junior',
        isDeveloper: true
    },
    {
        id: 3,
        name: 'Bradley',
        isDeveloper: false
    },
    {
        id: 4,
        name: 'Ryan',
        isDeveloper: false
    }
]
//Filter
let developers = friends.filter(f => f.isDeveloper == true);
console.log('\nFriends who are developers:')
console.log(developers);

//map
let newArray = developers.map(n => n.name)

//Their names in capital letters
console.log("\nTheir names in capital letters:")
newArray.forEach(function(user) {
    console.log(user.toUpperCase());}
)