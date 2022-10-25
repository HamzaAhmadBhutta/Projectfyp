import express from "express";
import path from "path";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import color from "colors";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import orderRoutes from "./routes/orderRoutes";
import uploadRoutes from "./routes/uploadRoutes";
import morgan from "morgan";

dotenv.config();

connectDB();

const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.json());

app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
app.use("/api/orders", userRoutes);
app.use("/api/upload", uploadRoutes);

app.get("/", (req, res) => {
  res.send("API is running...");
});

const __dirname = path.resolve(); /// es module does not resolve old javascript __dirname to clear resolution we declare it with func

app.use("/uploads", express.static(path.join(__dirname, "/uploads")));
////
/// not found error handle by middle war
app.use(notFound);

/// @middle ware conver req ,res html to json
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mod on  port ${PORT}`.yellow.bold
  )
);
