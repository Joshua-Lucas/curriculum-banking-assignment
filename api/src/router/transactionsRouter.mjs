import { Router } from "express";
import {
  index,
  show,
  create,
  destroy,
} from "../controller/transactionsController.mjs";

const router = Router();

router.route("/").get(index).post(create);

router.route("/:transId").get(show).delete(destroy);

export default router;
