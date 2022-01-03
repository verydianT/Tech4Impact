const express = require("express");
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");
const app = express();

const users = [
  {
      username: 'terra',
      password: 'password123admin',
      role: 'admin'
  }, {
      username: 'dave',
      password: 'password123member',
      role: 'member'
  }
];

const authenticateJWT = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const token = authHeader.split(" ")[1];

    jwt.verify(token, accessTokenSecret, (err, user) => {
      if (err) {
        return res.sendStatus(403);
      }

      req.user = user;
      next();
    });
  } else {
    res.sendStatus(401);
  }
};

app.use(bodyParser.json());
const accessTokenSecret = "youraccesstokensecret";

app.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const user = users.find((u) => {
    return u.username === username && u.password === password;
  });
  if (user) {
    const accessToken = jwt.sign(
      { username: user.username, role: user.role},
      accessTokenSecret
    );
    res.json({
      accessToken,
    });
  } else {
    res.send("Username or password incorrect");
  }
});

app.listen(3000, () => {
  console.log(`Running in port 3000`);
});
