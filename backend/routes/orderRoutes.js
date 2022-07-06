import express from "express";
const router = express.Router();
import {
  addOrderItems,
  getOrderById,
  updateOrderToPaid,
  getMyOrders,
} from "../controllers/orderController.js";
import { protect } from "../middleware/authMiddleware.js";

router.route("/").post(protect, addOrderItems);
//for 10.7
router.route("/myorders").get(protect, getMyOrders);
//ends 10.7
router.route("/:id").get(protect, getOrderById);
//for 10.4
router.route("/:id/pay").put(protect, updateOrderToPaid);
//ends10.4

export default router;
