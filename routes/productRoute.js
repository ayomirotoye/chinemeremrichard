const router = require("express").Router();
const productController = require("../controller/dbController");


router.get("/", productController.getProducts);
router.get("/:id", productController.getProductById);
router.delete("/:id", productController.removeProduct);
module.exports = router;