import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import _noop from 'lodash/noop';

const Icon = ({ onIconClick, icon, alt, tabIndex, size }) => {
  const IconStyle = styled.img`
    width: ${size}px;
    cursor: pointer;
  `;

  const image = require(`../../assets/images/${icon}.png`);
  return (
    <span onClick={onIconClick} role="button" tabIndex={tabIndex} >
      <IconStyle src={image} alt={alt} />
    </span>
  );
};

Icon.propTypes = {
  onIconClick: PropTypes.func.isRequired,
  icon: PropTypes.string.isRequired,
  alt: PropTypes.string,
  tabIndex: PropTypes.number,
  size: PropTypes.string,
};

Icon.defaultProps = {
  onIconClick: _noop,
  icon: 'icon_phone',
  alt: '',
  tabIndex: 0,
  size: '18',
};

export default Icon;
