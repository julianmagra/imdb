import { Router } from "express";
const router = Router();

router.get("/", (req, res) => {
  res.send("Hello router! =)");
});

router.post("/", (req, res) => {
  try {
    console.log(req.body);
    res.json(req.body);
  } catch (error) {
    res.status(500).json(error);
  }
});

export default router;
