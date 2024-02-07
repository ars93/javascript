const p = new Promise((resolve, reject) => {
    //async work 
    setTimeout(() => {
        // resolve(1);  // pending =>resolved, fullfiled
        reject(new Error('error')); // pending => rejected
    }, 2000);
    
    
});

p
    .then(result => console.log('result', 1))
    .catch(err => console.log('error', err.message));
     