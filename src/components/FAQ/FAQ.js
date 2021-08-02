import React from 'react';
import Container from '../Container/Container';
import { FAQContent } from '../../data/dataStore';
import Hero from '../Hero/Hero';

const FAQ = () => (
  <Container>
    <Hero titleText={FAQContent.title} imageSrc={FAQContent.image} />
    <p>{FAQContent.text}</p>
  </Container>
);

export default FAQ;