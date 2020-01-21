import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { loadItem } from '../../ducks/item.duck';
import FullItem from './FullItem.component';

const FullItemContainer = ({ id }) => {
  const item = useSelector(state => state.item.item);
  const isLoaded = useSelector(state => state.item.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadItem(id));
  }, []);

  if (isLoaded) {
    return <h3>Item is loading...</h3>;
  }

  return (
    item
      ? (
        <FullItem
          name={item.name}
          image={item.image}
          price={item.price}
          description={item.description}
        />
      )
      : <h3>Item not found</h3>
  );
};

FullItemContainer.propTypes = {
  id: PropTypes.string.isRequired,
};

export default FullItemContainer;
