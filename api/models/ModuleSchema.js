import mongoose from "mongoose";
import QuizSchema from "./QuizSchema.js";

const ModuleSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: false,
    },
    description: {
      type: String,
      required: true,
    },
    semester: {
      type: String,
      required: false,
    },
    quiz: {
      type: [QuizSchema],
      required: false,
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

const moduleSubject = mongoose.model("module_subject_quiz", ModuleSchema);

export default moduleSubject;
