import { v4 as uuidv4 } from "uuid";

export default function EnrollmentsDao(db) {
  function findAllEnrollments() {
    return db.enrollments;
  }

  function findEnrollmentsForUser(userId) {
    const { enrollments } = db;
    return enrollments.filter((enrollment) => enrollment.user === userId);
  }

  function findEnrollmentsForCourse(courseId) {
    const { enrollments } = db;
    return enrollments.filter((enrollment) => enrollment.course === courseId);
  }

  function enrollUserInCourse(userId, courseId) {
    const { enrollments } = db;
    
    const existingEnrollment = enrollments.find(
      (e) => e.user === userId && e.course === courseId
    );
    
    if (existingEnrollment) {
      return { error: 'User is already enrolled in this course' };
    }
    
    const newEnrollment = {
      _id: uuidv4(),
      user: userId,
      course: courseId,
      enrolledAt: new Date().toISOString()
    };
    
    db.enrollments = [...db.enrollments, newEnrollment];
    return newEnrollment;
  }

  function unenrollUserFromCourse(userId, courseId) {
    const { enrollments } = db;
    
    const enrollment = enrollments.find(
      (e) => e.user === userId && e.course === courseId
    );
    
    if (!enrollment) {
      return { error: 'Enrollment not found' };
    }
    
    db.enrollments = enrollments.filter(
      (e) => !(e.user === userId && e.course === courseId)
    );
    
    return enrollment;
  }

  return {
    findAllEnrollments,
    findEnrollmentsForUser,
    findEnrollmentsForCourse,
    enrollUserInCourse,
    unenrollUserFromCourse
  };
}