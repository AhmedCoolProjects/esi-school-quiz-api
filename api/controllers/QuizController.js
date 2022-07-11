import moduleSubject from "../models/ModuleSchema.js";

/**
 * @params
 *  {
 *    moduleId: String,
 *    quiz: {
 *     title: String,
 *     description: String,
 *     questions: [{
 *       question: String,
 *       answers: [{
 *         answer: String,
 *         isCorrect: Boolean
 *       }],
 *     }],
 *    }
 *  }
 */
export async function addQuiz(req, res) {
  const moduleId = req.body.moduleId;
  const quiz = {
    title: req.body.quiz.title,
    description: req.body.quiz.description,
    questions: req.body.quiz.questions,
  };
  const moduleItem = await moduleSubject.findById(moduleId);
  moduleItem.quiz.push(quiz);
  await moduleItem.save();
  res.send(moduleItem);
}
/**
 *
 * @param {string} moduleId
 * @param {string} quizId
 */
export async function getQuizById(req, res, moduleId, quizId) {
  const moduleItem = await moduleSubject.findById(moduleId);
  const quiz = moduleItem.quiz.find((quiz) => quiz._id == quizId);
  res.send(quiz);
}
