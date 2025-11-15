// Enrollments/routes.js
import EnrollmentsDao from "./dao.js";

export default function EnrollmentsRoutes(app, db) {
  const dao = EnrollmentsDao(db);


  const findAllEnrollments = (req, res) => {
    const enrollments = dao.findAllEnrollments();
    res.json(enrollments);
  };


  const findEnrollmentsForUser = (req, res) => {
    const { userId } = req.params;
    const enrollments = dao.findEnrollmentsForUser(userId);
    res.json(enrollments);
  };

  
  const findEnrollmentsForCourse = (req, res) => {
    const { courseId } = req.params;
    const enrollments = dao.findEnrollmentsForCourse(courseId);
    res.json(enrollments);
  };

 
  const enrollUserInCourse = (req, res) => {
    const { userId, courseId } = req.params;
    const result = dao.enrollUserInCourse(userId, courseId);
    
    if (result.error) {
      res.status(409).json(result);
    } else {
      res.status(201).json(result);
    }
  };

 
  const unenrollUserFromCourse = (req, res) => {
    const { userId, courseId } = req.params;
    const result = dao.unenrollUserFromCourse(userId, courseId);
    
    if (result.error) {
      res.status(404).json(result);
    } else {
      res.json(result);
    }
  };

  // Register routes
  app.get("/api/enrollments", findAllEnrollments);
  app.get("/api/enrollments/user/:userId", findEnrollmentsForUser);
  app.get("/api/enrollments/course/:courseId", findEnrollmentsForCourse);
  app.post("/api/enrollments/:userId/:courseId", enrollUserInCourse);
  app.delete("/api/enrollments/:userId/:courseId", unenrollUserFromCourse);
}