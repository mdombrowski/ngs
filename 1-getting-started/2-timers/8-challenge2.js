let myCount = 0;

const myInterval = setInterval(() => {
   console.log('Hello');
   myCount = myCount + 1;
   if (myCount === 5)
   {
        clearInterval(myInterval);
   } 
}, 1000);


// Print "Hello World"
// Every second
// And stop after 5 times

// After 5 times. Print "Done" and let Node exit.
