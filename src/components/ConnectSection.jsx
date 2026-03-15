import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Linkedin, Instagram } from 'lucide-react';
import { ContactService } from '../services/ContactService';
import styles from './ConnectSection.module.css';

const ConnectSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // idle, submitting, success

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    try {
      await ContactService.submitMessage(formData);
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    } catch (error) {
      console.error("Submission failed", error);
      setStatus('idle');
    }
  };

  return (
    <section className={styles.connectWrapper} id="connect">
      <div className={styles.container}>
        {/* Contact Form Tile */}
        <motion.div 
          className={styles.contactTile}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className={styles.tileHeader}>
            <h2 className={styles.title}>Have another question?</h2>
            <p className={styles.subtitle}>Let's talk</p>
          </div>

          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.row}>
              <div className={styles.inputGroup}>
                <label>Full Name*</label>
                <input 
                  type="text" 
                  name="name" 
                  placeholder="Type your name" 
                  required 
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className={styles.inputGroup}>
                <label>Your email*</label>
                <input 
                  type="email" 
                  name="email" 
                  placeholder="Type your email address" 
                  required 
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className={styles.inputGroup}>
              <label>Your message*</label>
              <textarea 
                name="message" 
                rows="4" 
                placeholder="Type your message" 
                required
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
            
            <div className={styles.formFooter}>
              <button 
                type="submit" 
                className={styles.submitBtn}
                disabled={status === 'submitting'}
              >
                {status === 'submitting' ? 'SENDING...' : 'SUBMIT'}
                <span className={styles.submitIcon}><Send size={18} /></span>
              </button>
              <p className={styles.disclaimer}>
                By clicking submit, you agree to our Privacy Policy.
              </p>
            </div>
          </form>
          
          {status === 'success' && (
            <motion.div 
              className={styles.successMessage}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Message linked to database successfully!
            </motion.div>
          )}
        </motion.div>

        {/* Social Links Tiles */}
        <div className={styles.socialTiles}>
          <motion.a 
            href="https://www.linkedin.com/company/acm-nmamit/" 
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.socialTile} ${styles.linkedin}`}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
          >
            <div className={styles.socialIcon}><Linkedin /> LINKEDIN</div>
            <div className={styles.joinAction}>
              <span>Follow us</span>
              <span className={styles.arrowIcon}>→</span>
            </div>
          </motion.a>

          <motion.a 
            href="https://www.instagram.com/acm_nitte/" 
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.socialTile} ${styles.instagram}`}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            whileHover={{ y: -10 }}
          >
            <div className={styles.socialIcon}><Instagram /> INSTAGRAM</div>
            <div className={styles.joinAction}>
              <span>Follow us</span>
              <span className={styles.arrowIcon}>→</span>
            </div>
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default ConnectSection;
