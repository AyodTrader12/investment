import { model, Schema } from "mongoose";

interface iAuth {
  //profile
  userName: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  avatar: string;
  avatarID: string;
  accountNumber: string;

  // investments
  wallet: number;
  transactionHistory: [];
}

interface iAuthData extends iAuth, Document {}

const authModel = new Schema<iAuthData>(
  {
    userName: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
      required: true,
      lowercase: true,
    },
    password: {
      type: String,
    },
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    avatar: {
      type: String,
    },
    avatarID: {
      type: String,
    },
    accountNumber: {
      type: String,
    },
  },
  { timestamps: true }
);
export default model<iAuthData>("authData", authModel);
