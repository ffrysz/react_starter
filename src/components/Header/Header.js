import React from 'react';
import styles from './Header.scss';
// import PropTypes from 'prop-types';
import { NavLink, Link } from 'react-router-dom';
import Container from '../Container/Container';
import Icon from '../Icon/Icon';

class Header extends React.component {

  render() {
    return (
      <header>
        <Container>
          <div className={styles.wrapper}>
            <Link classNqme={styles.logo} exact to='/'>
              <Icon name='coffee'></Icon>
            </Link>
            <nav>
              <NavLink exact to='/'>Home</NavLink>
              <NavLink exact to='/info'>Info</NavLink>
            </nav>
          </div>
        </Container>
      </header>
    );
  }
}

export default Header;