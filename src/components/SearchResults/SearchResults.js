import React from 'react';
import styles from './SearchResults.scss';
import PropTypes from 'prop-types';
import Card from '../Card/NonDraggableCard.js';
import { settings } from '../../data/dataStore.js';
import Icon from '../Icon/Icon.js';

class SearchResults extends React.Component {

  static defaultProps = {
    icon: settings.defaultSearchIcon,
  }

  static propTypes = {
    cards: PropTypes.array,
    id: PropTypes.string,
  }

  render() {
    const { cards, id } = this.props;
    console.log(cards);
    return (
      <section className={styles.component}>
        <h3 className={styles.title}>
          Wyniki wyszukiwania
          <span className={styles.icon}>
            <Icon name="mask" />
          </span>
        </h3>
        <div className={styles.cardData}>
          {cards.map(cardData => (
            <Card key={cardData.id} {...cardData} />
          ))}
        </div>
      </section>
    );
  }
}

export default SearchResults;