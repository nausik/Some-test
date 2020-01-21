import { getItem } from '../api/item.api';

import { cacheItem } from './cache.duck';

const NAME = 'ITEM';

const ITEM_LOADING = `${NAME}/ITEM_LOADING`;
const SET_ITEM = `${NAME}/SET_ITEM`;
const SET_ERROR = `${NAME}/SET_ERROR`;

const initialState = {
  item: null,
  loading: true,
  error: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ITEM_LOADING:
      return {
        ...initialState,
        loading: true,
      };
    case SET_ITEM:
      return {
        ...initialState,
        item: action.payload,
        loading: false,
      };
    case SET_ERROR:
      return {
        ...initialState,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export function loadItem(id) {
  return async (dispatch, getState) => {
    dispatch({
      type: ITEM_LOADING,
    });

    const cachedItem = getState().cache.items.filter(item => (
      item.product_id === id
    ));

    if (!cachedItem.length) {
      const listData = await getItem(id);

      if (!listData.error) {
        dispatch({
          type: SET_ITEM,
          payload: listData.response,
        });

        dispatch(cacheItem(listData.response));
      } else {
        dispatch({
          type: SET_ERROR,
          payload: listData.error,
        });
      }
    } else {
      dispatch({
        type: SET_ITEM,
        payload: cachedItem[0],
      });
    }
  };
}
