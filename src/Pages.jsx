import React, { useEffect, useRef, useState } from 'react';
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
import Lightning from './components/ui/Lightning';
import RegisterModal from './components/ui/RegisterModal';


// ─── Sidebar ────────────────────────────────────────────────────────────────
function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname;
  const navItems = [
    { icon: <Home size={20} />, label: 'Home', path: '/' },
    { icon: <Calendar size={20} />, label: 'Events', path: '/events' },
    { icon: <Users size={20} />, label: 'Members', path: '/members' },
    { icon: <Terminal size={20} />, label: 'Magic', path: '/magic' },
  ];
  return (
    <nav className={styles.sidebar}>
      {navItems.map((item, index) => (
        <div
          key={index}
          className={`${styles.iconWrapper} ${path === item.path ? styles.active : ''}`}
          onClick={() => navigate(item.path)}
        >
          {item.icon}
          <span className={styles.tooltip}>{item.label}</span>
        </div>
      ))}
    </nav>
  );
}

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
      <Sidebar />


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

          {/* ── FOOTER (section 5) ── */}
          <section
            id="sectionFooter"
            className={styles.footerSection}
            data-scroll-section
          >
            <div className={footerStyles.bigcontainer}>
              <div className={footerStyles.container}>
                <div className={footerStyles.wrapper}>
                  <header className={footerStyles.header}>
                    <div className={footerStyles.logoContainer}>
                      <div className={footerStyles.mainhead}>
                        <div className={footerStyles.title}>Association for</div>
                        <div className={footerStyles.title}>Computing Machinery</div>
                        <div className={footerStyles.subtitle}>NMAMIT Student Chapter</div>
                      </div>
                    </div>
                  </header>
                  <div className={footerStyles.mainGrid}>
                    <div className={footerStyles.aboutSection}>
                      <h2 className={footerStyles.sectionTitle}>Find Us</h2>
                      <iframe
                        title="Google Maps Location"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3884.6730533394875!2d74.93141407508013!3d13.18300258715209!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbb56415ad85e5b%3A0x10b77ac6f6afc7fa!2sN.M.A.M.%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1733416769802!5m2!1sen!2sin"
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className={footerStyles.mapSectionIframe}
                      />
                    </div>
                    <div className={footerStyles.contactSection}>
                      <h2 className={footerStyles.sectionTitle}>Contact Us</h2>
                      <div className={footerStyles.contactInfo}>
                        <div>acmnmamit24@gmail.com</div>
                      </div>
                      <h2 className={footerStyles.sectionTitle} style={{ marginTop: '2rem' }}>Connect</h2>
                      <div className={footerStyles.socialLinks}>
                        {socialLinks.map((s) => (
                          <a key={s.name} href={s.url} className={footerStyles.socialLink}
                            aria-label={s.name} target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={s.icon} className={footerStyles.socialIcon} />
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={footerStyles.footerBottom}>
                © 2025 NMAMIT ACM Student Chapter. All rights reserved.
              </div>
            </div>
          </section>

        </div>
      </div>
      {showModal && <RegisterModal onClose={() => setShowModal(false)} />}
    </>
  );
}
