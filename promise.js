const promise1 = new Promise(
    (resolve,reject) => {
        console.log("first promise");
        const response = fetch("https://api.github.com/users/Atishay2580")
        resolve(response)
        // resolve("data fetched successfully")
        reject("Network Error")
    }
)

promise1
.then(
    (res) => res.json()
)
.then(
    (data) => console.log(data)
    
)
.catch(
    (error) => console.log("ERROR: ",error)
)