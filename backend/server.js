import express from "express";
import path from "path";
import dotenv from "dotenv";
import colors from "colors";
import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import uploadRoutes from "./routes/uploadRoutes.js"; //for 12.7
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

dotenv.config();

connectDB();

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
app.use("/api/orders", orderRoutes);
// for 12.7
app.use("/api/uploads", uploadRoutes);
//ends 12.7
// for 10.6
app.get("/api/config/paypal", (req, res) => {
  res.send(
    "AfzdgJ1lLi3m54PmkwIcTpjOsUxm-qBa9Ng2pOXZ3h4KdPDUrNK9MP6CfbX9yt0AMSAQuKcJrB51_K1x"
  );
});

//for 12.7
const __dirname = path.resolve();
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));
//ends 12.7

// ends 10.6
app.use(notFound);

app.use(errorHandler);

const PORT = 5000;

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);
