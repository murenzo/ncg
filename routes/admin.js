const path = require('path');

const express = require('express');

const rootDir = require('./../utils/path');

const router = express.Router();

router.get('/add-product', (req, res) => {
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'))
});

router.post('/add-product', (req, res) => {
    const { message } = req.body;
    console.log(message);
    res.redirect('/');
})

module.exports = router;