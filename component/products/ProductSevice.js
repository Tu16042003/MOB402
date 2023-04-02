const productModel = require('../products/ProductModel');

const getAllProducts = async (page, limit) => {
  try {
    return await productModel.find();
    // return true;
  } catch (error) {
    throw error;
  }
  // return false;
}

//xóa sp theo id
const deleteProductByid = async (id) => {
  try {
    // const index = data.findIndex(item => item._id.toString() == id.toString());
    // if (index >= 0) {
    //   data.splice(index, 1);
    // }

    return await productModel.findByIdAndDelete(id);
    return true;

  } catch (error) {
    throw error;
  }
  return false;
}
// thêm mới
const addProduct = async (name, price, quantity, image, category) => {
  try {
    const newProduct = {
      name, price, quantity, image, category
    }
    // data.push(newProduct);
    await productModel.create(newProduct);
    return true;

  } catch (error) {
    throw error;
  }
  return false;
}

const updateProduct = async (id, name, price, quantity, image, category) => {
  try {


    // let Product = data.find(item=>item._id.toString()==id.toString());
    let item = await productModel.findByIdAndUpdate(id);
    if (item) {
      // console.log("cccccccccccccccccccccc:",id,name, price, quantity, image, category);
      // data = data.map(item=>{
      // if (item._id.toString()==id.toString()) {
      // console.log("cccccccccccccccccccccc:",id,name, price, quantity, image, category);
      item.name = name ? name : item.name;
      item.price = price ? price : item.price;
      item.image = image ? image : item.image;
      item.category = category ? category : item.category;
      item.quantity = quantity ? quantity : item.quantity;
      await item.save();
      // }
      // return item;
      // })
      return true;
    }
  } catch (error) {
    throw error;

  }
  return false;
}
const getProductbyid = async (id) => {
  try {
    let product = await productModel.findById(id);
    return product;
  } catch (error) {
    throw error;
  }
  return null;
}

//search
const search = async (keyword) => {
  try {

    let query ={
      //gt:greater than   lt:less than
      price: {$gt:100,$lt:2000},
      // quantity:{$lte:3},
      $or: [{quantity:{$lte:3}},{quantity:{$gt:3}}],
      // name:{$regex:keyword,$options:'i'}
      // tìm đúng tên
      name: keyword,
    }
    let product = await productModel.find(query);
    return product;
  } catch (error) {
    throw error;

  }
}


module.exports = { getAllProducts, deleteProductByid, addProduct, updateProduct, getProductbyid ,search};

var data = [{
  "_id": 1,
  "name": "Crax sp.",
  "price": 854,
  "quantity": 1,
  "image": "http://dummyimage.com/241x100.png/ff4444/ffffff",
  "category": 3
}, {
  "_id": 2,
  "name": "Dasypus septemcincus",
  "price": 817,
  "quantity": 2,
  "image": "http://dummyimage.com/212x100.png/cc0000/ffffff",
  "category": 5
}, {
  "_id": 3,
  "name": "Halcyon smyrnesis",
  "price": 706,
  "quantity": 3,
  "image": "http://dummyimage.com/164x100.png/dddddd/000000",
  "category": 1
}, {
  "_id": 4,
  "name": "Hippotragus equinus",
  "price": 606,
  "quantity": 4,
  "image": "http://dummyimage.com/139x100.png/cc0000/ffffff",
  "category": 10
}, {
  "_id": 5,
  "name": "Meles meles",
  "price": 398,
  "quantity": 5,
  "image": "http://dummyimage.com/122x100.png/dddddd/000000",
  "category": 4
}, {
  "_id": 6,
  "name": "Anas bahamensis",
  "price": 626,
  "quantity": 6,
  "image": "http://dummyimage.com/153x100.png/ff4444/ffffff",
  "category": 4
}, {
  "_id": 7,
  "name": "Rhea americana",
  "price": 559,
  "quantity": 7,
  "image": "http://dummyimage.com/249x100.png/5fa2dd/ffffff",
  "category": 1
}, {
  "_id": 8,
  "name": "Lutra canadensis",
  "price": 966,
  "quantity": 8,
  "image": "http://dummyimage.com/162x100.png/cc0000/ffffff",
  "category": 1
}, {
  "_id": 9,
  "name": "Otocyon megalotis",
  "price": 659,
  "quantity": 9,
  "image": "http://dummyimage.com/100x100.png/cc0000/ffffff",
  "category": 7
}, {
  "_id": 10,
  "name": "Sitta canadensis",
  "price": 366,
  "quantity": 10,
  "image": "http://dummyimage.com/154x100.png/5fa2dd/ffffff",
  "category": 6
}]