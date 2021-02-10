function add(a,b, callback)
{
    setTimeout(() => {
        callback(a+b)
    }, 2000);
}

add(2, 5, (sum)=>{
    console.log(sum);
})


