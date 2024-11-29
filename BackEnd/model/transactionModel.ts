import { Schema } from "mongoose";
import { model } from "mongoose";
interface iTransaction {
  sentBy: string;
  sentTo: string;
  status: string;
  amount: number;
  balance: number;
  transactionID: string;
  description: string;
}
interface iTransactionData extends iTransaction, Document {}

const transactionModel = new Schema<iTransactionData>({
  sentBy: {
    type: String,
  },
  sentTo: {
    type: String,
  },
  status: {
    type: String,
  },
  transactionID: {
    type: String,
  },
  description: {
    type: String,
  },
  amount: {
    type: Number,
  },
  balance: {
    type: Number,
  },
});

export default model<iTransactionData>("transaction", transactionModel);
