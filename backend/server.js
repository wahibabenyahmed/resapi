const express =require('express');
const connectDb = require('./config/connectDb');

const app = express();
// var bodyParser =require('body-parser')
const cors=require('cors');
const ProductRouter = require('./routes/Product');
const PORT= 5005;
app.use(cors())
app.use(express.json());  
app.use('/api/user',ProductRouter);

connectDb()




//run  server
app.listen(PORT,(err)=>{
err? console.error(err):console.log(`server running with success in:${PORT}`)

})