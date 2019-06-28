export const ACTION_TYPES = {
  SET_DATA: 'SET_DATA',
};

export default (actions = {
  [ACTION_TYPES.SET_DATA]: (state, action) => action.payload,
});
