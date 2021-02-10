const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//mongoDB가 no-sql DB 이므로, 어떤 자료형도 에러없이 입력되므로, 이를 보완하기 위해서 mongoose에서 도입한 개념이 schema
const exerciseSchema = new Schema(
  {
    username: { type: String, required: true },
    description: { type: String, required: true },
    duration: { type: Number, required: true },
    date: { type: Date, required: true },
  },
  {
    timestamps: true,
  }
);

const Exercise = mongoose.model('Exercise', exerciseSchema);

module.exports = Exercise;
