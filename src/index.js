const express = require("express");
const app = express();
const {body, validationResult} = require("express-validator");
const pool = require("./config/db");
const bcrypt = require("bcrypt");

app.use(express.json());

//Routes

// //create user register
// app.post("/user/register", [
//   body("username").isLength({min:3}).withMessage("Name is not valid"),
//   body("email").isEmail().withMessage("Email is not valid"),
//   body("password").isLength({min:6}).withMessage("The password must be at least 6 characters")
// ], async (req, res) => {
//   try {
//     const errors= validationResult(req);
//     if(!errors.isEmpty()){
//       return res.status(400).json({errors: errors.array()});
//     }
//     else{
//     const { username, email, password } = req.body;
//     const newUser= await pool.query(
//         'INSERT INTO users (username,email,password) VALUES ($1,$2,$3) RETURNING *', [username, email, password]);   
//         res.json(newUser.rows[0]).status(200);
//       }
    
//   } catch (error) {
//     res.status(400).send(`Registration failed`);
//   }
// });


require('./controllers/UserController')(app);


app.listen(3000, () => {
  console.log("listen 3000");
});
