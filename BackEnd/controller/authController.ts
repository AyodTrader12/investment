import { Request, Response } from "express";
import bcrypt from "bcrypt";
import crypto from "crypto";
import authModel from "../model/authModel";
import jwt from "jsonwebtoken";
import { sendCreateAccountEmail } from "../utils/email";
import cloudinary from "../utils/cloudinary";
//AUTH
export const createUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(password, salt);

    const acc = crypto.randomBytes(4).toString("hex");

    const user = await authModel.create({
      email,
      password: hashed,
      account: acc,
    });
  } catch (error) {
    return res.status(404).json({
      error: error,
    });
  }
};

export const loginUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const getUser = await authModel.findOne({ email });
    sendCreateAccountEmail().then(() => {
      console.log("running");
    });

    if (getUser) {
      const passwordCheck = await bcrypt.compare(password, getUser.password);
      if (passwordCheck) {
        const token = jwt.sign(
          { id: getUser.id },
          process.env.TWT_SECRET as string,
          { expiresIn: process.env.TWT_TIME }
        );
        return res.status(200).json({
          message: "welcome back",
          data: token,
        });
      } else {
        return res.status(200).json({
          message: "error with user password",
        });
      }
    } else {
      return res.status(201).json({
        message: "user created succesfully",
        status: 201,
      });
    }
  } catch (error) {
    return res.status(404).json({
      error: error,
      status: 404,
    });
  }
};

export const forgetUserPassword = async (req: Request, res: Response) => {
  try {
    const { email } = req.body;
    const getUser = await authModel.findOne({ email });

    if (getUser) {
      return res.status(201).json({
        message: "reset password link has been sent to your email",
        status: 201,
      });
    } else {
      return res.status(404).json({
        message: "no user found with this email",
        status: 404,
      });
    }
  } catch (error) {
    return res.status(404).json({
      error: error,
      status: 404,
    });
  }
};

export const changePassword = async (req: Request, res: Response) => {
  try {
    const { password } = req.body;
    const { userID } = req.params;
    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(password, salt);

    const user = await authModel.findByIdAndUpdate(
      userID,
      {
        password: hashed,
      },
      { new: true }
    );
    return res.status(201).json({
      message: "password updated successfully",
      data: user,
      status: 201,
    });
  } catch (error) {
    return res.status(404).json({
      error: error,
      status: 404,
    });
  }
};

//PROFILE

export const readOneUser = async (req: Request, res: Response) => {
  try {
    const { userID } = req.params;

    const user = await authModel.findById(userID);

    return res.status(201).json({
      message: "user found successfully",
      data: user,
      status: 201,
    });
  } catch (error) {
    return res.status(404).json({
      error: error,
    });
  }
};

export const updateOneUserName = async (req: Request, res: Response) => {
  try {
    const { userID } = req.params;
    const { firstName, lastName, userName } = req.body;

    const user = await authModel.findByIdAndUpdate(
      userID,
      {
        firstName,
        lastName,
        userName,
      },
      { new: true }
    );

    return res.status(201).json({
      message: "update username successfully",
      data: user,
      status: 201,
    });
  } catch (error) {
    return res.status(404).json({
      error: error,
    });
  }
};

export const updateOneUserAvatar = async (req: any, res: Response) => {
  try {
    const { userID } = req.params;
    const userData: any = await authModel.findById(userID);

    if (userData?.avatarID) {
      await cloudinary.uploader.destroy(userData.avatarID);
    }

    const { secure_url, public_id }: any = await cloudinary.uploader.upload(
      req.file?.path
    );

    const user = await authModel.findByIdAndUpdate(
      userID,
      {
        avatar: secure_url,
        avatarID: public_id,
      },
      { new: true }
    );

    return res.status(201).json({
      message: "update avatar successfully",
      data: user,
      status: 201,
    });
  } catch (error) {
    return res.status(404).json({
      error: error,
    });
  }
};
