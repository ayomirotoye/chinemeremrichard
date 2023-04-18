const Items = require("../model/model");
exports.products = async () => {
    const products = await Items.find();
    return products;
};
exports.productById = async id => {
    const product = await Items.findById(id);
    return product;
}
exports.createProduct = async payload => {
    const newProduct = await Items.create(payload);
    return newProduct
}
exports.removeProduct = async id => {
    const product = await Items.findByIdAndRemove(id);
    return product
}