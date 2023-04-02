var express = require('express');
var router = express.Router();
const productController = require('../../component/products/ProductController');




//lay ds sp
router.get('/',async (req,res,next)=>{

    try {
        const product = await productController.getAllProducts();
        res.status(200).json({product});
    } catch (error) {
        res.status(400).json({});
    }

});
// lay theo id
router.get('/:id',async (req,res,next)=>{

    try {
        const {id} = req.params;
        const product = await productController.getProductbyid(id);
        res.status(200).json({product});
    } catch (error) {
        res.status(400).json({});
    }

});
// them sp
router.post('/',async (req,res,next)=>{

    try {
        const { name, price, quantity, image, category } = req.body
        await productController.addProduct(name, price, quantity, image, category );
        return res.status(200).json({result:true});
    } catch (error) {
        return res.status(400).json({result:false});
    }

});
//search
//    /api/product/search?keyword=abc
router.get('/search/name',async (req,res,next)=>{

    try {
        const {keyword} = req.query;
        const product = await productController.search(keyword);
        return res.status(200).json({product});
    } catch (error) {
        return res.status(400).json({});
    }

});






module.exports = router;