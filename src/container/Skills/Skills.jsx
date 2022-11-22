import React from 'react';
import { motion } from 'framer-motion';
import ReactTooltip from 'react-tooltip';

import { AppWrap, MotionWrap } from '../../wrapper';
import './Skills.scss';
import { images } from '../../constants';

const Skills = () => {
  const skills = [
    { name: 'HTML', bgColor: '#f7f7f7', icon: images.html },
    { name: 'CSS', bgColor: '#f7f7f7', icon: images.css },
    { name: 'SASS', bgColor: '#f7f7f7', icon: images.sass },
    { name: 'Figma', bgColor: '#f7f7f7', icon: images.figma },
    { name: 'Git', bgColor: '#f7f7f7', icon: images.git },
    { name: 'JavaScript', bgColor: '#f7f7f7', icon: images.javascript },
    { name: 'React JS', bgColor: '#f7f7f7', icon: images.react },
    { name: 'Redux', bgColor: '#f7f7f7', icon: images.redux },
    { name: 'Node JS', bgColor: '#f7f7f7', icon: images.node },
  ];

  const experiences = [
    {
      year: '2022',
      works: [
        {
          name: 'Frontend Developer',
          desc: 'I am a junior frontend developer.',
          text: 'Created some real and demo projects.',
        },
        {
          name: 'Backend Developer',
          desc: 'I am a junior backend developer.',
          text: 'Created some real and demo projects.',
        },
      ] },
  ];

  return (
    <>
      <h2 className="head-text">Skills & Experiences</h2>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={skill.icon} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <div className="app__skills-exp">
          {experiences.map((experience, index) => (
            <motion.div
              className="app__skills-exp-item"
              key={index}
            >
              <div className="app__skills-exp-year">
                <p className="bold-text">{experience.year}</p>
              </div>
              <motion.div className="app__skills-exp-works">
                {experience.works.map((work, inx) => (
                  <>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__skills-exp-work"
                      data-tip
                      data-for={work.name}
                      key={inx}
                    >
                      <h4 className="bold-text">{work.name}</h4>
                      <p className="p-text">{work.desc}</p>
                    </motion.div>
                    <ReactTooltip
                      id={work.name}
                      effect="solid"
                      arrowColor="#fff"
                      className="skills-tooltip"
                    >
                      {work.text}
                    </ReactTooltip>
                  </>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, 'app__skills'),
  'skills',
  'app__whitebg',
);
