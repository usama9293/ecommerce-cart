import React from 'react';
import PropTypes from 'prop-types';
import './backdrop.css';

function BackDrop({ show, click }) {
  return show && <div className="backdrop" onClick={click}></div>;
}

BackDrop.propTypes = {
  show: PropTypes.bool.isRequired,
  click: PropTypes.func.isRequired,
};

export default BackDrop;
