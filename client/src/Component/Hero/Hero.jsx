import React from 'react';
import styled from 'styled-components';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';

const HeroSection = styled.section`
  display: flex;
  flex-direction: column; /* Stack children vertically */
  align-items: flex-start;
  border-radius: 0;
  color: white;
  padding: 6rem 2rem; /* Adjust padding to fit your design */
  text-align: left; /* Align text to the left */
  background-size: cover; /* Ensure the gradient covers the entire section */
  background-repeat: no-repeat; /* Prevent background from repeating */
  background-position: center; /* Center the background */
  height: calc(39vh - 70px); /* Set height based on viewport height minus navbar height */
  position: relative; /* Ensure content is positioned correctly */
`;

const ContentWrapper = styled.div`
  margin-top: -35px; /* Move content up by 40px */
  margin-left: 30px; /* Move content 30px to the right */
  max-width: 600px; /* Set a max-width for better alignment */
`;

const Heading = styled.h1`
  font-size: 4rem; /* Increased font size */
  font-weight: bold; /* Make heading bold */
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 1.2rem;
  margin-bottom: 20px;
  line-height: 1.3; /* Increase line height for readability */
  max-width: 100%; /* Ensure description width does not exceed container */
  max-height: 4.8rem; /* Adjust based on your line-height and number of lines */
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3; /* Limit to 3 lines */
  -webkit-box-orient: vertical;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 1rem;
  color: white;
  background-color: transparent; /* Transparent background */
  border: 2px solid white; /* White border */
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: white;
    color: rgba(30, 144, 255, 0.8); /* Change text color on hover */
  }
`;

const SocialIcons = styled.div`
  margin-top: 20px; /* Space above the icons */
  display: flex;
  gap: 1rem;

  & a {
    color: white;
    font-size: 1.5rem;
    transition: color 0.3s ease;

    &:hover {
      color: rgba(30, 144, 255, 0.8); /* Change icon color on hover */
    }
  }
`;

const Hero = () => {
  return (
    <HeroSection>
      <ContentWrapper>
        <Heading>Trip to Paradise</Heading>
        <Description>
          Discover the ultimate escape to paradise with our exclusive travel packages. 
          From breathtaking beaches to exotic adventures, we offer something for everyone. 
          Let us take you on a journey of a lifetime.
        </Description>
        <Button>Get Started</Button>
        <SocialIcons>
          <a href="https://facebook.com" aria-label="Facebook">
            <FaFacebookF />
          </a>
          <a href="https://youtube.com" aria-label="YouTube">
            <FaYoutube />
          </a>
          <a href="https://instagram.com" aria-label="Instagram">
            <FaInstagram />
          </a>
        </SocialIcons>
      </ContentWrapper>
    </HeroSection>
  );
};

export default Hero;
