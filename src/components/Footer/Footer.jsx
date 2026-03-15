import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedinIn,
  faInstagram,
  faGithub
} from '@fortawesome/free-brands-svg-icons';
import styles from './Footer.module.css';

const Footer = () => {
  const socialLinks = [
    { name: 'linkedin',  icon: faLinkedinIn, url: 'https://www.linkedin.com/company/acm-nmamit/' },
    { name: 'instagram', icon: faInstagram,  url: 'https://www.instagram.com/acm_nitte/'         },
    { name: 'github',    icon: faGithub,     url: 'https://github.com/acmnmamit'                   },
  ];

  return (
    <>
      <div className={styles.bigcontainer}>
        <div className={styles.container}>
          <div className={styles.wrapper}>
            <header className={styles.header}>
              <div className={styles.logoContainer}>
                <div className={styles.mainhead}>
                  <div className={styles.title}>Association for</div>
                  <div className={styles.title}>Computing Machinery</div>
                  <div className={styles.subtitle}>NMAMIT Student Chapter</div>
                </div>
              </div>
            </header>

            <div className={styles.mainGrid}>
              <div className={styles.aboutSection}>
                <h2 className={styles.sectionTitle}>Find Us</h2>
                <iframe
                  title="Google Maps Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3884.6730533394875!2d74.93141407508013!3d13.18300258715209!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbb56415ad85e5b%3A0x10b77ac6f6afc7fa!2sN.M.A.M.%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1733416769802!5m2!1sen!2sin"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className={styles.mapSectionIframe}
                />
              </div>

              <div className={styles.contactSection}>
                <h2 className={styles.sectionTitle}>Contact Us</h2>
                <div className={styles.contactInfo}>
                  <div>acmnmamit24@gmail.com</div>
                </div>
                <h2 className={styles.sectionTitle} style={{ marginTop: '2rem' }}>Connect</h2>
                <div className={styles.socialLinks}>
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      className={styles.socialLink}
                      aria-label={social.name}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FontAwesomeIcon icon={social.icon} className={styles.socialIcon} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.footerBottom}>
          © 2025 NMAMIT ACM Student Chapter. All rights reserved.
        </div>
      </div>
    </>
  );
};

export default Footer;
