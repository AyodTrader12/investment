import { Router } from "express";
import {
  changePassword,
  createUser,
  forgetUserPassword,
  loginUser,
  readOneUser,
  updateOneUserAvatar,
  updateOneUserName,
} from "../controller/authController";
import { upload } from "../utils/multer";

const router: any = Router();

// AUTH
router.route("/register-account").post(createUser);
router.route("/login-account").post(loginUser);
router.route("/forget-account-password").post(forgetUserPassword);
router.route("/reset-account-password").patch(changePassword);

// PROFILE
router.route("/get-account/:userID").get(readOneUser);
router.route("/update-account-name/:userID").patch(updateOneUserName);
router
  .route("/update-account-avatar/:userID")
  .patch(upload, updateOneUserAvatar);

export default router;
