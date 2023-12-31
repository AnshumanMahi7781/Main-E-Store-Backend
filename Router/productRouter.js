const route = require("express").Router();
const { productCollection } = require("../model/productModel");


route.get("/product", async (request, response) => {
    let items = await productCollection.find();
    return response.send(items);
});

route.get("/product/:category", async (request, response) => {
    const requestCategory = request.params.category;
    const currentData = await productCollection.find({ category: { $eq: requestCategory } });
    response.send(currentData)
});

route.get("/products/:id", async (request, response) => {
    const productID = request.params.id;
    const singleProduct = await productCollection.find({ id: { $eq: productID } });
    response.send(singleProduct);
});



module.exports = route