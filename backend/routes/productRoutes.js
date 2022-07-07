import express from "express";
const router = express.Router();
import {
  getProductById,
  getProducts,
  deleteProduct, //for 12.2
} from "../controllers/productController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

router.route("/").get(getProducts);
router.route("/:id").get(getProductById).delete(protect, admin, deleteProduct); //if 12.2 fails then delete the       .delete and deleteProduct from imported controllers

export default router;
