import React from 'react';
import styles from './Header.scss';
// import PropTypes from 'prop-types';
import { NavLink, Link } from 'react-router-dom';
import Container from '../Container/Container';
import Icon from '../Icon/Icon';
import Search from '../Search/Search';
import { settings } from '../../data/dataStore';

class Header extends React.Component {

  render() {
    return (
      <header className={styles.component}>
        <Container>
          <div className={styles.wrapper}>
            <Link className={styles.logo} to='/'>
              <Icon name={settings.headerIcon}></Icon>
            </Link>
            <Search />
            <nav>
              <NavLink to='/' activeClassName='active'>Home</NavLink>
              <NavLink to='/info' activeClassName='active'>Info</NavLink>
              <NavLink to='/FAQ' activeClassName='active'>FAQ</NavLink>
            </nav>
          </div>
        </Container>
      </header>
    );
  }
}

export default Header;