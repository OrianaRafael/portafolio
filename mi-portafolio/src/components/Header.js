import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  padding: 1.5rem 2rem;
  background: ${props => props.theme.card};
  backdrop-filter: blur(10px);
  z-index: 1000;
  border-bottom: 1px solid ${props => props.theme.primary}20;
`;

const NavContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(motion.a)`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${props => props.theme.primary};
  text-decoration: none;
  cursor: pointer;
`;

// Cambiar isOpen por $isOpen (prop transiente)
const NavLinks = styled.div`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    display: ${props => props.$isOpen ? 'flex' : 'none'};
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background: ${props => props.theme.card};
    flex-direction: column;
    padding: 1rem;
    border-top: 1px solid ${props => props.theme.primary}20;
  }
`;

const NavLink = styled(motion.a)`
  color: ${props => props.theme.text};
  text-decoration: none;
  font-weight: 500;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: ${props => props.theme.primary};
  }
`;

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: ${props => props.theme.text};
  cursor: pointer;
  font-size: 1.5rem;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Nav>
      <NavContent>
        <Logo
          href="#home"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {"<Portfolio />"}
        </Logo>

        {/* Cambiar isOpen por $isOpen */}
        <NavLinks $isOpen={isMenuOpen}>
          {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
            <NavLink
              key={item}
              href={`#${item.toLowerCase()}`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </NavLink>
          ))}
        </NavLinks>

        <MenuButton onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <FiX /> : <FiMenu />}
        </MenuButton>
      </NavContent>
    </Nav>
  );
};

export default Header;