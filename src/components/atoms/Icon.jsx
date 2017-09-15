import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import _noop from 'lodash/noop';

const Icon = ({ onClick, icon, alt, tabIndex, size }) => {
  const IconStyle = styled.img`
    width: ${size}px;
  `;

  const image = require(`../../assets/images/${icon}.png`);
  return (
    <span onClick={onClick} role="button" tabIndex={tabIndex} >
      <IconStyle src={image} alt={alt} />
    </span>
  );
};

Icon.propTypes = {
  onClick: PropTypes.func.isRequired,
  icon: PropTypes.string.isRequired,
  alt: PropTypes.string,
  tabIndex: PropTypes.number,
  size: PropTypes.number,
};

Icon.defaultProps = {
  onClick: _noop,
  icon: 'icon_phone',
  alt: '',
  tabIndex: 0,
  size: 18,
};

export default Icon;
