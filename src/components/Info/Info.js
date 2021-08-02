import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import { infoContent } from '../../data/dataStore';

const Info = () => (
  <Container>
    <Hero titleText={infoContent.title} imageSrc={infoContent.image} />
    <p>{infoContent.text}</p>
  </Container >
);

export default Info;