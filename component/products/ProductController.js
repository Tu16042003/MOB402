

const productSevice = require('./ProductSevice');

const getAllProducts = async () => {
  try {

    return await productSevice.getAllProducts();

  } catch (error) {
    throw error;
  }
}
const deleteProductByid = async (id) => {
  try {
    return await productSevice.deleteProductByid(id);
  } catch (error) {
    throw error;
  }
}


const addProduct = async (name, price, quantity, image, category) => {
  try {
    return await productSevice.addProduct(name, price, quantity, image, category);
  } catch (error) {
    throw error;
  }
}
const updateProduct = async (id,name, price, quantity, image, category) => {
  try {
    return await productSevice.updateProduct(id,name, price, quantity, image, category);
  } catch (error) {
    throw error;
  }
}

const getProductbyid = async (id) => {
  try {
    return await productSevice.getProductbyid(id);
  } catch (error) {
    throw error;
  }
}

const search = async (keyword) => {
  try {
    return await productSevice.search(keyword);

  } catch (error) {
    throw error;
  }
}
module.exports = { getAllProducts, deleteProductByid, addProduct ,updateProduct,getProductbyid,search};
