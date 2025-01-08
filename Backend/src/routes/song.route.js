import { Router } from "express";
import { getAllSongs, getFeaturedSongs, getMadeForYouSongs, getTreandingSongs } from "../controller/song.controller.js";
import { protectRoute, requireAdmin } from "../middleware/auth.middleware.js";

const router = Router();

router.get("/", protectRoute, requireAdmin, getAllSongs);
router.get("/featured", getFeaturedSongs);
router.get("/madr-for-you", getMadeForYouSongs);
router.get("/trending", getTreandingSongs);

export default router