console.log('before');
getUser(1, (user)=> { 
    console.log(user);
});
console.log('after');

function getUser(id,callback) {
    setTimeout(() => {
        console.log('operation ongoing ...');
        callback({ id: id, userName: 'Kedar' });
    }, 2000);   
}