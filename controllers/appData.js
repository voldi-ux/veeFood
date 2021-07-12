const Products = require('../models/Product')

exports.getData = async(req,resp) => {
  const products = await Products.find()
   const data = {
       "soft drink": [],
       pizza: [],
       burger: [],
       salad: [],
       wine: [],

   };

   products.forEach((product,index,array) => {
      if (data[product.category]) {
        data[product.category].push(product);
      }
   })


   return resp.json(data)

}