const NAME = 'CACHE';

const CACHE_ITEM = `${NAME}/CACHE_ITEM`;

const initialState = {
  items: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CACHE_ITEM:
      return {
        ...initialState,
        items: [...state.items, action.payload],
      };
    default:
      return state;
  }
};

export function cacheItem(item) {
  return async (dispatch) => {
    dispatch({
      type: CACHE_ITEM,
      payload: item,
    });
  };
}
