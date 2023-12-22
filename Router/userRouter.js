const route = require("express").Router();
const { userLogin } = require("../controller/userLogin");
const {userRegister} = require("../controller/userRegister")
const { cartCollection } = require("../model/cartModel");



route.post("/register", userRegister)
route.post("/login", userLogin);
route.get("/cartItems/:userEmail", async(request, response)=>{
    const {userEmail} = request.params
    const mongooseResponse = await cartCollection.find({userEmail : {$eq : userEmail}})
    return response.send(mongooseResponse)

})
module.exports = route