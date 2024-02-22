import express from 'express'
import cors from 'cors'
import sequelize from '../database/database.js';
import Product from '../models/product.js';

const app = express()


sequelize.sync({ force: false }).then(() => {
    console.log("Products table created");
}).catch(error => {
    console.error("Error creating the products table:", error);
});

app.use(express.json());
app.use(cors())

app.get('/',(req,res)=>{
res.json({
    message:'say hello to express'
})
})
app.post('/',(req,res)=>{
    console.log(req.body);
    const {message} =req.body 
    console.log(message);
    res.json({
        message:message
    })
})
app.listen(3002,()=>{
   console.log('app is runing on port 3002');
})