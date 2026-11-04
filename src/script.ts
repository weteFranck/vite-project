interface User {
    name : string
    email : string
}

function displayUser (user: User) {
    console.log("${user.name.}, ${user.email}")
}

const user1 = {
    name : "franck",
    email: "franck@mail.com"
}
displayUser(user1);