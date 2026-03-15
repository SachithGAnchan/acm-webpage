import React from 'react';
import ChoiceSection from '../ChoiceSection';
import styled from 'styled-components';

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 3rem;
  font-weight: 900;
  margin-top: 2rem;
  margin-bottom: 2rem;
  text-transform: uppercase;
  color: #fff;
  text-shadow: 3px 3px 0 #000;
`;

const MembersChoicePage = () => {
  const choices = [
    {
      title: 'Team (2025-2026)',
      subtitle: 'The Current Executive Force',
      image: '/images/1.jpg',
      link: '/members/2025'
    },
    {
      title: 'Team (2024-2025)',
      subtitle: 'The Past Leaders',
      image: '/images/nn.webp',
      link: '/members/2024'
    }
  ];

  return (
    <div style={{ minHeight: 'auto', paddingBottom: '2rem' }}>
      <SectionTitle>Our Members</SectionTitle>
      <ChoiceSection choices={choices} />
    </div>
  );
};

export default MembersChoicePage;
