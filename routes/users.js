var express = require('express');
var router = express.Router();

const userCollection = require("../model/SchemaRule");
const { sendMail } = require("../utils/send");



router.post("/send-mail", async (req, res, next) => {
  try {
    const user = new userCollection({ email: req.body.email });
    await user.save();
    console.log(req.body.email);
    console.log(user);

    await sendMail(req, res, user);
  } catch (err) {
    res.send(err.message);
  };
});


module.exports = router;
