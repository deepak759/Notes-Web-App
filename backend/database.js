

const mongoose = require('mongoose');

// const mongoURI =
//   "mongodb://localhost:27017/inotebooks?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false";
const mongoURI="mongodb://localhost:27017/inotebook?readPreference=primary&appname=MongoDB%20Compass&ssl=false"

const connectToMongo = () => {
  mongoose.connect(mongoURI, () => {
    console.log("Connected to Mongo Successfully");
  });
};

module.exports = connectToMongo;