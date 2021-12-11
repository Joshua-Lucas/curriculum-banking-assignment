import { Router } from "express";
import { index } from "../controller/transactionsController.mjs";

const router = Router();

router.route("/").get(index);

export default router;
