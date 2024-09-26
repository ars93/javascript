// Using Promises
function fetchData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve('Data received!'), 2000);
    });
  }
  
  fetchData().then(result => {
    console.log(result); // Data received!
  });
  

  
  // Using Async/Await
  async function asyncFetchData() {
    const result = await fetchData();
    console.log(result); // Data received!
  }
  
  asyncFetchData();
  