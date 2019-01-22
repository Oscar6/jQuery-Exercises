var ourPromise = new Promise((resolve, reject)=> {

    // setTimeout(()=> {
    //     resolve('completed')
    // }, 3000)

    setTimeout(()=> {
        resolve('error')
    }, 3000)
})


ourPromise.then((data)=> {
    console.log(data);
})

ourPromise.catch((data)=> {
    console.log('Done:', data);
})