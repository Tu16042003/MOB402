const categoriesModel = require('../../component/category/CategoryModel');

const getAllCategory = async () => {
    try {
      return await categoriesModel.find();
    } catch (error) {
      throw error;
    }
  }
  
  //xóa sp theo id
//   const deleteProductByid = async (id) => {
//     try {
//       const index = data.findIndex(item => item._id.toString() == id.toString());
//       if (index >= 0) {
//         data.splice(index, 1);
//       }
//     } catch (error) {
//       throw error;
//     }
//   }
  
  module.exports = {getAllCategory};
  
  var data = [{
    "_id": 1,
    "name": "Crax sp."
  }, {
    "_id": 2,
    "name": "Dasypus septemcincus"
   
  }, {
    "_id": 3,
    "name": "Halcyon smyrnesis"
  
  }, {
    "_id": 4,
    "name": "Hippotragus equinus"
  }, {
    "_id": 5,
    "name": "Meles meles"
  }, {
    "_id": 6,
    "name": "Anas bahamensis"
  }, {
    "_id": 7,
    "name": "Rhea americana"
  }, {
    "_id": 8,
    "name": "Lutra canadensis"
  }, {
    "_id": 9,
    "name": "Otocyon megalotis"
  }, {
    "_id": 10,
    "name": "Sitta canadensis"
  }]