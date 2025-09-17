// src/components/BackgroundParticles.js
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const ParticlesContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: -1;
  overflow: hidden;
`;

const Particle = styled.div`
  position: absolute;
  background: ${props => props.color};
  border-radius: 50%;
  opacity: ${props => props.opacity};
  animation: float ${props => props.duration}s infinite ease-in-out;
  animation-delay: ${props => props.delay}s;

  @keyframes float {
    0%, 100% { 
      transform: translateY(0px) rotate(0deg) scale(1);
    }
    50% { 
      transform: translateY(${props => props.floatDistance}px) rotate(180deg) scale(1.2);
    }
  }
`;

const BackgroundParticles = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const generateParticles = () => {
      const newParticles = [];
      for (let i = 0; i < 20; i++) {
        newParticles.push({
          id: i,
          size: Math.random() * 8 + 2,
          left: Math.random() * 100,
          top: Math.random() * 100,
          opacity: Math.random() * 0.1 + 0.05,
          duration: Math.random() * 10 + 5,
          delay: Math.random() * 5,
          floatDistance: Math.random() * 50 + 20
        });
      }
      setParticles(newParticles);
    };

    generateParticles();
  }, []);

  return (
    <ParticlesContainer>
      {particles.map(particle => (
        <Particle
          key={particle.id}
          color="var(--primary-color)"
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            opacity: particle.opacity,
            animationDuration: `${particle.duration}s`,
            animationDelay: `${particle.delay}s`,
            floatDistance: particle.floatDistance
          }}
        />
      ))}
    </ParticlesContainer>
  );
};

export default BackgroundParticles;