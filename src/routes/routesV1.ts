import { Router } from "express";
import * as PlayerControler from "../controllers/players-controller";

const router = Router();

router.get("/players", PlayerControler.getPlayer);
router.get("/players/:id", PlayerControler.getPlayerById);

router.post("/players", PlayerControler.postPlayer);

router.delete("/players/:id", PlayerControler.deletePlayer);

router.patch("/players/:id", PlayerControler.updatePlayer);

export default router;
