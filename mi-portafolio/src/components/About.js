import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiUser, FiCode, FiHeart } from 'react-icons/fi';

const AboutSection = styled.section`
  padding: 6rem 2rem;
  background: ${props => props.theme.body};
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled(motion.h2)`
  font-size: 3rem;
  text-align: center;
  margin-bottom: 3rem;
  background: linear-gradient(135deg, ${props => props.theme.primary}, ${props => props.theme.accent});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  align-items: center;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const TextContent = styled.div`
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
  }
`;

const Description = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 2rem;
  color: ${props => props.theme.text}90;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  margin-top: 2rem;
`;

const StatCard = styled(motion.div)`
  background: ${props => props.theme.card};
  padding: 1.5rem;
  border-radius: 15px;
  text-align: center;
  border: 1px solid ${props => props.theme.primary}20;
  box-shadow: 0 4px 20px ${props => props.theme.shadow};
`;

const StatIcon = styled.div`
  font-size: 2rem;
  color: ${props => props.theme.primary};
  margin-bottom: 1rem;
`;

const StatNumber = styled.h3`
  font-size: 2rem;
  color: ${props => props.theme.primary};
  margin-bottom: 0.5rem;
`;

const StatLabel = styled.p`
  color: ${props => props.theme.text}70;
  font-weight: 500;
`;

const ImageContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProfileImage = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: linear-gradient(135deg, ${props => props.theme.primary}, ${props => props.theme.accent});
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
  color: white;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="40" fill="none" stroke="white" stroke-width="2" opacity="0.3"/></svg>');
    background-size: cover;
  }
`;

const About = () => {
  return (
    <AboutSection id="about">
      <Title
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Sobre Mí
      </Title>

      <Content>
        <TextContent>
          <Description>
            Soy un apasionado desarrollador frontend con experiencia en la creación de 
            aplicaciones web modernas y responsivas. Me encanta transformar ideas en 
            experiencias digitales increíbles utilizando las últimas tecnologías.
          </Description>
          
          <Description>
            Mi enfoque se centra en escribir código limpio, eficiente y mantenible, 
            siempre buscando las mejores prácticas y nuevas tendencias en el desarrollo web.
          </Description>

          <StatsGrid>
            <StatCard
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -5 }}
            >
              <StatIcon>
                <FiCode />
              </StatIcon>
              <StatNumber>2+</StatNumber>
              <StatLabel>Años de experiencia</StatLabel>
            </StatCard>

            <StatCard
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ y: -5 }}
            >
              <StatIcon>
                <FiUser />
              </StatIcon>
              <StatNumber>15+</StatNumber>
              <StatLabel>Proyectos completados</StatLabel>
            </StatCard>

            <StatCard
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              whileHover={{ y: -5 }}
            >
              <StatIcon>
                <FiHeart />
              </StatIcon>
              <StatNumber>100%</StatNumber>
              <StatLabel>Dedicación</StatLabel>
            </StatCard>
          </StatsGrid>
        </TextContent>

        <ImageContainer
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <ProfileImage>
            👨‍💻
          </ProfileImage>
        </ImageContainer>
      </Content>
    </AboutSection>
  );
};

export default About;