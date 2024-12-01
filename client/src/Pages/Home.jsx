import React from 'react';
import Navigation from '../Component/Navigation/Navigation';
import Hero from '../Component/Hero/Hero';
import Pictures from '../Component/Filter/Filter';
import styled from 'styled-components';
import Background from '../assets/Background.jpg';
import Footer from '../Component/Footer/Footer';
import Destination from "../Component/Destination/Destination"
import Middle from '../Component/Middle/Middle';
import DestinationCard from '../Component/DestinationCards/DestinationCard';
import Travelling from '../Component/Travelling/Travelling';
import Hotels from '../Component/Hotel/Hotel';
import FilterOptions from '../Component/FilterOptions/FIlterOptions';
// Shared styled-component for gradient background
const GradientBackground = styled.div`
  background: linear-gradient(
    to top right,
    rgba(30, 144, 255, 0.5), /* Dodger Blue with reduced opacity */
    rgba(255, 255, 255, 0.1) /* White with reduced opacity */
  );
  padding: 20px;
  border-radius: 0 0 0 0;

`;

const PageContainer = styled.div`
  background-image: url(${Background});
  background-size: cover;
  background-position: center;
  // min-height: 90vh;
  max-height:104vh;
  border-radius: 0  ;
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
`;

const Home = () => {
  return (
    <>
    <PageContainer>
      <Navigation />
      <GradientBackground>
        <Hero />
      </GradientBackground>
    </PageContainer>
    <Middle/>
    <Pictures/>
    <FilterOptions/>
    <DestinationCard/>
   
    <Destination/>
    <Travelling/>
    <Hotels/>
    <Footer/>

    </>
  );
};

export default Home;
