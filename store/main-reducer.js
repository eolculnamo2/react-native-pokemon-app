import actions from './actions';

function reducer(state, action) {
  return actions[action.type](state, action);
}

export default reducer;
