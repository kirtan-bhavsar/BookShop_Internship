import express from "express";
const router = express.Router();
import {
  authUser,
  getUserProfile,
  registerUser,
  updateUserProfile,
  getUsers, //for 11.1
  deleteUser, //for 11.4
  // getUserById, // for 11.5
  // updateUser, // for 11.5
} from "../controllers/userController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

router.post("/login", authUser);
router
  .route("/profile")
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);
// router.route("/").post(registerUser); // in case 11.1 not working delete the below line and uncomment this
router.route("/").post(registerUser).get(protect, admin, getUsers);
router.route("/:id").delete(protect, admin, deleteUser);
// .get(protect, admin, getUserById)
// .put(protect, admin, updateUser); //in case 11.5 crashes delete from .get and .put

export default router;
