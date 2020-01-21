import { getList } from '../api/list.api';

const NAME = 'LIST';

const ITEMS_LOADING = `${NAME}/ITEMS_LOADING`;
const SET_ITEMS = `${NAME}/SET_ITEMS`;
const SET_ERROR = `${NAME}/SET_ERROR`;

const initialState = {
  loading: false,
  items: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ITEMS_LOADING:
      return {
        ...initialState,
        loading: true,
      };
    case SET_ITEMS:
      return {
        ...initialState,
        loading: false,
        items: action.payload,
      };
    default:
      return state;
  }
};

export function loadItems() {
  return async (dispatch) => {
    dispatch({
      type: ITEMS_LOADING,
    });

    const listData = await getList();

    if (!listData.error) {
      dispatch({
        type: SET_ITEMS,
        payload: listData.response,
      });
    } else {
      dispatch({
        type: SET_ERROR,
        payload: listData.error,
      });
    }
  };
}
