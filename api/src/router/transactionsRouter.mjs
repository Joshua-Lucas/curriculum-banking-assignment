import { Router } from "express";
import { index, create } from "../controller/transactionsController.mjs";

const router = Router();

router.route("/").get(index).post(create);

export default router;
