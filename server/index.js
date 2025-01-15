import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import router from "./src/routes/itemRoutes.js";

dotenv.config();

const app = express();

// Configure CORS to allow requests from your client origin
const corsOptions = {
  origin: [
    "http://localhost:5173",
    "https://item-management-vercel-deploy-client.vercel.app",
  ],
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(router);

const clientOptions = {
  serverApi: { version: "1", strict: true, deprecationErrors: true },
};

mongoose
  .connect(process.env.MONGODB_URI, clientOptions)
  .then(() => {
    // mongoose.connection.db.admin().command({ ping: 1 });
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Couldn't connect to MongoDB", err);
  });

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
