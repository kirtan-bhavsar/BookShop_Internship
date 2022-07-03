import mongoose from "mongoose";
import colors from "colors";

const connectDB = async () => {
  try {
    console.log(process.env.MONGO_URI);
    const conn = await mongoose.connect(
      "mongodb+srv://kirtan_bhavsar:kirtan123@cluster0.h5dqfpz.mongodb.net/?retryWrites=true&w=majority",
      {
        useUnifiedTopology: true,
        useNewUrlParser: true,
      }
    );
    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.error(`Error: ${error.message}`.red.underline.bold);
    process.exit(1);
  }
};

export default connectDB;

/*
[{"product":"62b99abe6141fc35fd065836","name":"The One Thing ~ Gary Keller & Jay Papasan","image":"/images/thing2.jpg","price":"299","countInStock":7,"qty":1},{"product":"62b99abe6141fc35fd065833","name":"Atomic Habits ~ James Clear","image":"/images/habits.jpg","price":"189","countInStock":4,"qty":2},{"product":"62b99abe6141fc35fd065832","name":"The Subtle Art of Not Giving Fu*k ~ Mark Manson","image":"/images/art2.jpg","price":"149","countInStock":2,"qty":2}]
*/

//Check for git hub
