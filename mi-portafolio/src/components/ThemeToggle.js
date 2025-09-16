import React from 'react';
import styled from 'styled-components';
import { useTheme } from '../context/ThemeContext';
import { FiSun, FiMoon } from 'react-icons/fi';

const ToggleButton = styled.button`
  position: fixed;
  top: 20px;
  right: 20px;
  background: ${props => props.theme.primary};
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 1000;
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.1);
    background: ${props => props.theme.accent};
  }
`;

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <ToggleButton onClick={toggleTheme}>
      {isDarkMode ? <FiSun size={24} /> : <FiMoon size={24} />}
    </ToggleButton>
  );
};

export default ThemeToggle;