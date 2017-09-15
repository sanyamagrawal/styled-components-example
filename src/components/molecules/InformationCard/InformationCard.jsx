import React from 'react';
import PropTypes from 'prop-types';
import _noop from 'lodash/noop';
import styled from 'styled-components';

import Icon from '../../atoms/Icon';
import EditablePane from './EditablePane';
import DetailList from './DetailList';

const InformationCardStyled = styled.div`
  display: flex;
  justify-content: space-between;
  width: 28.9rem;
  height: 11.6rem;
  border-radius: 4px;
  background-color: #e2e8ed;
  margin: 0 2rem;
  padding: 1.2rem;
`;

const Clickable = styled.div `
  position: absolute;
  top: 50%;
  right: 0;
  display: flex;
  align-items: center;
  transform: translateY(-50%)
`;

const InformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const BasicInfoContainer = styled.div``;

const ActionCtn = styled.div`
  position: relative;
`;

const NameInfo = styled.div `
  color: #ea3b3b;
`;

const RelationInfo = styled.div `
  color: #4a4a4a;
  font-size: 1.2rem;
  opacity: 0.3;
`;

class InformationCard extends React.PureComponent {
  render() {
    const { name, relation, isEditable, isClickable, detailsList, onCardClick } = this.props;

    return (
      <InformationCardStyled onClick={onCardClick} role="button" tabIndex={0}>
        <InformationContainer>
          <BasicInfoContainer>
            <NameInfo>{name}</NameInfo>
            <RelationInfo>{relation}</RelationInfo>
          </BasicInfoContainer>
          <DetailList infoList={detailsList} />
        </InformationContainer>
        <ActionCtn>
          { isClickable ? <Clickable><Icon icon="icon_arrow" size="30" /> </Clickable> : null }
          <EditablePane isEditable={isEditable} {...this.props} />
        </ActionCtn>
      </InformationCardStyled>
    );
  }
}

InformationCard.propTypes = {
  name: PropTypes.string.isRequired,
  relation: PropTypes.string.isRequired,
  isEditable: PropTypes.bool,
  isClickable: PropTypes.bool,
  detailsList: PropTypes.shape(),
  onCardClick: PropTypes.func,
};

InformationCard.defaultProps = {
  isEditable: false,
  isClickable: false,
  detailsList: {},
  onCardClick: _noop,
};

export default InformationCard;
