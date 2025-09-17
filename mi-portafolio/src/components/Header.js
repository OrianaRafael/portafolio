import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';
import { FiSun, FiMoon } from 'react-icons/fi';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  padding: 1.5rem 2rem;
  background: ${props => props.theme.card};
  backdrop-filter: blur(10px);
  z-index: 1000;
  border-bottom: 1px solid ${props => props.theme.primary}20;
  transition: all 0.3s ease;
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

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    display: ${props => props.$isOpen ? 'flex' : 'none'};
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background: ${props => props.theme.card};
    flex-direction: column;
    padding: 2rem 1rem;
    border-top: 1px solid ${props => props.theme.primary}20;
    gap: 1.5rem;
  }
`;

const NavLink = styled(motion.a)`
  color: ${props => props.theme.text};
  text-decoration: none;
  font-weight: 500;
  cursor: pointer;
  transition: color 0.3s ease;
  position: relative;

  &:hover {
    color: ${props => props.theme.primary};
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: ${props => props.theme.primary};
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;

const ThemeToggle = styled.button`
  background: none;
  border: none;
  color: ${props => props.theme.text};
  cursor: pointer;
  font-size: 1.2rem;
  padding: 0.5rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  
  &:hover {
    color: ${props => props.theme.primary};
    background: ${props => props.theme.primary}20;
    transform: rotate(30deg);
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
  const { isDarkMode, toggleTheme } = useTheme();

  // Función para manejar el clic en los enlaces
  const handleNavClick = (id) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Nav>
      <NavContent>
        <Logo
          href="#home"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('home');
          }}
        >
          {"<Portfolio />"}
        </Logo>

        <NavLinks $isOpen={isMenuOpen}>
          {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
            <NavLink
              key={item}
              href={`#${item}`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item);
              }}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </NavLink>
          ))}
          
          <ThemeToggle onClick={toggleTheme} aria-label="Toggle dark mode">
            {isDarkMode ? <FiSun /> : <FiMoon />}
          </ThemeToggle>
        </NavLinks>

        <MenuButton onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
          {isMenuOpen ? <FiX /> : <FiMenu />}
        </MenuButton>
      </NavContent>
    </Nav>
  );
};

export default Header;