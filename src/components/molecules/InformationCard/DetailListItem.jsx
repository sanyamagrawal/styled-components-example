import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Icon from '../../atoms/Icon';

const ICON_MAP = {
  email: 'icon_email',
  phone: 'icon_phone',
};

const Value = styled.span`
  margin-left: 1rem;
  font-size: 1.4rem;
`;

const DetailRow = styled.div`
  margin-bottom: 0.5rem;
  font-size: 1.4rem;
  color: #4a4a4a
`;

const DetailListItem = ({ value, type }) => (
  <DetailRow key={type}>
    <Icon icon={ICON_MAP[type]} />
    <Value>{value}</Value>
  </DetailRow>
);

DetailListItem.propTypes = {
  value: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default DetailListItem;
