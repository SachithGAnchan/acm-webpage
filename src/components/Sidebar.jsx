import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import { Home, Calendar, Users, Terminal } from 'lucide-react';
import styles from '../Pages.module.css';

const Sidebar = () => {
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
      {navItems.map((item, index) => {
        const isActive = path === item.path || (item.path !== '/' && path.startsWith(item.path));
        
        return (
          <motion.div
            key={index}
            className={`${styles.iconWrapper} ${isActive ? styles.active : ''}`}
            onClick={() => navigate(item.path)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {isActive && (
              <motion.div
                layoutId="activePill"
                className={styles.activeIndicator}
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
            <span className={styles.iconContent}>{item.icon}</span>
            <span className={styles.tooltip}>{item.label}</span>
          </motion.div>
        );
      })}
    </nav>
  );
};

export default Sidebar;
