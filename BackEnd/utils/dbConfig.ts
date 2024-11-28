import { connect } from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const dbConfig = async () => {
  try {
    await connect(process.env.MONGO_URL as string).then(() => {
      console.log("connected to mongodb💖✌💖✌");
    });
  } catch (error) {
    return error;
  }
};
