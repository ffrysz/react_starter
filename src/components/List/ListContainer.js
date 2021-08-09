import { connect } from 'react-redux';
import List from './List';
import { createActionAddColumn, getColumnsForList } from '../../redux/columnsRedux';
import { createAction_moveCard } from '../../redux/cardsRedux';

// export const getColumnsForList = ({ columns }, listId) => columns.filter(column => column.listId == listId);

const mapStateToProps = (state, props) => {
  const id = props.match.params.id;
  // console.log(id);
  const filteredLists = state.lists.filter(list => list.id == id);
  // console.log(filteredLists);
  const listParams = filteredLists[0] || {};

  return {
    ...listParams,
    columns: getColumnsForList(state, id),
  };
};

const mapDispatchToProps = (dispatch, props) => ({
  addColumn: title => dispatch(createActionAddColumn({
    listId: props.match.params.id,
    title,
  })),
  moveCard: payload => dispatch(createAction_moveCard(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(List);