import React from 'react';
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';
import {
  useParams,
} from 'react-router-dom';

import FullItem from '../../components/FullItem/FullItem.container';

const ItemPage = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  return (
    <div>
      <button
        onClick={() => {
          dispatch(push('/'));
        }}
        type="button"
      >
        Back to list
      </button>
      <h1>Item:</h1>
      <FullItem id={id} />
    </div>
  );
};

export default ItemPage;
