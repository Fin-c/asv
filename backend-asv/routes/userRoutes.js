const express = require("express");
const router = express.Router();
const UserModel = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const sendEmail = require("../Controller/MailingService");

//Register Route
router.post("/register", async (req, res) => {
  const { username, email, password } = req.body;
  bcrypt.genSalt(10, async (err, salt) => {
    const passwordHash = await bcrypt.hash(req.body.password, salt);

    if (!username || !email || !password)
      return res.status(400).json({ msg: "Alle Felder ausfüllen" });
    const user = await UserModel.findOne({ email });
    if (user)
      return res
        .status(400)
        .json({ msg: "Diese E-Mail-Adresse existiert bereits." });
    if (!EmailValidate(email))
      return res.status(400).json({ msg: "fehlerhafte Email-Adresse" });

    if (password.length < 6)
      return res
        .status(400)
        .json({ msg: "Das Passwort benötigt mindestens 6 Zeichen" });
    try {
      const newUser = await UserModel({
        username,
        email,
        password: passwordHash,
      });
      console.log("newuser", newUser, typeof newUser);
      const jwt = createActivationToken({ id: newUser.id });

      await newUser.save();
      res.status(200).json({ msg: "Registrierung war erfolgreich", jwt });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ msg: err.message });
    }
  });
});
function EmailValidate(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

//Login Route
router.post("/login", async (req, res) => {
  const User = await UserModel({
    email: req.body.email,
    password: req.body.password,
  });

  const email = User.email;
  const password = User.password;
  const findUser = await UserModel.findOne({ email });
  if (!findUser)
    return res
      .status(400)
      .json({ msg: "Die Email-Adresse  existiert leider nicht" });

  //PasswordMatch
  bcrypt.compare(password, findUser.password).then((isMatch) => {
    console.log(password, findUser.password);
    const refresh_token = createRefreshToken({ id: findUser._id });
    console.log("refressToken", refresh_token);
    res.cookie("refreshtoken", refresh_token, {
      httpOnly: true,
      path: "/refresh_token",
    });

    if (isMatch) {
      const jwt = createActivationToken({ id: findUser._id });
      res.status(200).json({
        jwt,
        msg: "Successful Login",
        username: findUser.username,
        email: findUser.email,
        role: findUser.role,
      });
    } else {
      return res.status(400).json({ password: "Incorrect Password" });
    }
  });

  const RefreshToken = createRefreshToken({ id: findUser._id });
  res.cookie("refreshToken", RefreshToken, {
    path: "/refreshToken",
  });
  console.log(RefreshToken);
});

router.get("/:userId", async (req, res) => {
  try {
    const user = await UserModel.findById(req.params.userId).populate(
      "projects"
    );

    res.json(user);
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
});

const createActivationToken = (payload) => {
  return jwt.sign(payload, process.env.ActivationToken, { expiresIn: "15m" });
};

const createAccessToken = (payload) => {
  return jwt.sign(payload, process.env.AccessToken, { expiresIn: "15m" });
};
const createRefreshToken = (payload) => {
  return jwt.sign(payload, process.env.RefreshToken, { expiresIn: "2d" });
};

module.exports = router;
