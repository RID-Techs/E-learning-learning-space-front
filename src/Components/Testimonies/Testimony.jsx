import { motion } from "motion/react";
import { StudentsTestimonies } from "./Testimonies";
import "./Testimony.css";
import { useEffect, useRef } from "react";
export const Testimony = () => {
 const testimoniesRef = useRef(null);

  useEffect(() => {
    // 1. Use 'hash' to be precise (checks strictly for #testimonies)
    const { hash } = window.location;
    
    if (hash === "#testimonials" && testimoniesRef.current) {
      // 2. Add a small timeout (100ms) to allow layout/painting to settle
      setTimeout(() => {
        testimoniesRef.current.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'end' // 3. CHANGE THIS: 'start' puts the title at the top of the screen
        });
      }, 100);
    }
  }, []);
  return (
    <>
      <div className="testimonies-container-wrapper">
        <h5 ref={testimoniesRef} id="testimonials" className="students-testimonies-title">Student Testimonials</h5>
        <div className="testimonies-container">
          {
            StudentsTestimonies.map((testimony) => (
              <motion.div initial={{ opacity: 0, y: 50, x: 20 }} whileInView={{ opacity: 1, y: 0, x: 0 }} key={testimony.id} className="testimony-card">
                <div className="testimony-card-body">
                  <p className="testimony-text testimony-description">
                    {
                      (testimony.e_help_description).trim().endsWith(".") ? (
                      `❝ ` + (testimony.e_help_description).trim()) + " " : `❝ ` + (testimony.e_help_description).trim() + ". "
                    }
                    {
                      (testimony.impressions).trim().endsWith(".") ? (
                      (testimony.impressions).trim()) + " ❞" : (testimony.impressions).trim() + ". ❞"
                    }
                  </p>
                </div>
                <div className="testimony-card-footer">
                  <p className="testimony-text testimony-student-name">- {testimony.user_name} {testimony.user_firstname}</p>
                </div>
              </motion.div>
            ))
          }
        </div>
      </div>
    </>
  )
}