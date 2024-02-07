console.log('before');
// getUser(1, (user)=> {
//     getAddress(user, (address) => {
//         getCities(address, (city) => {
//             console.log(city);
//         });
//     });
// });

// getUser(1)
//     .then(user => getAddress(user))
//     .then(address => getCities(address))
//     .then(city => console.log(city))
//     .catch(err => console.log('error',err.message));
console.log('after');
async function displayCities() {
    const user = await getUser(1);
    const address = await getAddress(user);
    const city = await getCities(address);
    console.log(city);
        
}
displayCities();
function getUser(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('fetching user name ...');
            resolve({ id: id, userName: 'Kedar' });
        }, 2000);    
    });
       
}

function getAddress(user) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("fetching details ");
            resolve({ id: user.id, stateId: "1", stateName: "Maharashtra", address: "some areas" });
        }, 2000);
    });
}
function getCities(address) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("reading cities")
            resolve({ id: address.id, city: 'Pune' });
        }, 2000);
            
    });

    
}