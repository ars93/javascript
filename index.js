console.log('before');
const user = getUser(1);
console.log(user);
console.log('after');

function getUser(id) {
    setTimeout(() => {
        console.log('reading a user from database ...');    
    }, 2000);   
}