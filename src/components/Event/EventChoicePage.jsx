import React from 'react';
import ChoiceSection from '../ChoiceSection';
import eventImage from './ca.jpg'; // Using an existing event image as cover
import eventImage2 from './e2.png';
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

const EventChoicePage = () => {
  const choices = [
    {
      title: 'Events (2025-2026)',
      subtitle: 'Upcoming and Current Innovations',
      image: eventImage,
      link: '/events/2025'
    },
    {
      title: 'Events (2024-2025)',
      subtitle: 'Archived Highlights',
      image: eventImage2,
      link: '/events/2024'
    }
  ];

  return (
    <div style={{ minHeight: 'auto', paddingBottom: '2rem' }}>
      <SectionTitle>Our Events</SectionTitle>
      <ChoiceSection choices={choices} />
    </div>
  );
};

export default EventChoicePage;
