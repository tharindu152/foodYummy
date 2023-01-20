import mongoose from 'mongoose';
import colors from 'colors';

const connectDB = async () => {
  try {
    const dbName = 'RecipeDB';
    const conn = await mongoose.connect(`${process.env.MONGO_URI}${dbName}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      //   useFindAndModify: true,
    });
    console.log(`Connected to db: ${conn.connection.host}`.green.underline);
  } catch (error) {
    console.log(`Error from db: ${error.message}`.red.bold);
    process.exit();
  }
};

export default connectDB;
