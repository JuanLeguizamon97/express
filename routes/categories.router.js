const express = require('express');

const router = express.Router();

router.get('/categories/:categoryId/products/:productId', (req, res)=>{
    const {categoryId, productId} = req.params;
    res.json({
        categoryId,
        productId,
        name: 'Product2',
        price:2000
    });
});

module.exports = router;