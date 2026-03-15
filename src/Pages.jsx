import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import { useNavigate, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';
import ChoiceSection from './components/ChoiceSection';
import eventImage from './components/Event/ca.jpg';
import eventImage2 from './components/Event/e2.png';
import acmLogo from './components/Navbar/acm_logo.png';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Home, Calendar, Users, Terminal } from 'lucide-react';
import styles from './Pages.module.css';
import footerStyles from './components/Footer/Footer.module.css';
import Aurora from './Aurora';
import FAQSection from './components/FAQSection';
import ConnectSection from './components/ConnectSection';
import Lightning from './components/ui/Lightning';
import RegisterModal from './components/ui/RegisterModal';


// ─── Main Pages Component ────────────────────────────────────────────────────
export default function Pages() {
  const scrollRef = useRef(null);
  const scrollInst = useRef(null);
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [showModal, setShowModal] = useState(false);


  // ── Locomotive Scroll ──
  useEffect(() => {
    const scrollInstance = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      smoothMobile: true,
    });
    scrollInst.current = scrollInstance;
    scrollInstance.update();
    return () => { if (scrollInstance) scrollInstance.destroy(); };
  }, []);

  // ── Nav scroll helper ──
  const scrollTo = (id) => {
    if (scrollInst.current) {
      scrollInst.current.scrollTo(id, {
        duration: 800,
        offset: 0,
        easing: [0.25, 0.00, 0.35, 1.00],
      });
    }
    setMenuOpen(false);
  };

  // ── Section data ──
  const memberChoices = [
    { title: 'Team (2025-2026)', subtitle: 'The Current Executive Force', image: '/images/1.jpg', link: '/members/2025' },
    { title: 'Team (2024-2025)', subtitle: 'The Past Leaders', image: '/images/nn.webp', link: '/members/2024' },
  ];
  const eventChoices = [
    { title: 'Events (2025-2026)', subtitle: 'Upcoming and Current Innovations', image: eventImage, link: '/events/2025' },
    { title: 'Events (2024-2025)', subtitle: 'Archived Highlights', image: eventImage2, link: '/events/2024' },
  ];
  const socialLinks = [
    { name: 'linkedin', icon: faLinkedinIn, url: 'https://www.linkedin.com/company/acm-nmamit/' },
    { name: 'instagram', icon: faInstagram, url: 'https://www.instagram.com/acm_nitte/' },
    { name: 'github', icon: faGithub, url: 'https://github.com/acmnmamit' },
  ];

  return (
    <>
      {/* ── Sidebar ── */}

      <Aurora
        colorStops={["#7cff67", "#B19EEF", "#5227FF"]}
        blend={0.5}
        amplitude={1.0}
        speed={1}
      />

      <div className={styles.big}>
        <div className={styles.pagesContainer} ref={scrollRef} data-scroll-container>

          {/* ── NAVBAR ── */}
          <nav className={styles.navbar}>
            <div className={styles.navbarContent}>
              <div className={styles.logoContainer}>
                <img className={styles.navLogo} src={acmLogo} alt="ACM Logo" />
                <span className={styles.clubName}>@NMAMIT</span>
              </div>

              <ul className={styles.desktopMenu}>
                <li className={styles.pillItem} onClick={() => setShowModal(true)} style={{cursor:"pointer"}}>Login</li>
              </ul>

              <button className={styles.menuToggle} onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
                {menuOpen ? <FaTimes /> : <FaBars />}
              </button>
            </div>

            {/* Mobile slide menu */}
            <div className={`${styles.mobileMenu} ${menuOpen ? styles.open : ''}`}>
              <ul className={styles.mobileMenuList}>
                <li onClick={() => setShowModal(true)}>Login</li>
              </ul>
            </div>
          </nav>

          {menuOpen && <div className={styles.blurOverlay} onClick={() => setMenuOpen(false)} />}

          {/* ── HERO (section 1) ── */}
          <section
            id="section1"
            className={`${styles.pageSection} ${styles.section1}`}
            data-scroll-section
          >
            <div className={styles.heroVanta}><div style={{position:"absolute",top:0,left:0,width:"100%",height:"100%",zIndex:0}}><Lightning hue={260} xOffset={0} speed={1} intensity={1} size={1} /></div>
              <div className={styles.heroText}>
                <h1 className={styles.heroTitle}>
                  Association for<br />
                  Computing<br />
                  Machinery
                </h1>
                <p className={styles.heroDesc}>
                  NMAMIT's premier computing community.<br />
                  Realizing Ideas, Inspiring the next.
                </p>
              </div>
            </div>
          </section>

          {/* ── OUR MEMBERS (section 2) ── */}
          <section
            id="sectionTeam"
            className={`${styles.pageSection} ${styles.section4}`}
            data-scroll-section
          >
            <h2 className={styles.sectionHeading}>Our Members</h2>
            <ChoiceSection choices={memberChoices} />
          </section>

          {/* ── OUR EVENTS (section 3) ── */}
          <section
            id="sectionEvents"
            className={`${styles.pageSection} ${styles.section3}`}
            data-scroll-section
          >
            <h2 className={styles.sectionHeading}>Our Events</h2>
            <ChoiceSection choices={eventChoices} />
          </section>

          {/* ── ABOUT US (section 4) ── */}
          <section
            id="sectionAbout"
            className={`${styles.pageSection} ${styles.section2}`}
            data-scroll-section
          >
            <div className={styles.aboutContent}>
              <h1 className={styles.aboutTitle}>About Us</h1>
              <p className={styles.aboutDesc}>
                The ACM Student Chapter at our college is a dynamic community of driven and passionate
                tech enthusiasts, committed to promoting innovation, collaboration, and continuous learning.
              </p>
              <p className={styles.aboutDesc}>
                By fostering an environment of creativity and knowledge-sharing, we strive to prepare
                students for a future of excellence in technology and leadership. Join us to unlock
                exciting opportunities, elevate your skills, and be part of a thriving network shaping
                tomorrow's tech landscape.
              </p>
              <a
                className={styles.readMoreBtn}
                href="https://www.acm.org/about-acm"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read More
              </a>
            </div>
          </section>

          {/* ── FAQ Section ── */}
          <section data-scroll-section>
            <FAQSection />
          </section>

          {/* ── Connect Section ── */}
          <section data-scroll-section>
            <ConnectSection />
          </section>

          {/* ── Footer Section ── */}
          <section
            id="sectionFooter"
            className={styles.simpleFooter}
            data-scroll-section
          >
            <p>© Association for Computing Machinery, 2025. All rights reserved.</p>
          </section>

        </div>
      </div>
      {showModal && <RegisterModal onClose={() => setShowModal(false)} />}
    </>
  );
}
