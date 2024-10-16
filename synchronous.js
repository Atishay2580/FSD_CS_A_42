function register() {
    wait3sec()
    console.log("Registration successful");
}

function sendMail() {
    wait3sec()
    console.log("Account created successfully");
}

function login() {
    wait3sec()
    console.log("User logged in successfully");
}

function getData() {
    wait3sec()
    console.log("User data recieved successfully");
}

function displayData() {
    wait3sec()
    console.log("Data displayed successfully");
}

function wait3sec() {
    const ms = 3000 + new Date().getTime();
    while(ms > new Date()) {

    }
}

register()
sendMail()
login()
getData()
displayData()