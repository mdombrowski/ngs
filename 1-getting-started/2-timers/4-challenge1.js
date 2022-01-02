const theOneFunc = (delay) => {
    console.log('Hello after ' + delay + ' seconds');
};

for (i = 1; i < 5;  i++)
{
setTimeout(theOneFunc, i * 1000, i);
}

// Hello after 4 seconds

// Hello after 8 seconds

// You can define only ONE function
