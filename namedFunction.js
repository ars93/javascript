console.log('before');
getUser(1, diaplayAddress);
console.log('after');
function diaplayAddress(user) {
    getAddress(user, displayAddress);
}
function displayCities(city) {
        console.log(city);
}
function displayAddress(address) {
        getCities(address, displayCities);
}

function getUser(id,callback) {
    setTimeout(() => {
        console.log('fetching user name ...');
        callback({ id: id, userName: 'Kedar' });
    }, 2000);   
}

function getAddress(user,callback) {
    setTimeout(() => {
        console.log("fetching details ");
        callback({ id: user.id,stateId:"1",stateName:"Maharashtra", address: "some areas" });
    }, 2000);
}
function getCities(address, callback) {
    setTimeout(() => {
        console.log("reading cities")
        callback({ id: address.id, city: 'Pune' });
    }, 2000);
    
}