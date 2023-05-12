const router = require("express").Router();
const { User } = require("../models/user");

router.get("/", async (req, res) => {
    try {
      const users = await User.find({}, { _id: 1, firstName: 1, lastName: 1, email: 1, money: 1 });
      res.json(users);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server Error" });
    }
  });
  

module.exports = router;
