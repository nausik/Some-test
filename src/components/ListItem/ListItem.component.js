import React from 'react';
import PropTypes from 'prop-types';

import './ListItem.css';

const ListItem = ({
  name,
  image,
  price,
  onClick,
}) => {
  return (
    <div className="item" onClick={onClick}>
      <div className="item__title">{name}</div>
      <div className="item__image">
        <img src={image} alt={name} />
      </div>
      Price: ${price}
    </div>
  );
};

ListItem.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ListItem;
