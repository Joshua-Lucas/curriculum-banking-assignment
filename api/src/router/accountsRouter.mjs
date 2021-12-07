import { Router } from "express";
import {
  index,
  show,
  create,
  destroy,
} from "../controller/accountsControllers.mjs";

const router = Router();

router.route("/").get(index).post(create);

router.route("/:accountNumber").get(show).delete(destroy);

export default router;
