const express = require('express');
const routerApi = require('./routes')

const app = express();
const port = 3000;

routerApi(app);

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