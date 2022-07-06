import express from "express";
const router = express.Router();
import {
  authUser,
  getUserProfile,
  registerUser,
  updateUserProfile,
  getUsers, //for 11.1
} from "../controllers/userController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

router.post("/login", authUser);
router
  .route("/profile")
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);
// router.route("/").post(registerUser); // in case 11.1 not working delete the below line and uncomment this
router.route("/").post(registerUser).get(protect, admin, getUsers);

export default router;
