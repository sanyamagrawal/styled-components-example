import React from 'react';
import styled from 'styled-components';

import InformationCard from '../../molecules/InformationCard';

const StyledInformationCards = styled.div`
  display: flex;
`;

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
      />
      <InformationCard
        name="John Smith"
        relation="Father"
        isEditable={false}
        isClickable={true}
        detailsList={detailsList}
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
      />
    </StyledInformationCards>
  );
};

export default InformationList;
