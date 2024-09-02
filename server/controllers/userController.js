const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const createToken = (id) => {
  return jwt.sign({ id }, process.env.SECRET, { expiresIn: "7d" });
};

// login user
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.login(email, password);

    // create token
    const token = createToken(user._id);
    console.log("user",user.fullName);

    res.status(200).json({ email, fullName: user.fullName, token });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// signup user
const signupUser = async (req, res) => {
  const { email, password, fullName, phoneNumber, batchYear, department, rollNumber } = req.body;

  try {
    const user = await User.signup(email, password, fullName, phoneNumber, batchYear, department, rollNumber);

    // create a token
    const token = createToken(user._id);

    res.status(200).json({ email, fullName, token });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const getAllUsers = async (req, res) => {
  try {
    console.log("Entetermined")
    // Find all users in the database
    const users = await User.find();
console.log(users)
    // Return the users in the response
    res.status(200).json(users);
  } catch (err) {
    // Handle errors
    res.status(500).json({ error: err.message });
  }
};

module.exports = { loginUser, signupUser, getAllUsers };
