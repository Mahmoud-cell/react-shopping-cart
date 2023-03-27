//After Using Express framwork
const express = require("express");

const app = express();

app.get('/', (req, res)=>{
  res.send("Hello Home")
})

app.get('/about', (req, res)=>{
  res.send("Hello About")
})

app.listen(3005, ()=>{
  console.log("Server Running");
})

//كل اللي فوق دول قبل استخدام الاكسبرس جافا اسكريبت
/* const http = require("http");

const server = http.createServer((req, res) => {
  if(req.url=="/"){
    res.write("Hello Server");
    res.write(" Home Page");
    res.end();  
  }
  if(req.url=="/about"){
    res.write("Hello Server");
    res.write("About Page");
    res.end();  
  }
});

server.listen(3005, () => {
  console.log("Running...");
});
 */
/* let users = ["user1", "user2"]

module.exports = users;
 */

//كل اللي فوق دول قبل استخدام الاكسبرس جافا اسكريبت

 