const router = require('express').Router();
let User = require('../models/user.model');

// '/users/'경로로 들어오면 실행(GET request)
router.route('/').get((req, res) => {
  //find는 mongoDB의 method이고, Promise객체(json 형식)을 리턴
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json('Error: ' + err));
});

// '/users/add'경로로 들어오면 실행(POST request)
router.route('/add').post((req, res) => {
  const username = req.body.username;
  const newUser = new User({ username });

  newUser
    //save()를 통해, 새로운 user가 database에 저장
    .save()
    .then(() => res.json('User added!'))
    .catch((err) => res.status(400).json('Error: ' + err));
});

module.exports = router;
