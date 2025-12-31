import React, { useEffect } from 'react';
import styles from './Members.module.css';  // Importing CSS module
import Footer from '../Footer/Footer';
import NavigationCompass from '../NavigationCompass';
import { motion } from "framer-motion";
import { useLocation } from 'react-router-dom';
import DotsBackground from './DotsBackground';


// as of now it's temporarily here, later we'll make a separate JSON file
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

const currentMembersData = [
  {
    name: "Pratheeksha",
    role: "President",
    profilePic: "/images/1.jpg",
    socialLinks: {
      instagram: "https://instagram.com/pratheeksha0907",
      linkedin: "https://www.linkedin.com/in/pratheeksha-s-430197297/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      github: "https://github.com/pratheeksha63"
    },
    category: "Executive"
  },
    {
    name: "Pratheeksha",
    role: "Vice President",
    profilePic: "/images/2.jpg",
    socialLinks: {
      instagram: "https://instagram.com/Tulipiie0 ",
      linkedin: "https://www.linkedin.com/in/pratheeksha-7323b928a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      github: "https://github.com/PratheekshaSudhir"
    },
    category: "Executive"
  },
      {
    name: "Aneesh",
    role: "Treasurer",
    profilePic: "/images/3.jpg",
    socialLinks: {
      instagram: "https://instagram.com/username",
      linkedin: "https://linkedin.com/in/username",
      github: "https://github.com/username"
    },
    category: "Executive"
  },
        {
    name: "Akshatha",
    role: "Vice Secretary",
    profilePic: "/images/4.jpg",
    socialLinks: {
      instagram: "https://instagram.com/aksh_zzzzzz",
      linkedin: "https://linkedin.com/in/username",
      github: "https://github.com/Akshatha-G-S"
    },
    category: "Executive"
  },
          {
    name: "Vaishali",
    role: "Vice Secretary",
    profilePic: "/images/5.jpg",
    socialLinks: {
      instagram: "https://instagram.com/username",
      linkedin: "https://linkedin.com/in/username",
      github: "https://github.com/username"
    },
    category: "Graphic"
  },
          {
    name: "Sachith G Anchan",
    role: "Technical Member",
    profilePic: "/images/6.jpg",
    socialLinks: {
      instagram: "https://instagram.com/sachithanchan",
      linkedin: "https://www.linkedin.com/in/sachith-g-anchan-79a670312/",
      github: "https://github.com/SachithGAnchan"
    },
    category: "Tech"
  },
            {
    name: "Thushar",
    role: "Technical Member",
    profilePic: "/images/7.jpg",
    socialLinks: {
      instagram: "https://instagram.com/Thushar_termi8970",
      linkedin: "https://linkedin.com/in/Thushar---kumar",
      github: "https://github.com/Thusharctrl"
    },
    category: "Tech"
  },
              {
    name: "Hasnain Khan",
    role: "Event Team",
    profilePic: "/images/8.jpg",
    socialLinks: {
      instagram: "https://instagram.com/_.hasnainn",
      linkedin: "https://www.linkedin.com/in/hasnaink87/",
      github: "https://github.com/hasnainkhan87"
    },
    category: "Event"
  },
                {
    name: "Prakyath Suvarna",
    role: "Event Team",
    profilePic: "/images/9.jpg",  
    socialLinks: {
      instagram: "https://instagram.com/Prakyath._.suvarna",
      linkedin: "https://linkedin.com/in/username",
      github: "https://github.com/Prakyath-suvarna"
    },
    category: "Event"
  },
                {
    name: "Trishal Hegde",
    role: "Event Team",
    profilePic: "/images/10.jpg",
    socialLinks: {
      instagram: "https://instagram.com/trishalhegde",
      linkedin: "https://www.linkedin.com/in/trishal-hegde-336358320/",
      github: "https://github.com/TrishalHegde"
    },
    category: "Event"
  },
                  {
    name: "Aishwarya",
    role: "Social Media Team",
    profilePic: "/images/11.jpg",
    socialLinks: {
      instagram: "https://instagram.com/username",
      linkedin: "https://linkedin.com/in/username",
      github: "https://github.com/username"
    },
    category: "Media"
  },
                    {
    name: "Anagha",
    role: "Social Media Team",
    profilePic: "/images/12.jpg",
    socialLinks: {
      instagram: "https://instagram.com/username",
      linkedin: "https://linkedin.com/in/username",
      github: "https://github.com/username"
    },
    category: "Media"
  },
                    {
    name: "Shashanka Shanbhag",
    role: "Social Media Team",
    profilePic: "/images/13.jpg",
    socialLinks: {
      instagram: "https://instagram.com/shashankkk._1",
      linkedin: "https://www.linkedin.com/in/shashank-shanbhag-162150383?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      github: "https://github.com/username"
    },
    category: "Media"
  },
                    {
    name: "Chinthan",
    role: "Photography",
    profilePic: "/images/14.jpg",
    socialLinks: {
      instagram: "https://instagram.com/username",
      linkedin: "https://linkedin.com/in/username",
      github: "https://github.com/username"
    },
    category: "Media"
  },
  {
        name: "Udhbhav S Nayak",
    role: "Photography",
    profilePic: "/images/15.jpg",
    socialLinks: {
      instagram: "https://instagram.com/username",
      linkedin: "https://linkedin.com/in/username",
      github: "https://github.com/username"
    },
    category: "Media"
  },
                    {
    name: "Dharshan P Kumar",
    role: "Photography",
    profilePic: "/images/16.jpg",
    socialLinks: {
      instagram: "https://instagram.com/darshan_.devadiga",
      linkedin: "https://linkedin.com",
      github: "https://github.com/darshan-55"
    },
    category: "Media"
  },
                      {
    name: "Akshay Mayya",
    role: "Graphic Team",
    profilePic: "/images/17.jpg",
    socialLinks: {
      instagram: "https://instagram.com/username",
      linkedin: "https://linkedin.com/in/username",
      github: "https://github.com/username"
    },
    category: "Graphic"
  },
                        {
    name: "Anmol S Poojary",
    role: "Graphic Team",
    profilePic: "/images/18.jpg",
    socialLinks: {
      instagram: "https://instagram.com/username",
      linkedin: "https://linkedin.com/in/username",
      github: "https://github.com/username"
    },
    category: "Graphic"
  },
  {
      name: "Anchal Rao N",
    role: "Publicity Team",
    profilePic: "/images/19.jpg",
    socialLinks: {
      instagram: "https://instagram.com/anchalraon",
      linkedin: "https://www.linkedin.com/in/anchalraon/",
      github: "https://github.com/AnchalRaon"
    },
    category: "Publicity"
  },
    {
      name: "Stuthi Achar",
    role: "Publicity Team",
    profilePic: "/images/20.jpg",
    socialLinks: {
      instagram: "https://instagram.com/stuthiachaar",
      linkedin: "https://www.linkedin.com/in/stuthi-achar-241a6421a/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      github: "https://github.com/Stuthi15"
    },
    category: "Publicity"
  },
      {
      name: "Dhruvi Shetty",
    role: "Publicity Team",
    profilePic: "/images/21.jpg",
    socialLinks: {
      instagram: "https://instagram.com/dhruvi__shetty",
      linkedin: "https://linkedin.com/in/dhruvi-shetty",
      github: "https://github.com/Dhruvishetty"
    },
    category: "Publicity"
  },
      {
      name: "Unnathi U Bhat",
    role: "Documentation Team",
    profilePic: "/images/22.jpg",
    socialLinks: {
      instagram: "https://instagram.com/username",
      linkedin: "https://linkedin.com/in/username",
      github: "https://github.com/username"
    },
    category: "Documentation"
  },
        {
      name: "Swasthik M Prabhu",
    role: "Documentation Team",
    profilePic: "/images/23.jpg",
    socialLinks: {
      instagram: "https://instagram.com/swasthikprabhu11",
      linkedin: "https://www.linkedin.com/in/swasthik-m-prabhu-00437731b/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      github: "https://github.com/Swasthikprabhu372"
    },
    category: "Documentation"
  },
          {
      name: "Rishith Shetty",
    role: "Second Year Representative",
    profilePic: "/images/24.jpg",
    socialLinks: {
      instagram: "https://instagram.com/username",
      linkedin: "https://linkedin.com/in/username",
      github: "https://github.com/username"
    },
    category: "Representatives"
  },
            {
      name: "Shaldon Barnes",
    role: "Third Year Representative",
    profilePic: "/images/25.jpg",
    socialLinks: {
      instagram: "https://instagram.com/username",
      linkedin: "https://linkedin.com/in/username",
      github: "https://github.com/username"
    },
    category: "Representatives"
  }

];


const previousMembersData = [
  {
    name: "Neil",
    role: "Chairperson",
    //about: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis minima provident esse hic.",
    // profilePic: 'https://res.cloudinary.com/dskq6j62q/image/upload/v1729355947/neil_y4xsjt.jpg',
    profilePic: '/images/nn.webp',
    socialLinks: {
      instagram: "https://instagram.com/neilmp21",
      linkedin: "https://www.linkedin.com/in/neil-mammen-prakash/",
      github: "https://github.com/neilplus21"
    },
    category: 'officeBearer'

  },
  {
    name: "Namratha",
    role: "Vice Chairperson",
    //about: "Creating seamless user experiences and elegant design solutions.",
    // profilePic: 'https://res.cloudinary.com/dskq6j62q/image/upload/v1729355981/nam_rdh6ri.jpg',
    profilePic: '/images/nam.webp',
    socialLinks: {
      instagram: "https://instagram.com/",
      linkedin: "https://www.linkedin.com/in/namratha-m-82a653246/",
      github: "https://github.com/Namratha8213"
    },
    category: 'officeBearer'
  },
  {
    name: "Rashmitha R Bangera",
    role: "Treasurer",
    //about: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis minima provident esse hic.",
    // profilePic: 'https://res.cloudinary.com/dskq6j62q/image/upload/v1729355980/RashmithaRB_vrfpck.jpg',
    profilePic: '/images/Rashmitha.webp',
    socialLinks: {
      instagram: "https://www.instagram.com/khushi_rrb",
      linkedin: "https://www.linkedin.com/in/rashmitha-r-bangera-335750246?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      github: "https://github.com/RashmithaRB"
    },
    category: 'officeBearer'

  },
  {
    name: "Kushagr Sharma",
    role: "Webmaster",
    //about: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis minima provident esse hic.",
    // profilePic: 'https://res.cloudinary.com/dskq6j62q/image/upload/v1729365119/kush_wsph8a.jpg',
    profilePic: '/images/kkk.jpg',
    socialLinks: {
      instagram: "https://instagram.com",
      linkedin: "https://www.linkedin.com/in/kushagr-sharma-a26651258/",
      github: "https://github.com/kushagr1501"
    },
    category: 'officeBearer'

  },

  {
    name: "Sannidhi S Shetty",
    role: "Secretary",
    //about: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis minima provident esse hic.",
    // profilePic: 'https://res.cloudinary.com/dskq6j62q/image/upload/v1729355969/sannidhi_zfmnb7.jpg',
    profilePic: '/images/sannidhi.webp',
    socialLinks: {
      instagram: "https://instagram.com",
      linkedin: "https://twitter.com",
      github: "https://github.com"
    },
    category: 'officeBearer'
  },

  {
    name: "Sujal Sunil Badde",
    role: "Vice Secretary",
    //about: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis minima provident esse hic.",
    // profilePic: 'https://res.cloudinary.com/dskq6j62q/image/upload/v1729355947/Sujal_eo3zte.jpg',
    profilePic: '/images/Sujal.webp',
    socialLinks: {
      instagram: "https://instagram.com",
      linkedin: "https://twitter.com",
      github: "https://github.com"
    },
    category: 'officeBearer'

  },
  {
    name: "Shaldon Barnes",
    role: "Co-Webmaster",
    //about: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis minima provident esse hic.",
    // profilePic: 'https://res.cloudinary.com/dskq6j62q/image/upload/v1729365279/IMG_3364_posa3d.jpg',
    profilePic: '/images/sheldon.jpg',
    socialLinks: {
      instagram: "https://instagram.com",
      linkedin: "https://www.linkedin.com/in/kushagr-sharma-a26651258/",
      github: "https://github.com"
    },
    category: 'creative'

  },
  {
    name: "Eshaan",
    role: "Graphic Designer",
    //about: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis minima provident esse hic.",
    // profilePic: 'https://res.cloudinary.com/dskq6j62q/image/upload/v1729355947/eeshan_gs5roq.jpg',
    profilePic: '/images/eeshan.webp',
    socialLinks: {
      instagram: "https://instagram.com",
      linkedin: "https://twitter.com",
      github: "https://github.com"
    },
    category: 'creative'
  },
  {
    name: "Sarang Sudheer",
    role: "Graphic Designer",
    //about: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis minima provident esse hic.",
    // profilePic: 'https://res.cloudinary.com/dskq6j62q/image/upload/v1729355946/Sarang_pxzxmq.jpg',
    profilePic: '/images/Sarang.webp',
    socialLinks: {
      instagram: "https://instagram.com",
      linkedin: "https://twitter.com",
      github: "https://github.com"
    },
    category: 'creative'
  },

  {
    name: "Prateeksha",
    role: "Graphic Designer",
    //about: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis minima provident esse hic.",
    // profilePic: 'https://res.cloudinary.com/dskq6j62q/image/upload/v1729355970/prat_rtrvao.jpg',
    profilePic: '/images/prat.webp',
    socialLinks: {
      instagram: "https://instagram.com",
      linkedin: "https://twitter.com",
      github: "https://github.com"
    },
    category: 'creative'
  },
  {
    name: "Aakash",
    role: "Photography Head",
    //about: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis minima provident esse hic.",
    // profilePic: 'https://res.cloudinary.com/dskq6j62q/image/upload/v1729355949/Aakash_brjcge.png',
    profilePic: '/images/Aakash.webp',
    socialLinks: {
      instagram: "https://instagram.com",
      linkedin: "https://www.linkedin.com/in/aakashb23/",
      github: "https://github.com/Aakash0023"
    },
    category: 'creative'

  },
  {
    name: "N Ajay G Kamath",
    role: "Photography Co-Head",
    //about: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis minima provident esse hic.",
    // profilePic: 'https://res.cloudinary.com/dskq6j62q/image/upload/v1729355982/ajay_h14ovt.jpg',
    profilePic: '/images/ajay.webp',
    socialLinks: {
      instagram: "https://www.instagram.com/ajaykamath_/profilecard/?igsh=ZjM3ejR6cW9iM2w2",
      linkedin: "https://www.linkedin.com/in/ajay-kamath-03a171275",
      github: "https://github.com/Ajay28-ryzen"
    },
    category: 'creative'
  },
  {
    name: "V Mithun Mallya",
    role: "Photography Co-Head",
    //about: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis minima provident esse hic.",
    // profilePic: 'https://res.cloudinary.com/dskq6j62q/image/upload/v1729355968/MITHUN_ad27z6.jpg',
    profilePic: '/images/MITHUN.webp',
    socialLinks: {
      instagram: "https://instagram.com",
      linkedin: "https://www.linkedin.com/in/mithun-mallya-74ba88284?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      github: "https://github.com"
    },
    category: 'creative'
  },
  {
    name: "Sharvan SP",
    role: "Event Manager",
    //about: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis minima provident esse hic.",
    // profilePic: 'https://res.cloudinary.com/dskq6j62q/image/upload/v1729355946/Swasthi_rifmag.jpg',
    profilePic: '/images/sp.jpg',
    socialLinks: {
      instagram: "https://instagram.com",
      linkedin: "https://twitter.com",
      github: "https://github.com"
    },
    category: 'operation'

  },
  {
    name: "Swasthi Shetty",
    role: "Event Head",
    //about: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis minima provident esse hic.",
    // profilePic: 'https://res.cloudinary.com/dskq6j62q/image/upload/v1729355946/Swasthi_rifmag.jpg',
    profilePic: '/images/Swasthi.webp',
    socialLinks: {
      instagram: "https://instagram.com",
      linkedin: "https://twitter.com",
      github: "https://github.com"
    },
    category: 'operation'

  },

  {
    name: "Anagha",
    role: "Event Co-Head",
    //about: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis minima provident esse hic.",
    // profilePic: 'https://res.cloudinary.com/dskq6j62q/image/upload/v1729355981/anagha_o9u31e.jpg',
    profilePic: '/images/anagha.webp',
    socialLinks: {
      instagram: "https://instagram.com",
      linkedin: "https://twitter.com",
      github: "https://github.com"
    },
    category: 'operation'

  },


  {
    name: "Harshita Hegde",
    role: "Publicity Head",
    //about: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis minima provident esse hic.",
    // profilePic: 'https://res.cloudinary.com/dskq6j62q/image/upload/v1729355982/harshita_urqgeh.jpg',
    profilePic: '/images/harshita.webp',
    socialLinks: {
      instagram: "https://instagram.com",
      linkedin: "https://twitter.com",
      github: "https://github.com"
    },
    category: 'operation'

  },

  {
    name: "Gokul Anil",
    role: "Publicity Co-Head",
    //about: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis minima provident esse hic.",
    // profilePic: 'https://res.cloudinary.com/dskq6j62q/image/upload/v1729355972/gokul_uhudfi.jpg',
    profilePic: '/images/gokul.webp',
    socialLinks: {
      instagram: "https://instagram.com",
      linkedin: "https://twitter.com",
      github: "https://github.com"
    },
    category: 'operation'

  },

  {
    name: "V Sreelasya",
    role: "Social Media Head",
    //about: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis minima provident esse hic.",
    // profilePic: 'https://res.cloudinary.com/dskq6j62q/image/upload/v1729355981/lasya_sbsa0g.jpg',
    profilePic: '/images/laasya.webp',
    socialLinks: {
      instagram: "https://instagram.com",
      linkedin: "https://twitter.com",
      github: "https://github.com"
    },
    category: 'operation'

  },

  {
    name: "Thanmayi",
    role: "Social Media  Co-Head",
    //about: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis minima provident esse hic.",
    // profilePic: 'https://res.cloudinary.com/dskq6j62q/image/upload/v1729355965/Thanmayi_se0j7k.jpg',
    profilePic: '/images/Thanmayi.webp',
    socialLinks: {
      instagram: "https://instagram.com",
      linkedin: "https://twitter.com",
      github: "https://github.com"
    },
    category: 'operation'

  },

  {
    name: "Diya M Shetty",
    role: "Documentation Head",
    //about: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis minima provident esse hic.",
    // profilePic: 'https://res.cloudinary.com/dskq6j62q/image/upload/v1729355968/diya_cnbahk.jpg',
    profilePic: '/images/diya.webp',
    socialLinks: {
      instagram: "https://www.instagram.com/diya_shetty12/",
      linkedin: "https://www.linkedin.com/in/diya-m-shetty-674813296?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      github: "https://github.com/diyamshetty"
    },
    category: 'operation'

  },

  {
    name: "Dhruva Shedbalkar",
    role: "Documentation Co-Head",
    //about: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis minima provident esse hic.",
    // profilePic: 'https://res.cloudinary.com/dskq6j62q/image/upload/v1729355983/dhruva_x4kbcj.jpg',
    profilePic: '/images/dhruva.webp',
    socialLinks: {
      instagram: "https://instagram.com",
      linkedin: "https://twitter.com",
      github: "https://github.com"
    },
    category: 'operation'

  },

  {
    name: "Shawn",
    role: "3rd Year Representative",
    //about: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis minima provident esse hic.",
    // profilePic: 'https://res.cloudinary.com/dskq6j62q/image/upload/v1729355945/shawn_ov7ou9.png',
    profilePic: '/images/shawn.webp',
    socialLinks: {
      instagram: "https://instagram.com",
      linkedin: "https://linkedin.com",
      github: "https://github.com"
    },
    category: 'operation'

  },

  {
    name: "Susan Riona D'souza",
    role: "Second Year Representative",
    //about: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis minima provident esse hic.",
    // profilePic: 'https://res.cloudinary.com/dskq6j62q/image/upload/v1729355969/Susan_xvahk6.jpg',
    profilePic: '/images/Susan.webp',
    socialLinks: {
      instagram: "https://www.instagram.com/sparkly_noctiluca/",
      linkedin: "https://www.linkedin.com/in/susanrionadsouza/", 
      github: "https://github.com/Susandsouza"
    },
    category: 'operation'
  },
];


const Members = () => {
  const location = useLocation();

  useEffect(() => {
    if (!location.state?.scrollTo) return;

    const id = location.state.scrollTo;

    const timeout = setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    }, 300);

    return () => clearTimeout(timeout);
  }, [location.state]);

  const renderMemberGroup = (data, category, title) => {
    const members = data.filter(member => member.category === category);

    if (members.length === 0) return null;

    return (
      <motion.section
        className={styles.groupSection}
        id={category}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className={styles.sectionHeading}>{title}</h2>
        <motion.div
          className={styles.section}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {members.map((member, index) => (
            <motion.div
              className={styles.card}
              key={`${member.name}-${member.role}`}
              variants={cardVariants}
            >
              <div className={styles.profilePic}>
                <img
                  src={member.profilePic}
                  alt={`Profile of ${member.name}`}
                />
              </div>
              <div className={styles.details}>
                <h2>{member.name}</h2>
                <p className={styles.tag}>{member.role}</p>
                <p className={styles.about}>{member.about}</p>
                <div className={styles.buttons}>
                  <div className={styles.social}>
                    <a href={member.socialLinks.instagram} target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a href={member.socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-linkedin"></i>
                    </a>
                    <a href={member.socialLinks.github} target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-github"></i>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <NavigationCompass />
      </motion.section>
    );
  };

  return (
    <>
      {/* 🎨 DOTS BACKGROUND - WRAPS EVERYTHING */}
      <div style={{ position: 'relative', overflow: 'hidden' }}>
        <DotsBackground 
          dotCount={120}
          dotColor="rgba(100, 200, 255, 0.6)"
          dotSize={2}
          speed={0.5}
          fadeDistance={200}
        />
        
        <div className={styles.info}>
          {/* 🔥 NEW MEMBERS (TOP) */}
          <h1 className={styles.yearHeading}>2025–26 Team</h1>

          {renderMemberGroup(currentMembersData, 'Executive', 'Executive')}
          {renderMemberGroup(currentMembersData, 'Tech', 'Technical Team')}
          {renderMemberGroup(currentMembersData, 'Event', 'Event Team')}
          {renderMemberGroup(currentMembersData, 'Media', 'Media Team')}
          {renderMemberGroup(currentMembersData, 'Graphic', 'Graphic Team')}
          {renderMemberGroup(currentMembersData, 'Publicity', 'Publicity Team')}
          {renderMemberGroup(currentMembersData, 'Documentation', 'Documentation Team')}
          {renderMemberGroup(currentMembersData, 'Representatives', 'Representatives')}

          {/* 🔽 OLD MEMBERS (BELOW) */}
          <h1 id="previous-team" className={styles.yearHeading}>
            2024–25 Team
          </h1>

          {renderMemberGroup(previousMembersData, 'officeBearer', 'Executive')}
          {renderMemberGroup(previousMembersData, 'creative', 'Creative')}
          {renderMemberGroup(previousMembersData, 'operation', 'Operations')}
        </div>
        
        <Footer />
      </div>
    </>
  );
};

export default Members;
