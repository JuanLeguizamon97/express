const express = require('express');
const { faker } = require('@faker-js/faker')

const app = express();
const port = 3000;


app.get('/', (req, res)=>{
    res.send('Hola mi server en express');
});

app.get('/nuevaruta', (req, res)=>{
    res.send('Hola soy una nueva ruta');
});

app.get('/categories/:categoryId/products/:productId', (req, res)=>{
    const {categoryId, productId} = req.params;
    res.json({
        categoryId,
        productId,
        name: 'Product2',
        price:2000
    });
});

app.get('/users', (req,res)=>{
    const {limit, offset} = req.query;
    if(limit && offset){
        res.json({
            limit,
            offset
        });
    }else{
        res.send('No hat parametros');
    }
});

app.listen(port, ()=>{
    console.log('Mi port '+ port);
});