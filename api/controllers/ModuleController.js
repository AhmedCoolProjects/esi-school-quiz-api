import moduleSubject from "../models/ModuleSchema.js";
// import Redis from "redis";

// const EXPERATION_TIME = 3600;
// const REDIS_HOST = "redis-16543.c240.us-east-1-3.ec2.cloud.redislabs.com";
// const REDIS_PORT = "16543";
// const REDIS_PASSWORD = "6ilQY7hMH7TZKEh4UFLd1CxgfVCvsAnP";
// const REDIS_USERNAME = "default";

// const redisClient = Redis.createClient({
//   url:
//     "redis://" +
//     REDIS_USERNAME +
//     ":" +
//     REDIS_PASSWORD +
//     "@" +
//     REDIS_HOST +
//     ":" +
//     REDIS_PORT,
// });

// await redisClient.connect();

// redisClient.on("connect", function () {
//   console.log("connected");
// });

/**
 *
 * @param {string} title
 * @param {string} description
 * @param {string} image
 */
export async function addModuleSubject(req, res) {
  const moduleSubjectItem = new moduleSubject({
    title: req.body.title,
    description: req.body.description,
    image: req.body.image,
  });
  await moduleSubjectItem.save();
  res.send(moduleSubjectItem);
}

export async function getAllModuleSubjects(req, res) {
  // redisClient.get("moduleSubjectsRedis", async (error, moduleSubjectsRedis) => {
  //   if (error) console.log("Redis Error: " + error);
  //   if (moduleSubjectsRedis != null) {
  //     return res.json(JSON.parse(moduleSubjectsRedis));
  //   } else {
  //     const moduleSubjects = await moduleSubject.find();
  //     redisClient.set("moduleSubjectsRedis", JSON.stringify(moduleSubjects));
  //     res.json(moduleSubjects);
  //   }
  // });
  const moduleSubjects = await moduleSubject.find();
  res.json(moduleSubjects);
}
/**
 *
 * @param {string} id
 */
export async function getModuleById(req, res, id) {
  const moduleSubjectItem = await moduleSubject.findById(id);
  res.send(moduleSubjectItem);
}
