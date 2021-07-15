import React from 'react';
import styles from './Hero.scss';
import PropTypes from 'prop-types';

const Hero = props => (
  <header className={styles.component}>
    <h2 className={styles.title}>{props.titleText.slice(0, 2)}</h2>
    {/* <img src={props.titleText[2]} alt="header_img" className={styles.image}></img> */}
    <img src={props.imageSrc} alt="header_img" className={styles.image}></img>
  </header>
);

Hero.propTypes = {
  titleText: PropTypes.node.isRequired,
  imageSrc: PropTypes.string,
};

export default Hero;
