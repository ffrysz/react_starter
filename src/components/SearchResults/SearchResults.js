import React from 'react';
import styles from './SearchResults.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card.js';
import { settings } from '../../data/dataStore.js';
import Icon from '../Icon/Icon.js';
// import { Droppable } from 'react-beautiful-dnd';

class SearchResults extends React.Component {

  static defaultProps = {
    icon: settings.defaultSearchIcon,
  }

  static propTypes = {
    cards: PropTypes.array,
  }

  render() {
    const { cards } = this.props;
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
          {/* <Droppable droppableId={id}>
            {provided => (
              <div
                className={styles.cards}
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {cards.map(cardData => (
                  <Card key={cardData.id} {...cardData} />
                ))}

                {provided.placeholder}
              </div>
            )}
          </Droppable> */}
        </div>
      </section>
    );
  }
}

export default SearchResults;