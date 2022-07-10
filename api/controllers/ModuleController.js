import moduleSubject from "../models/ModuleSchema.js";

export async function addModuleSubject(req, res) {
  const moduleSubjectItem = new moduleSubject({
    title: req.body.title,
    description: req.body.description,
  });
  await moduleSubjectItem.save();
  res.send(moduleSubjectItem);
}
