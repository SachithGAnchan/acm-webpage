import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import styles from './FAQSection.module.css';

const faqs = [
  {
    question: "What is acm?",
    answer: " The Association for Computing Machinery (ACM) is a globally recognized professional organization dedicated to advancing computing and information technology. Through world-class conferences, research journals, and technical resources, ACM supports innovation and learning in computer science. Its International Student Chapters empower students worldwide by providing opportunities for workshops, coding competitions, research exposure, and industry networking, helping them grow as future technology leaders."
  },
  {
    question: "What does an ACM student chapter do?",
    answer: "An Association for Computing Machinery student chapter organizes technical events like workshops, coding competitions, guest lectures, and hackathons. It helps students improve programming skills, network with professionals, and stay updated with new technologies in computing."
  },
  {
    question: "What year was ACM student chapter started at nmamit, nitte",
    answer: "The ACM Student Chapter at NMAM Institute of Technology (NMAMIT), Nitte, was officially started in May 2015. Since its inception, the chapter has been active in organizing technical workshops, eminent speaker programs, and coding competitions to benefit the students"
  },
  {
    question: "How can one join the core team of ACM?",
    answer: "To join the ACM core team, you typically need to be an active member who demonstrates leadership through consistent volunteering at workshops and technical events. The selection process usually opens annually and involves an application followed by an interview or task-based round"
  },

];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className={styles.faqWrapper} id="faq">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Frequently asked questions</h2>
        </div>
        <div className={styles.faqList}>
          {faqs.map((faq, index) => (
            <div key={index} className={styles.faqItem}>
              <button
                className={styles.questionButton}
                onClick={() => toggleFAQ(index)}
                aria-expanded={activeIndex === index}
              >
                <span className={styles.question}>{faq.question}</span>
                <span className={styles.icon}>
                  {activeIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                </span>
              </button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className={styles.answerWrapper}
                  >
                    <div className={styles.answer}>
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
