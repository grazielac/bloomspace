import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import pg from "pg";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json()); // convert ??

app.get("/", (req, res) => {
    res.json({ message: "Server is running!"})
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});