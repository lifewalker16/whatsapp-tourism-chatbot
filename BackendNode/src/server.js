import express from "express";
import cors from "cors";
import "dotenv/config";
import chatRoutes from "./routes/chatRoutes.js";
import connectDb from "./config/db.js";

const app = express();
const PORT = 8080;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api",chatRoutes);

connectDb();
app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`);
});