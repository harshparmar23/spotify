import { Router } from "express";
import { getAlbumById, getAllAlbums } from "../controller/album.controller.js";

const router = Router();

router.get("/api/albums/", getAllAlbums);
router.get("/:albumId", getAlbumById);

export default router