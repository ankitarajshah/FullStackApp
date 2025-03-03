import express, { Application } from "express";
import cors from "cors";
import dotenv from "dotenv";
import sequelize from "./config/db";
dotenv.config();
const app: Application = express();
//middleware
app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Server is running...");
});
sequelize.sync({ force: false }).then(() => {
  console.log("Database sync");
});

export default app;
