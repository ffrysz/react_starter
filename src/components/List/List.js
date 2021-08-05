import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero.js';
import Column from '../Column/ColumnContainer';
import Creator from '../Creator/Creator.js';
import PropTypes from 'prop-types';
import { settings } from '../../data/dataStore.js';
import Container from '../Container/Container';
import { DragDropContext } from 'react-beautiful-dnd';
import { createAction_moveCard } from '../../redux/cardsRedux';

class List extends React.Component {
  // state = {
  //   columns: this.props.columns || [],
  // }

  static propTypes = {
    title: PropTypes.node.isRequired,
    image: PropTypes.string,
    description: PropTypes.node,
    columns: PropTypes.array,
    addColumn: PropTypes.func,
  }

  static defaultProps = {
    description: settings.defaultListDescription,
  }

  // addColumn(title) {
  //   this.setState(state => (
  //     {
  //       columns: [
  //         ...state.columns,
  //         {
  //           key: state.columns.length ? state.columns[state.columns.length - 1].key + 1 : 0,
  //           title,
  //           icon: 'list-alt',
  //           cards: [],
  //         },
  //       ],
  //     }
  //   ));
  // }

  render() {
    const { title, image, description, columns, addColumn } = this.props;
    const moveCardHandler = result => {
      console.log(result);
      if (
        result.destination
        &&
        (
          result.destination.index != result.source.index
          ||
          result.destination.droppableId != result.source.droppableId
        )
      ) {
        createAction_moveCard({
          id: result.draggableId,
          dest: {
            index: result.destination.index,
            columnId: result.destination.droppableId,
          },
          src: {
            index: result.source.index,
            columnId: result.source.droppableId,
          },
        });
      }
    };
    return (
      <Container>
        <section className={styles.component}>
          <Hero titleText={title} imageSrc={image} />
          <div className={styles.description}>
            {description}
          </div>
          <div className={styles.columns}>
            <DragDropContext onDragEnd={moveCardHandler}>
              {columns.map(columnData => (
                <Column key={columnData.id} {...columnData} />
              ))}
            </DragDropContext>
          </div>
          <div className={styles.creator}>
            <Creator text={settings.columnCreatorText} action={addColumn} />
          </div>
        </section>
      </Container>
    );
  }
}

export default List;
