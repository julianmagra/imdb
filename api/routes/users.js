import { Router } from "express";
import { createUser, getUsers } from "../controllers/users.js";
const router = Router();

router.get("/", getUsers);
router.get("/:userId");
router.post("/", createUser);
router.put("/:userId");
router.delete("/:userId");

export default router;
