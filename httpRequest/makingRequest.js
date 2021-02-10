// make sure that httpsServer file is running

const https = require('http')

// const options = {
//     hostname: 'localhost',
//   port: 3300,
//   path: '/',
//   method: 'GET'
//   }

//   const req = https.request(options, res => {
//     console.log(`statusCode: ${res.statusCode}`)
  
//     res.on('data', data => {
//       process.stdout.write(data)
//     })
//   })

//   req.on('error', error => {
//     console.error(error)
//   })
  
//   req.end()

const url = 'http://www.google.com'

let request = https.request(url,(response)=>{
    let data = ""
    response.on("data",(chunk)=>{
        data += chunk
    });
    response.on("end",()=>{
        console.log(data);
    })
})

request.on("error", (error) =>{
    console.log(error);
})
request.end();