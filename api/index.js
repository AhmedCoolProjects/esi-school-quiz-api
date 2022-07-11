import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import router from "./routers/index.js";

const app = express();
dotenv.config();

const PORT = process.env.PORT || 5050;

app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://esi-school-quiz.vercel.app",
      "https://esi-school-quiz.vercel.app/",
      "https://quiz.codeesi.com",
    ],
    methods: ["GET", "POST"],
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose
  .connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("DB Connected");
    app.use("/api", router);
    app.listen(PORT, () => {
      console.log("Server is Running on port " + PORT);
    });
  });
