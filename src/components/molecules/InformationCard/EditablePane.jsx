import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Icon from '../../atoms/Icon';

const EditablePaneStyle = styled.div`
    margin-left: auto;
`;

const EditablePane = ({ isEditable }) => {
  if (!isEditable) return null;

  return (
    <EditablePaneStyle>
      <Icon icon="button_edit" size="30" />
      <Icon icon="button_delete" size="30" />
    </EditablePaneStyle>
  );
};
EditablePane.propTypes = {
  isEditable: PropTypes.bool,
};

EditablePane.defaultProps = {
  isEditable: false,
};

export default EditablePane;
