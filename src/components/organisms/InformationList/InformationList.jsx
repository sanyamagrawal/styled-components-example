import React from 'react';
import styled from 'styled-components';

import InformationCard from '../../molecules/InformationCard';

const StyledInformationCards = styled.div`
  display: flex;
`;

const onCardClick = (event) => {
  event.preventDefault();
  event.stopPropagation();

  console.info('Card Is Clicked');
};
const onDeleteClick = (event) => {
  event.preventDefault();
  event.stopPropagation();

  console.info('Delete Clicked');
};
const onEditClick = (event) => {
  event.preventDefault();
  event.stopPropagation();

  console.info('Edit Clicked');
};

const InformationList = () => {
  const detailsList = {
    email: 'sanyam4u@gmail.com',
    contact: '+91 9986421629',
  };

  return (
    <StyledInformationCards>
      <InformationCard
        name="John Smith"
        relation="Father"
        isEditable={true}
        isClickable={false}
        detailsList={detailsList}
        onEditClick={onEditClick}
        onDeleteClick={onDeleteClick}
      />
      <InformationCard
        name="John Smith"
        relation="Father"
        isEditable={false}
        isClickable={true}
        detailsList={detailsList}
        onCardClick={onCardClick}
      />
      <InformationCard
        name="John Smith"
        relation="Father"
        isEditable={false}
        isClickable={false}
        detailsList={detailsList}
      />
      <InformationCard
        name="John Smith"
        relation="Father"
        isEditable={true}
        isClickable={true}
        detailsList={detailsList}
        onCardClick={onCardClick}
        onEditClick={onEditClick}
        onDeleteClick={onDeleteClick}
      />
    </StyledInformationCards>
  );
};

export default InformationList;
