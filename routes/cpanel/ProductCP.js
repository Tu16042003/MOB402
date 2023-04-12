

var express = require('express');
var router = express.Router();
const productController = require('../../component/products/ProductController');
const categoryController = require('../../component/category/CategoryController');
const multer = require('../../middle/multer');
const Config = require('../../config/Config')
// http://localhost:3000/cpanel/product
router.get('/', async (req, res, next) => {

    const products = await productController.getAllProducts();
    res.render('product/tables', { products });
});

//http://localhost:3000/cpanel/product
router.get('/:id/delete', async (req, res, next) => {
    try {
        const { id } = req.params;
        await productController.deleteProductByid(id);
        return res.json({ status: true })
    } catch (error) {
        // console.log('e:', error)
        return res.json({ status: false })

    }

});
// trang new http://localhost:3000/cpanel/product/new
router.get('/new', async (req, res, next) => {
    const category = await categoryController.getAllCategory();
    res.render('product/new', { category });
});

router.post('/new', [multer.single('image'),], async (req, res, next) => {
    try {

        let { body, file } = req;
        if (file) {
            let image = `${Config.IP}/images/${file.filename}`;
            // let image = 'gs://tuabc-38208.appspot.com'
            body = { ...body, image: image }
        }
        let { name, price,content, quantity, image, category } = body;

        await productController.addProduct(name, price,content, quantity, image, category);
        return res.redirect('/cpanel/product')
    } catch (error) {

    }
});
//cập nhật http://localhost:3000/cpanel/product/:id/edit
router.get('/:id/edit', async (req, res, next) => {
    try {
        const { id } = req.params;
        let product = await productController.getProductbyid(id);
        let category = await categoryController.getAllCategory();
        for (let index = 0; index < category.length; index++) {
            const element = category[index];
            category[index].selected = false;
            // console.log(product,category);
            if (element._id.toString() == product.category.toString()) {
                category[index].selected = true;
            }
        }
        res.render('product/update', { product, category })
    } catch (error) {

    }

});

router.post('/edit/:id/edit', [multer.single('image'),], async (req, res, next) => {
    try {
        let {id} = req.params;
        let { body, file } = req;
        if (file) {
            let image = `${Config.IP}/images/${file.filename}`;
            body = { ...body, image: image }
        }
        let { name, price,content, quantity, image, category } = body;
        console.log(id,name, price,content, quantity, image, category);
        await productController.updateProduct(id,name, price,content, quantity, image, category);
        return res.redirect('/cpanel/product')
    } catch (error) {

    }
});


module.exports = router;