import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js";
import categoryRoute from "./routes/categoryRoute.js";
import productRoute from "./routes/productRoute.js";
import cors from "cors";
import path from "path";
import cookieParser from "cookie-parser";

//configure env
dotenv.config();
const PORT = process.env.PORT || 8080;

//database config
connectDB();

//rest object
const app = express();
app.use(cors());
app.use(express.json());
app.use(cookieParser());

//middlewares

app.use(morgan("dev"));

//routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/category", categoryRoute);
app.use("/api/v1/product", productRoute);

//rest api
app.get("/", (req, res) => {
  res.send("<h1>Welcome to ecommerce app</h1>");
});

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`.bgCyan.white);
});
