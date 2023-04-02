var express = require('express');
var router = express.Router();

const userController = require('../component/user/UserController');
const jwt = require('jsonwebtoken');
const authen = require('../middle/Authen');
// http://localhost:3000/
/* GET users listing. */
router.get('/', function (req, res, next) {
  // trang chính
res.render('product/index')

});


//localhost:3000/users/login
router.get('/login', function (req, res, next) {
  // hiển thị trang login
  res.render('user/login');

});
//logout
router.get('/logout', function (req, res, next) {
  req.session.destroy();
  res.redirect('/login');

});


router.post('/login', async function (req, res, next) {
  // xử lý hđ login
  const { email, password } = req.body;
  const result = await userController.login(email, password);

  
  if (result) {
    const token = jwt.sign({_id:result._id},'secret');
    req.session.token = token;
    return res.redirect('/')
  } else {
    return res.redirect('/login')
  }
});


module.exports = router;
