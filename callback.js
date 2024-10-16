function register(callback) {
    // wait3sec()
    setTimeout(() => {
        console.log("Registration successful");
    },3000)
    callback()
}

function sendMail(callback) {
    // wait3sec()
    setTimeout(() => {
        console.log("Account created successfully");
    }, 3000)
    callback()
}

function login(callback) {
    // wait3sec()
    setTimeout(() => {
        console.log("User logged in successfully");
    }, 3000)
    callback()
}

function getData(callback) {
    // wait3sec()
    setTimeout(() => {
        console.log("User data recieved successfully");
    }, 3000)
    callback()
}

function displayData(callback) {
    // wait3sec()
    setTimeout(() => {
        console.log("Data displayed successfully");
    }, 3000)
    callback()
}

function wait3sec() {
    const ms = 3000 + new Date().getTime();
    while(ms > new Date()) {

    }
}

// register()
// sendMail()
// login()
// getData()
// displayData()

// callback hell
register(
    function() {
        sendMail(
            function () {
                login(
                    function () {
                        getData(
                            function () {
                                displayData()
                            }
                        )
                    }
                )
            }
        )
    }
)