import Instructor from './instructor.model';

const addInstructor = async (payload) => {
  await Instructor.create(payload);
};

export const instructorService = {
  addInstructor,
};
