import { Request, Response } from "express";
import authModel from "../model/authModel";
import crypto from "crypto";
import transactionModel from "../model/transactionModel";
import { Types } from "mongoose";

export const fundWallet = async (req: Request, res: Response) => {
  try {
    const { userID } = req.params;
    const { amount } = req.body;

    const getUser = await authModel.findById(userID);
    if (getUser) {
      const ID = crypto.randomBytes(3).toString("hex");

      await authModel.findByIdAndUpdate(
        userID,
        {
          wallet: getUser.wallet + parseInt(amount),
        },
        { new: true }
      );
      const user = await transactionModel.create({
        transactionID: ID,
        amount,
        status: "credit",
        sentBy: "self",
        sentTo: "self",
        balance: getUser.wallet + parseInt(amount),
        user: getUser._id,
      });
      getUser.transactionHistory;
    }
  } catch (error) {}
};
