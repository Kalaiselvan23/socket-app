const User = require("../modals/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const signup = async (req, res, next) => {
  console.log("hello signup");
  try {
    // const salt=bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(
      req.body.password,
      bcrypt.genSaltSync(12),
      null,
      function (err, hash) {
        if (err) return callback(err);
        callback(null, hash);
      }
    );
    const newUser = new User({
      ...req.body,
      password: hash,
    });

    await newUser
      .save()
      .then(() => {
        console.log("User saved");
      })
      .catch(() => {
        console.log("user not saved");
      });
    res.status(200).json(newUser);
  } catch (err) {
    res.status(500).json({ msg: "Unable to add user" });
  }
};
const login = async (req, res) => {
  try {
    console.log(req.body.username);
    const findUser = await User.findOne({
      username: req.body.username,
    });
    console.log(findUser);
    if (!findUser) {
      console.log("user not found");
      res.status(404).json({ msg: "User not found" });
    } else {
      console.log("Password:", req.body.password);
      const checkPassword =function(password, callback) {
  
        bcrypt.compare(password,findUser.password, function(err, match) {
        
            if (err) return callback(err);
            callback(null, match);
        });
    }
      console.log("Check password status:" + checkPassword);
      if (!checkPassword) {
        res.status(500).json({ msg: "invalid password" });
      } else {
        console.log(findUser);
        console.log("valid credentials")
        res.status(200).json(findUser);
      }
    }
  } catch (err) {
    res.status(500).json({ msg: "internal error" });
  }
};

module.exports = { login, signup };
