import { connect } from 'react-redux';
import SearchResults from './SearchResults';
import { getCardsForSearchResults } from '../../redux/cardsRedux';

// export const getCardsForColumn = ({ cards }, columnId) => cards.filter(card => card.columnId == columnId);

const mapStateToProps = (state, props) => {
  const searchString = props.match.params.searchString;
  console.log(searchString);

  return {
    cards: getCardsForSearchResults(state, searchString),
  };
};

export default connect(mapStateToProps)(SearchResults);