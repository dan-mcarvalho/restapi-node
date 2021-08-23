
const express= require("express");
const pool = require("../config/db");
const bcrypt = require("bcrypt");
const {body, validationResult} = require("express-validator");
const router = express.Router();




router.post("/register", [
    body("username").isLength({min:3}).withMessage("Name is not valid"),
    body("email").isEmail().withMessage("Email is not valid"),
    body("password").isLength({min:6}).withMessage("The password must be at least 6 characters")
  ], async (req, res) => {
    try {
      const errors= validationResult(req);
      if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
      }
      else{
      const { username, email, password } = req.body;
      const encryptPass= await bcrypt.hash(password,10);
      console.log(encryptPass);
      const newUser= await pool.query(
          'INSERT INTO users (username,email,password) VALUES ($1,$2,$3) RETURNING *', [username, email, encryptPass]);   
          res.json(newUser.rows[0]).status(200);
        }
      
    } catch (error) {
      res.status(400).send(`Registration failed`);
    }
  });
  

  module.exports = app => app.use('/user', router);