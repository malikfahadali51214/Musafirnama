  import React, { useState } from 'react';
  import styled from 'styled-components';

  const Navbar = styled.nav`
    background: linear-gradient(
      to right bottom,
      rgba(30, 144, 255, 0.8), /* Dodger Blue with transparency */
      rgba(255, 255, 255, 0.2) /* White with slight transparency */
    );
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 2rem;
  border-radius: 8px 0 0 0;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    position: relative;
    flex-wrap: wrap;
    margin: 0;

    @media (max-width: 768px) {
      padding: 0.5rem 1rem;
      flex-direction: column;
      align-items: center;
    }
  `;

  const Logo = styled.div`
    color: #FFFFFF; /* White */
    font-size: 1.8rem;
    font-weight: bold;
    cursor: pointer;
    flex: 1;

    @media (max-width: 768px) {
      font-size: 1.5rem;
      text-align: center;
      margin: 1rem 0;
    }
  `;

  const NavLinks = styled.div`
    display: flex;
    gap: 2rem;
    flex-grow: 1;
    justify-content: center;

    @media (max-width: 768px) {
      display: ${props => (props.showMenu ? 'flex' : 'none')};
      flex-direction: column;
      align-items: center;
      width: 100%;
      gap: 1rem;
      background: rgba(30, 144, 255, 0.9); /* Dodger Blue with more opacity */
      padding: 1rem 0;
      border-radius: 8px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
      position: absolute;
      top: 4rem;
      left: 0;
      z-index: 9999;
    }
  `;

  const NavLink = styled.a`
    color: white; /* Light Coral */
    text-decoration: none;
    font-size: 1.2rem;
    padding: 0.5rem 1rem;
    position: relative;
    border-radius: 4px;
    transition: color 0.3s ease;

    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      width: 0;
      height: 2px;
      background-color: white; /* Light Coral */
      transition: width 0.3s ease;
    }

    &:hover {
      color: #FFFFFF; /* White on hover */
    }

    &:hover::after {
      width: 100%;
    }

    @media (max-width: 768px) {
      font-size: 1rem;
      padding: 0.5rem;
    }
  `;

  const ActionButtons = styled.div`
    display: flex;
    gap: 1rem;

    @media (max-width: 768px) {
      display: none;
    }
  `;

  const ActionButton = styled.a`
    color: #FFFFFF; /* White text */
    background-color: rgba(30, 144, 255, 0.8); /* Light Coral */
    text-decoration: none;
    font-size: 1rem;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #32CD32; /* Slightly darker Light Coral on hover */
    }
  `;

  const MenuToggle = styled.div`
    display: none;
    font-size: 1.8rem;
    color: #FFFFFF; /* White */
    cursor: pointer;

    @media (max-width: 768px) {
      display: block;
    }
  `;

  const NavContainer = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;

    @media (max-width: 768px) {
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }
  `;

  const ResponsiveLoginButton = styled.div`
    display: none;

    @media (max-width: 768px) {
      display: block;
    }
  `;

  const Navigation = () => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
      setShowMenu(!showMenu);
    };

    return (
      <Navbar>
        <NavContainer>
          <MenuToggle onClick={toggleMenu} aria-label={showMenu ? "Close menu" : "Open menu"}>
            {showMenu ? <i className="fas fa-times"></i> : <i className="fas fa-bars"></i>}
          </MenuToggle>
          <Logo>Kisstech</Logo>
          <NavLinks showMenu={showMenu}>
            <NavLink href="/" aria-label="Home">Home</NavLink>
            <NavLink href="/Lawyer" aria-label="Lawyer">Lawyer</NavLink>
            <NavLink href="/Contact" aria-label="Contact">Contact</NavLink>
            <NavLink href="#" aria-label="Services">Services</NavLink>
          </NavLinks>
          <ResponsiveLoginButton>
            <ActionButton href="/login" aria-label="Login">Login</ActionButton>
          </ResponsiveLoginButton>
          <ActionButtons>
            <ActionButton href="/login" aria-label="Login">Login</ActionButton>
            <ActionButton href="/get-started" aria-label="Get Started">Get Started</ActionButton>
          </ActionButtons>
        </NavContainer>
      </Navbar>
    );
  };

  export default Navigation;
