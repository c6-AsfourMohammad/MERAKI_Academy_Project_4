const usersModel = require("../models/userShema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");

//create function Login

const login = (req, res) => {
  const password = req.body.password;
  const email = req.body.email.toLowerCase();
  usersModel
    .find({ email: email })
    .then(async (result) => {
      // console.log("result : "+result);
      if (!result) {
        return res.status(404).json({ message: `The email doesn't exist` });
      }
      try {
        // console.log("before",password , result.email)
        const log =  bcrypt.compare(password, result.password);
        //console.log("log : "+log)
        if (!log) {
          return res.status(403).json({ message: " password  incorrect" });
        }
        const payload = {
          userId: result._id,
          role: result.role,
          firstName: result.firstName,
          country: result.country,
          like: result.like,
          bio: result.bio,
          //Permissions:["write","read","delete"]
        };
        console.log("payload : "+payload)
        const options = {
          expiresIn: "24h",
        };
        const token = await jwt.sign(payload, process.env.SECRET, options);
        res
          .status(200)
          .json({ message: "Valid login credentials", token: token });
      } catch (err) {
        throw new Error(err.message);
      }
    })
    .catch((err) => {
      res.status(500).json({ message: " Server Error", err: err.message });
    });
};

module.exports = { login };
