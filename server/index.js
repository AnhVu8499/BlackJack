require("dotenv").config();
const express = require("express");
const app = express();
const ejs = require('ejs');
const mongoose = require('mongoose');
const cors = require("cors");
const connection = require("./db");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
const profileRoutes = require("./routes/profile");
const User = require("./models/user").User;
const { userSchema } = require('./models/user');
const path = require("path");



// database connection
connection();

// test
// app.set('view engine', 'ejs');

// app.get('/', async (req, res) => {
//     try {
//       const user = await User.find({});
//       res.render('index', {
//         usersList: user
//       });
//     } catch (err) {
//       console.error(err);
//       res.status(500).send('Internal Server Error');
//     }
//   });

//app.use(express.static(path.join(__dirname, "../client/build")));


///////////////////////////////////////////////////

// middlewares
app.use(express.json());
app.use(cors());

// routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/profile", profileRoutes);

// start the server
const port = process.env.PORT || 8080;
app.listen(port, console.log(`Listening on port ${port}...`));

