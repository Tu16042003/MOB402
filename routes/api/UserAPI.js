var express = require('express');
var router = express.Router();

const useController = require('../../component/user/UserController');
const validation = require('../../middle/Validation');
const jwt = require('jsonwebtoken');
// /api/router/login
router.post('/login', async (req, res, next) => {
    try {
        const { email, password } = req.body;

        const user = await useController.login(email, password);
        if (user) {

            // tạo token
            const token = jwt.sign({user},'secret',{expiresIn:'1h'});
            return res.status(200).json({ result: true, user: user,token:token });
        }
        return res.status(400).json({ result: false, user: null });
    } catch (error) {
        console.log(error);
        return res.status(400).json({ result: false, user: null });
    }
})


// dang ky
router.post('/register', [validation.checkRegister], async (req, res, next) => {
    try {

        const { email, password, name } = req.body;
        const result = await useController.register(email, password, name);
        return res.status(200).json({ result });

    } catch (error) {
        console.log(error);
        return res.status(400).json({ result: false });
    }
})

module.exports = router;