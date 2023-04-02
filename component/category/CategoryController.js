
const categorySevice = require('./CategorySevice');
const getAllCategory = async () => {
    try {

        return await categorySevice.getAllCategory();

    } catch (error) {
        throw error;
    }
}
// const deleteProductByid = async(id)=>{
//   try {
//     return await productSevice.deleteProductByid(id);
//   } catch (error) {
//     throw error;
//   }
//   }
module.exports = { getAllCategory };

