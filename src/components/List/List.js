import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero.js';
import Column from '../Column/Column.js';
import PropTypes from 'prop-types';
import { settings } from '../../data/dataStore.js';

class List extends React.Component {
  static propTypes = {
    title: PropTypes.node.isRequired,
    image: PropTypes.string,
    description: PropTypes.node,
    columns: PropTypes.array,
  }

  static defaultProps = {
    description: settings.defaultListDescription,
  }

  render() {
    return (
      <section className={styles.component}>
        <Hero titleText={this.props.title} imageSrc={this.props.image} />
        <div className={styles.description}>
          {this.props.description}
        </div>
        <div className={styles.columns}>
          <Column title='Column 1' />
          <Column title='Column 2' />
          <Column title='Column 3' />
        </div>
      </section>
    )
  }
}

export default List;
