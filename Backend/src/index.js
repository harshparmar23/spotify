import express from "express";
import dotenv from "dotenv";
import { clerkMiddleware } from '@clerk/express'
import fileUpload from "express-fileupload";

import { connectDB } from "./lib/db.js"

import userRoutes from "./routes/user.route.js"
import adminRoutes from "./routes/admin.route.js"
import authRoutes from "./routes/auth.route.js"
import songRoutes from "./routes/song.route.js"
import albumRoutes from "./routes/album.route.js"
import statRoutes from "./routes/stat.route.js"
import path from "path"
import cors from "cors"
import { authCallback } from "./controller/auth.controller.js";
import { getAlbumById, getAllAlbums } from "../src/controller/album.controller.js";

dotenv.config();

const __dirname = path.resolve();
const app = express();
const PORT = process.env.PORT;



app.use(express.json());//to prase req.body
app.use(clerkMiddleware());//help request(req) from clerk 
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: path.join(__dirname, "tmp"),
    createParentPath: true,
    limits: {
        fileSize: 10 * 1024 * 1024//10mb
    }
}));
app.use(cors())

app.use("/api/users", userRoutes);
app.post("/api/auth/callback", authCallback);
app.use("/api/admin", adminRoutes);
app.use("/api/songs", songRoutes);
// app.use("/api/albums", albumRoutes);
app.get("/api/albums/", getAllAlbums);
app.get("/api/albums/:albumId", getAlbumById);
app.use("/api/stats", statRoutes);

//error handler
app.use((err, req, res, next) => {
    res.status(500).json({ meesage: process.env.NODE_ENV === "production" ? "Internal server error" : err.meesage });
})

app.listen(PORT, () => {
    console.log("Server is listening on port " + PORT);
    connectDB();
})

