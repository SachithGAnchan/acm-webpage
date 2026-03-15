import React, { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './ChoiceSection.module.css';
import { gsap } from 'gsap';

const ChoiceSection = ({ choices }) => {
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const animated = useRef(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Set initial invisible state
    const cards = container.querySelectorAll(`.${styles.choiceCard}`);
    gsap.set(cards, { opacity: 0, y: 80 });

    // Use IntersectionObserver so it works with any scroll library
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !animated.current) {
          animated.current = true;
          gsap.to(cards, {
            opacity: 1,
            y: 0,
            duration: 0.9,
            stagger: 0.25,
            ease: 'power3.out',
          });
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  return (
    <div className={styles.choiceContainer} ref={containerRef}>
      {choices.map((choice, index) => (
        <div
          key={index}
          className={styles.choiceCard}
          onClick={() => navigate(choice.link)}
        >
          {choice.image && (
            <img src={choice.image} alt={choice.title} className={styles.cardImage} />
          )}
          <div className={styles.cardOverlay}>
            <h3 className={styles.cardTitle}>{choice.title}</h3>
            <p className={styles.cardSubtitle}>{choice.subtitle}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChoiceSection;
