const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User")

const login = async (req,res) => {
    const {email,password} = req.body;
}

const signup =  async (req, res) => {
  const { userName, email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ msg: "User already exists" });
    }
    user = new User({
      userName,
      email,
      password: await bcrypt.hash(password, 10)
    });

    await user.save();

    const token = jwt.sign({ userId: user._id }, "your_jwt_secret", { expiresIn: "1h" });
    console.log("new user saved ")
    res.status(201).json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
};


module.exports = {
    login,
    signup,
}