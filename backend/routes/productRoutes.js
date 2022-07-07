import express from "express";
const router = express.Router();
import {
  getProductById,
  getProducts,
  deleteProduct, //for 12.2
  createProduct, //for 12.3
  updateProduct, //for 12.3
} from "../controllers/productController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

router.route("/").get(getProducts).post(protect, admin, createProduct); //if 12.3 fails then delete .post
router
  .route("/:id")
  .get(getProductById)
  .delete(protect, admin, deleteProduct)
  .put(protect, admin, updateProduct); //if 12.2 fails then delete the       .delete and deleteProduct from imported controllers
// if 12.3 fails then delete .put
export default router;
