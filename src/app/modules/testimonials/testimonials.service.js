import Testimonial from './testimonial.model.js';

const addTestimonials = async (payload) => {
  await Testimonial.create(payload);
};

const getAllTestimonials = () => {
    return Testimonial.find();
  };
  

export const testimonialService = {
  addTestimonials,
  getAllTestimonials
};
