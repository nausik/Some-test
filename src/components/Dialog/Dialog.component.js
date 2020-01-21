import React from 'react';
import PropTypes from 'prop-types';

import FullItem from '../FullItem/FullItem.container';

import './Dialog.css';

const Dialog = ({ id, isVisible, onClose }) => {
  if (!isVisible) {
    return null;
  }

  return (
    <div className="dialog">
      <div className="dialog__background">
        <div className="dialog__content">
          <button
            type="button"
            className="dialog__close"
            onClick={onClose}
          >
            Close
          </button>
          <h1>Item:</h1>
          <FullItem id={id} />
        </div>
      </div>
    </div>
  );
};

Dialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  isVisible: PropTypes.bool.isRequired,
  id: PropTypes.string,
};

Dialog.defaultProps = {
  id: '',
};

export default Dialog;
