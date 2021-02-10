function one(value){
    return new Promise((resolve,reject)=>{
        if(value === 1)
        {
            setTimeout(() => {
                resolve("The value is received correctly one");
            }, 2000);
        }
        else
        {
            setTimeout(() => {
                reject("The value passed is not correct one");
            }, 2000);
        }
    });
}

function two(value){
    return new Promise((resolve,reject)=>{
        if(value === 2)
        {
            setTimeout(() => {
                resolve("The value is received correctly two");
            }, 1000);
        }
        else
        {
            setTimeout(() => {
                reject("The value passed is not correct two");
            }, 1000);
        }
    });
}

console.log("all function waits for all promise to get resolved");
Promise.all([ two(2), one(1) ]).then((message) =>{
    console.log("all method",message);
}).catch((error) =>{
    console.log("all method",error);
})


console.log("race method sees which promise gets first resolved");
Promise.race([ two(2), one(1) ]).then((message) =>{
    console.log("race method",message);
}).catch((error) =>{
    console.log("race method",error);
})

async function timePass(value){
    value = await one(1) ;
   console.log(value);
}

timePass();



