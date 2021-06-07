import express from "express";
import {registerWorker,getWorkers} from "../controllers/index.js";

const router = express.Router();



router.post('/register', registerWorker);
router.get('/workers', getWorkers);

export default router;