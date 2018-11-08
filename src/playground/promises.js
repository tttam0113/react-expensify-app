const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('this is my resolved data');
    }, 1500);
});

promise
    .then(data => {
        console.log(data);
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('this is may other promise');
            }, 5000);
        })
    }).then((str) => {
        console.log('does this run?', str)
    })
    .catch(error => {
        console.log('error: ', error);
    });

// promise.then(
//     data => {
//         console.log(data);
//     },
//     error => {
//         console.log('error: ', error);
//     }
// );
