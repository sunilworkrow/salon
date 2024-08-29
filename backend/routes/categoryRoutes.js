const express = require("express");
const categoryController = require("../controllers/categoryController");

const router = express.Router();

router.post("/add-category", categoryController.addCategory);
router.get("/get-categorys", categoryController.getCategories);
router.delete("/delete-category/:id", categoryController.deleteCategory);
router.get("/get-category/:id", categoryController.getCategoryById);
router.put("/update-category/:id", categoryController.updateCategory);

module.exports = router;
