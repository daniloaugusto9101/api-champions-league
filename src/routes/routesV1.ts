import { Router } from "express";
import * as PlayerControler from "../controllers/players-controller";

const router = Router();

router.get("/players", PlayerControler.getPlayer);
router.post("/players", PlayerControler.postPlayer);
router.get("/players/:id", PlayerControler.getPlayerById);

export default router;
