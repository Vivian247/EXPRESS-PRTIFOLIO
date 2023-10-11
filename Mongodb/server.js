const express = require('express')
const mongoose = require('mongoose')
const products = require('./models/productModels')
const app = express()

app.use(express.json())

//route
app.get('/', (req,res)=> {
    res.send('hello mongodp')
})

// GET all products
app.get('/product', async(req, res)=> {
        try{
        const  product = await products.find({});
        res.status(200).json(product)
    }catch (error){
        console.log(error.message)
       res.status(500).json({message: error.message})
    }
});

//GET BY ID
app.get('/product/:id', async(req, res)=> {
    try{
        const {id} = req.params;
    const  product = await products.findById(id)
    
    res.status(200).json(product);
}catch (error){
    console.log(error.message)
   res.status(500).json({message: error.message})
}
});

// POST (create) a new product
app.post('/product', async(req, res)=> {
    // console.log(req.body);
    // res.send(req.body)
    try{
        const  product = await products.create(req.body)
        res.status(200).json(product)
    }catch (error){
        console.log(error.message)
       res.status(500).json({message: error.message})
    }
});

//UPDATE PRODUCT BY ID
app.put('/product/:id', async(req, res)=> {
    try{
        const {id} = req.params;
    const  product = await products.findByIdAndUpdate(id, req.body)
    //what if we can not find the product in the database
    if(!product){
        return res.status(404).json({message: `Product with "${id}" does not exist`})
    }
        res.status(200).json(product);

}catch (error){
    console.log(error.message)
   res.status(500).json({message: error.message})
}
});

//DELETE PRODUCT BY ID
app.delete('/product/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const product = await products.findByIdAndRemove(id);

        // Check if the product exists
        if (!product) {
            return res.status(404).json({ message: `Product with ID "${id}" does not exist` });
        }

        res.status(200).json({ message: 'Product deleted successfully' });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: error.message });
    }
});



mongoose.connect('mongodb+srv://dbuser:fA3hb7Dd68yBhC0s@cluster0.hqx4l9d.mongodb.net/DressStore?retryWrites=true&w=majority')
.then(()=> {
    app.listen(3000, ()=> {
        console.log('MONGODB is running on port 3000')
    })
    console.log('CONNECTED SUSCESSFULLY')
}).catch((error)=>{
    console.log(error)
})