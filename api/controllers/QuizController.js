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
