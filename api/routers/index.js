import { Router } from "express";
import { addModuleSubject } from "../controllers/ModuleController.js";
import { addQuiz } from "../controllers/QuizController.js";
import moduleSubject from "../models/ModuleSchema.js";

const router = Router();
const ModuleRouter = Router();
const QuizRouter = Router();

ModuleRouter.get("/all", async (req, res) => {
  const moduleSubjects = await moduleSubject.find();
  res.json(moduleSubjects);
});

ModuleRouter.post("/add", async (req, res) => {
  addModuleSubject(req, res);
});

QuizRouter.post("/add", async (req, res) => {
  addQuiz(req, res);
});

router.get("/", (req, res) => {
  res.send("Welcome to ESI SCHOOL Quiz API");
});

router.use("/module", ModuleRouter);
router.use("/quiz", QuizRouter);

export default router;
