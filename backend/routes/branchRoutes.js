const express = require("express");
const branchController =  require("../controllers/branchController");

const router = express.Router();

router.post("/add-branch", branchController.addBranch);
router.get("/get-branches", branchController.getbranches);
router.delete("/delete-branch/:id", branchController.deleteBranch);

module.exports = router;