import React from 'react';
import { BsInstagram } from 'react-icons/bs';
import { FaTelegramPlane, FaLinkedinIn } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <a href="./" target="_blank">
      <FaTelegramPlane />
    </a>
    <a href="./" target="_blank">
      <BsInstagram />
    </a>
    <a href="./" target="_blank">
      <FaLinkedinIn />
    </a>
  </div>
);

export default SocialMedia;
