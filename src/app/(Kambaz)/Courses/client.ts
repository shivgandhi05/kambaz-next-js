import axios from "axios";
const axiosWithCredentials = axios.create({withCredentials: true});
const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;
const COURSES_API = `${HTTP_SERVER}/api/courses`;
const USERS_API = `${HTTP_SERVER}/api/users`;


const MODULES_API = `${HTTP_SERVER}/api/modules`;
const ASSIGNMENTS_API = `${HTTP_SERVER}/api/assignments`;
const ENROLLMENTS_API = `${HTTP_SERVER}/api/enrollments`;

// Courses
export const fetchAllCourses = async () => {
  const { data } = await axiosWithCredentials.get(COURSES_API);
  return data;
};

export const findMyCourses = async () => {
  const { data } = await axiosWithCredentials.get(`${USERS_API}/current/courses`);
  return data;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const createCourse = async (course: any) => {
  const { data } = await axiosWithCredentials.post(`${COURSES_API}`, course);
  return data;
};

export const deleteCourse = async (id: string) => {
  const { data } = await axiosWithCredentials.delete(`${COURSES_API}/${id}`);
  return data;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const updateCourse = async (course: any) => {
  const {data} = await axiosWithCredentials.put(`${COURSES_API}/${course._id}`, course); 
  return data;
};


//Modules
export const findModulesForCourse = async (courseId: string) => {
  const response = await axiosWithCredentials.get(`${COURSES_API}/${courseId}/modules`);
  return response.data;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const createModuleForCourse = async (courseId: string, module: any) => {
  const response = await axios.post(`${COURSES_API}/${courseId}/modules`, module);
  return response.data;
};

export const deleteModule = async (courseId: string, moduleId: string) => {
    const response = await axiosWithCredentials.delete(`${COURSES_API}/${courseId}/modules/${moduleId}`);
    return response.data;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const updateModule = async (module: any) => {
    const { data } = await axiosWithCredentials.put(`${MODULES_API}/${module._id}`, module);
    return data;
};

export const findAssignmentsForCourse = async (courseId: string) => {
    const response = await axiosWithCredentials.get(`${COURSES_API}/${courseId}/assignments`);
    return response.data;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const createAssignmentForCourse = async (courseId: string, assignment: any) => {
    const response = await axiosWithCredentials.post(
        `${COURSES_API}/${courseId}/assignments`,
        assignment
    );
    return response.data;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const updateAssignment = async (assignment: any) => {
    const response = await axiosWithCredentials.put(
        `${ASSIGNMENTS_API}/${assignment._id}`,
        assignment
    );
    return response.data;
};

export const deleteAssignment = async (assignmentId: string) => {
    const response = await axiosWithCredentials.delete(`${ASSIGNMENTS_API}/${assignmentId}`);
    return response.data;
};



export const findAllEnrollments = async () => {
    const response = await axiosWithCredentials.get(ENROLLMENTS_API);
    return response.data;
  };
  
  
  export const findEnrollmentsForCourse = async (courseId: string) => {
    const response = await axiosWithCredentials.get(`${ENROLLMENTS_API}/course/${courseId}`);
    return response.data;
  };
  
  //enrollments
  export const enrollUserInCourse = async (userId: string, courseId: string) => {
    const response = await axiosWithCredentials.post(`${ENROLLMENTS_API}/${userId}/${courseId}`);
    return response.data;
  };
  
  export const unenrollUserFromCourse = async (userId: string, courseId: string) => {
    const response = await axiosWithCredentials.delete(`${ENROLLMENTS_API}/${userId}/${courseId}`);
    return response.data;
  };

  export const findEnrollmentsForUser = async (userId: string) => {
    const response = await axiosWithCredentials.get(`${ENROLLMENTS_API}/user/${userId}`);
    return response.data;
  };
   
   export const enrollIntoCourse = async (userId: string, courseId: string) => {
    const response = await axiosWithCredentials.post(`${USERS_API}/${userId}/courses/${courseId}`);
    return response.data;
   };
   export const unenrollFromCourse = async (userId: string, courseId: string) => {
    const response = await axiosWithCredentials.delete(`${USERS_API}/${userId}/courses/${courseId}`);
    return response.data;
   };
   
   export const findUsersForCourse = async (courseId: string) => {
    const response = await axiosWithCredentials.get(`${COURSES_API}/${courseId}/users`);
    return response.data;
   };

  export const findQuizzesForCourse = async (courseId: string) => {
    const response = await axiosWithCredentials.get(`${COURSES_API}/${courseId}/quizzes`);
    return response.data;
  };


 
  

  
