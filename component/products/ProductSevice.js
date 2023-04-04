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
const addProduct = async (name, price,content, quantity, image, category) => {
  try {
    const newProduct = {
      name, price,content, quantity, image, category
    }
    // data.push(newProduct);
    await productModel.create(newProduct);
    return true;

  } catch (error) {
    throw error;
  }
  return false;
}

const updateProduct = async (id, name, price,content, quantity, image, category) => {
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
      item.content = content? content:item.content;
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



const getAllProducts2 = async (page, limit) => {
  try {
    let product =  await productModel.find(
      {},'name price' // lấy name và price
    ).sort({price:-1}) // sắp xếp tăng giảm
    ;
    return product;
  } catch (error) {
    throw error;
  }
  return [];
}


module.exports = { getAllProducts, deleteProductByid, addProduct, updateProduct, getProductbyid ,search,getAllProducts2};
