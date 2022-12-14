const express = require('express');
const app = express();
const hostname = express();
const port = 3000;
app.get('/', (req,res) =>{
    res.send('Hello World')

})
app.listen(port,()=>{
    console.log(`El servidor se esta ejecutando en http://${port}/`);
    console.log('1+3 ='+ (1+3));
    
})


   
