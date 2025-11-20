function getUser (){
return new Promise((resolve) => {
    setTimeout(() => {
        resolve({
            username: "armansyabni",
            email: "armansyabni@gmail"
        });
    }
    , 2000);
    });
    }
    
    getUser()
    .then((user) => console.log(user))
    .catch((error) => console.log(error));



async function showUser() {
    const user = await getUser("1", "2", "3", "4", "5");
    console.log(`user: ${user}`);
}
showUser