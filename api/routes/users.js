import { Router } from "express";
import {
  createUser,
  getUser,
  getUsers,
  updateUser,
} from "../controllers/users.js";
const router = Router();

router.get("/", getUsers);
router.get("/:userId", getUser);
router.post("/", createUser);
router.put("/:userId", updateUser);
router.delete("/:userId");

export default router;
