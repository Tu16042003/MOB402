var express = require('express');
var router = express.Router();
const productController = require('../../component/products/ProductController');

const upload = require('../../middle/multer');


//lay ds sp
router.get('/', async (req, res, next) => {

    try {
        const product = await productController.getAllProducts();
        res.status(200).json({ status: true, product });
    } catch (error) {
        res.status(400).json({ status: false, error: error });
    }

});
// lay theo id
router.get('/:id', async (req, res, next) => {

    try {
        const { id } = req.params;
        const product = await productController.getProductbyid(id);
        res.status(200).json({ product });
    } catch (error) {
        res.status(400).json({});
    }

});
// them sp
router.post('/', async (req, res, next) => {

    try {
        const { name, price, quantity, image, category } = req.body
        await productController.addProduct(name, price, quantity, image, category);
        return res.status(200).json({ result: true });
    } catch (error) {
        return res.status(400).json({ result: false });
    }

});
//search
//    /api/product/search?keyword=abc
router.get('/search/name', async (req, res, next) => {

    try {
        const { keyword } = req.query;
        const product = await productController.search(keyword);
        return res.status(200).json({ product });
    } catch (error) {
        return res.status(400).json({});
    }

});

// up load lên sever
router.post('/upload', [upload.single('image')], async (req, res, next) => {

    try {

        const { file } = req;
        if (!file) {
            return res.status(400).json({ result: false });
        } else {
            const url = `http://172.16.66.231:3000/images/${file.filename}`;
            return res.status(200).json({ result: true, url });
        }

    } catch (error) {
        return res.status(500).json({});
    }

});




module.exports = router;