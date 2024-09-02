const express = require("express");
const { loginUser, signupUser,getAllUsers } = require("../controllers/userController");

// router
const router = express.Router();

// login route
router.post("/login", loginUser);

// sign up route
router.post("/signup", signupUser);
router.get("/getdata", getAllUsers);
module.exports = router;
