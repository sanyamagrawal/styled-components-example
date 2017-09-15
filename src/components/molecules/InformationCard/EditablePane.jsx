import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import _noop from 'lodash/noop';

import Icon from '../../atoms/Icon';

const EditablePaneStyle = styled.div`
    margin-left: auto;
`;

const EditablePane = ({ isEditable, onDeleteClick, onEditClick }) => {
  if (!isEditable) return null;

  return (
    <EditablePaneStyle>
      <Icon icon="button_edit" size="30" onIconClick={onEditClick} />
      <Icon icon="button_delete" size="30" onIconClick={onDeleteClick} />
    </EditablePaneStyle>
  );
};
EditablePane.propTypes = {
  isEditable: PropTypes.bool,
  onDeleteClick: PropTypes.func,
  onEditClick: PropTypes.func,
};

EditablePane.defaultProps = {
  isEditable: false,
  onDeleteClick: _noop,
  onEditClick: _noop,
};

export default EditablePane;
