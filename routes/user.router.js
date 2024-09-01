const express = require('express');
const { faker } = requiere('@faker-js/faker');

const router = express.Router();

router.get('/users', (req,res)=>{
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

module.exports = router;