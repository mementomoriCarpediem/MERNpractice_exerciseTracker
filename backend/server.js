const express = require('express');
const cors = require('cors');
//mongoose는 서버에서 mongoDB와 연결될 수 있도록 도와줌
const mongoose = require('mongoose');

require('dotenv').config();

//서버 설치
const app = express();
const port = process.env.PORT || 5000;

// midlleware
app.use(cors());
app.use(express.json());

//uri는 database URI를 의미/mongoDB를 mongoose에 연결
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });
const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB database connection established succssfully');
});

///라우팅 관련
const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');

app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);
////

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
