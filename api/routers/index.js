import { Router } from "express";
import {
  addModuleSubject,
  getAllModuleSubjects,
  getModuleById,
} from "../controllers/ModuleController.js";
import { addQuiz, getQuizById } from "../controllers/QuizController.js";

const router = Router();
const ModuleRouter = Router();
const QuizRouter = Router();
// -------------------- module subjects --------------------
// ------------------ get all module subjects
ModuleRouter.get("/all", async (req, res) => {
  getAllModuleSubjects(req, res);
});
// ------------------ get module subject by id
ModuleRouter.get("/id:id", async (req, res) => {
  const id = req.params.id;
  getModuleById(req, res, id);
});
// ------------------ add module subject
ModuleRouter.post("/add", async (req, res) => {
  addModuleSubject(req, res);
});
// --------------------- quiz --------------------
// ------------------ get quiz by id from moduleId
QuizRouter.get("/moduleId:moduleId/quizId:quizId", async (req, res) => {
  const moduleId = req.params.moduleId;
  const quizId = req.params.quizId;
  getQuizById(req, res, moduleId, quizId);
});
// ------------------ add quiz to moduleId
QuizRouter.post("/add", async (req, res) => {
  addQuiz(req, res);
});

router.get("/", (req, res) => {
  res.send("Welcome to ESI SCHOOL Quiz API");
});
router.use("/module", ModuleRouter);
router.use("/quiz", QuizRouter);

export default router;
