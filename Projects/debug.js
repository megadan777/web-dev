 const users = [
    { name: 'Kyle', age: 24 },
    { name: 'Simon', age: 24 },
    { name: 'Wendy', age: 34 },   
    { name: 'Sally', age: 25 },
    { name: 'Phil', age: 35 },
    { name: 'Mark', age: 28 },
    { name: 'Colin', age: 45 }
 ]

users.forEach(user => {
    printUser(user)
})

function printUser(user) {
    if (user.age !=null) {
console.log('User', ${user.name} 'will be', ${user.age + 5} 'years old in 5 years')
    } else {
        console.log('User is called ${user.name}')
    }
}