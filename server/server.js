import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import cors from "cors";
import loadCategories from "./utils/loadCategories.js";

dotenv.config();
connectDB();
loadCategories();

const app = express();
const port = process.env.PORT || 6969;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

app.get("/", (req, res) => {
  res.send("Welcome to the server");
});

app.use("/", userRoutes);
