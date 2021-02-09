// // lets us create a samll note taking app 
// const fs =  require("fs") // importing the fileSystem module

// fs.writeFileSync("Notes.txt","this data is from the app.js file");   // writing into the file using the fs

// // challenge 1 - the above code replaces all the data we passed to the fucntion, we need to append the data not replace

let data =  [
    {
        name:"abc",
        role :"gunner"
    },
    {
        name:"yuri",
        role :"medic"
    },
    {
        name:"price",
        role :"engg"
    }
]

// fs.appendFileSync("Notes.txt",JSON.stringify(data))

// console.log("app js file");


// lets declare some var in this file and use in external file

let name = "abc"
let add = (a, b) =>{
    console.log("Sum is ",a+b);
}

let printNotes = ((data) =>{
    console.log(data);
})(data);

module.exports = {
    add,
};   




