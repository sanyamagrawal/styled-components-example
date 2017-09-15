import React from 'react';
import PropTypes from 'prop-types';
import _map from 'lodash/map';

import DetailListItem from './DetailListItem';

const DetailList = ({ infoList }) => {
  const items = _map(infoList, (value, key) => (
    <DetailListItem value={value} key={key} type={key} />
  ));

  return (<div>{items}</div>);
};

DetailList.propTypes = {
  infoList: PropTypes.object,
};

DetailList.defaultProps = {
  infoList: {},
};

export default DetailList;
