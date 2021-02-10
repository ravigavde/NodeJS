const request = require('request');

const url = "http://api.weatherstack.com/current?access_key=f244b477cddf10f5d7c56d04f4246d08&query=pune"


request({ url : url } , (error,response)=>{
   let data = JSON.parse( response.body);
   console.log(data);
});
