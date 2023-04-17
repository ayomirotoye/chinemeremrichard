const productRoutes = require("./routes/productRoute")
const cartRoutes = require('./routes/cartRoute')

module.exports = app => {
    app.use("/product", productRoutes);
    app.use("/cart", cartRoutes);
}