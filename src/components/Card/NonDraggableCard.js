import React from 'react';
import styles from './Card.scss';
import PropTypes from 'prop-types';

class NonDraggableCard extends React.Component {

  static propTypes = {
    title: PropTypes.string,
    id: PropTypes.string,
    index: PropTypes.number,
  }

  render() {
    const { title } = this.props;
    return (
      <article className={styles.component}>
        {title}
      </article>
    );
  }
}

export default NonDraggableCard;