import React, { useState, useEffect } from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import './Work.scss';
import { images } from '../../constants';

const Work = () => {
  const works = [
    { description: 'Demo project.', name: 'Amazon Clone', projectLink: './', codeLink: './', imgUrl: '', tags: ['React JS'] },
    { description: 'Real Project.', name: 'Mustang - Shoes Store', projectLink: 'https://mustang-frontend.vercel.app/', codeLink: '', imgUrl: images.mustang, tags: ['Web App'] },
    { description: 'Demo project.', name: 'Netflix Clone', projectLink: './', codeLink: './', imgUrl: '', tags: ['React JS'] },
    { description: 'Demo project.', name: 'HooBank', projectLink: 'https://hoobank-react-demo.netlify.app/', codeLink: 'https://github.com/JuravekJr/modern-buissness-web', imgUrl: 'https://i.ibb.co/BK1Hn0x/Screenshot-2022-08-08-at-4-05-48-PM.png', tags: ['Web Page'] },
    { description: 'Demo project.', name: 'Chat Application', projectLink: './', codeLink: './', imgUrl: '', tags: ['Web App'] },
    { description: 'Demo project.', name: 'GPT-3', projectLink: 'https://clone-gpt-3.netlify.app/', codeLink: 'https://github.com/JuravekJr/modern-responsive-website', imgUrl: 'https://i.ibb.co/TR5LW9z/image.png', tags: ['Web Page'] },
  ];
  const [filterWork, setFilterWork] = useState([]);
  const [activeFilter, setActiveFilter] = useState('All');
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  useEffect(() => {
    setFilterWork(works);
  }, []);

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === 'All') {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };

  return (
    <>
      <h2 className="head-text">My Creative <span>Portfolio</span> Section</h2>

      <div className="app__work-filter">
        {['Web App', 'Web Page', 'React JS', 'All'].map((item, index) => (
          <div
            key={index}
            onClick={() => handleWorkFilter(item)}
            className={`app__work-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}
          >
            {item}
          </div>
        ))}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {filterWork.map((work, index) => (
          <div className="app__work-item app__flex" key={index}>
            <div
              className="app__work-img app__flex"
            >
              <img src={work.imgUrl} alt={work.name} />

              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                className="app__work-hover app__flex"
              >
                <a href={work.projectLink} target="_blank" rel="noreferrer">

                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.90] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                <a href={work.codeLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.90] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>

            <div className="app__work-content app__flex">
              <h4 className="bold-text">{work.name}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>{work.description}</p>

              <div className="app__work-tag app__flex">
                <p className="p-text">{work.tags[0]}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Work, 'app__works'),
  'work',
  'app__primarybg',
);
