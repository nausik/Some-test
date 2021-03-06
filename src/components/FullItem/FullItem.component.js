import React from 'react';
import PropTypes from 'prop-types';

import './FullItem.css';

const FullItem = ({
  name,
  image,
  price,
  description,
}) => {
  return (
    <div className="full-item">
      <h3 className="full-item__title">{name}</h3>
      <div className="full-item__image">
        <img src={image} alt={name} />
      </div>
      <div className="list-item__price">
        Price: ${price}
      </div>
      <div className="list-item__description">
        Description: {description}
      </div>
    </div>
  );
};

FullItem.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
};


export default FullItem;
