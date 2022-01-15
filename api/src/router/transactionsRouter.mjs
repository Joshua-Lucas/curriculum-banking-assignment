import { Router } from "express";
import {
  index,
  create,
  destroy,
} from "../controller/transactionsController.mjs";

const router = Router();

router.route("/").get(index).post(create);

router.route("/:transId").delete(destroy);

export default router;
