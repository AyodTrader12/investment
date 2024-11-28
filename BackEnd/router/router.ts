import { Router } from "express";
import { upload } from "../utils/multer";
import {
  changePassword,
  createUser,
  forgetUserPassword,
  loginUser,
  readOneUser,
  updateOneUserAvatar,
  updateOneUserName,
} from "../controller/authController";

const router: any = Router();

//auth

router.route("/register-account").post(createUser);
router.route("/login-account").post(loginUser);
router.route("/forget-account-password").post(forgetUserPassword);
router.route("/reset-account-password").patch(changePassword);

//profile

router.route("/get-account/:user-ID").get(readOneUser);
router.route("/update-account-name/:user-ID").patch(updateOneUserName);
router
  .route("/update-account-avatar/:user-ID")
  .patch(upload, updateOneUserAvatar);

export default router;
