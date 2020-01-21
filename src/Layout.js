import React from 'react';

import PropTypes from 'prop-types';

import './Layout.css';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <div className="layout__title">
        <h1>Picnic Test</h1>
      </div>
      <div className="layout__body">
        { children }
      </div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
