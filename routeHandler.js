const productRoutes = require("./routes/route")

module.exports = app => {
    app.use("/product", productRoutes);
}