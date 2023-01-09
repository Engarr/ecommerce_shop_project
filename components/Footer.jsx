import React from 'react';
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai';
import classes from './Footer.module.css'

const Footer = () => {
	return <div className={classes['footer-container']}>
    <p>2023 WOSMOD All rights reserved</p>
    <p className={classes.icons}>
      <AiFillInstagram/>
      <AiOutlineTwitter/>
    </p>
  </div>;
};

export default Footer;
