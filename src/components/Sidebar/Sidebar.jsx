import React from 'react';
import { Home, Calendar, Users, Terminal } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import styles from './Sidebar.module.css';

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
};

export default Sidebar;
