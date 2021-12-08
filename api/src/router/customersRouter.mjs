import { Router } from "express";
import { index } from "../controller/customersController.mjs";

const router = Router();

router.route("/").get(index);

export default router;
