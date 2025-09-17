import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiCode, FiAward, FiZap, FiUsers } from 'react-icons/fi';

const AboutSection = styled.section`
  padding: 4.8rem 1rem;
  background: ${props => props.theme.body};
  max-width: 1200px;
  margin: 0 auto;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Header = styled.div`
  text-align: center;
`;

// Solo modifica el Title en About.js así:
const Title = styled(motion.h2)`
  font-size: 3rem;
  font-weight: 800;
  background: linear-gradient(135deg, ${props => props.theme.primary}, ${props => props.theme.accent});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 1rem;
  position: relative;
  padding-bottom: 1rem;
  text-align: center;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 3px;
    background: linear-gradient(90deg, ${props => props.theme.primary}, ${props => props.theme.accent});
    border-radius: 2px;
  }
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const MainContent = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  
  @media (min-width: 1024px) {
    grid-template-columns: 1.2fr 0.8fr;
    gap: 3rem;
    align-items: start;
  }
`;

const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Intro = styled(motion.div)`
  text-align: center;
  
  @media (min-width: 1024px) {
    text-align: left;
  }
`;

const MainTitle = styled.h3`
  font-size: 2rem;
  color: ${props => props.theme.text};
  font-weight: 700;
  line-height: 1.4;
  margin-bottom: 1.5rem;
  
  span {
    background: linear-gradient(135deg, ${props => props.theme.primary}, ${props => props.theme.accent});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  
  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const Description = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: ${props => props.theme.text}90;
  margin-bottom: 1rem;
  text-align: justify;
`;

const Divider = styled.div`
  height: 2px;
  background: linear-gradient(90deg, 
    transparent, 
    ${props => props.theme.primary}40, 
    transparent
  );
  margin: 0 0;
`;

const TechSection = styled(motion.div)`
  margin-top: 0px;
`;

const TechTitle = styled.h4`
  font-size: 1.4rem;
  color: ${props => props.theme.text};
  margin-bottom: 1.5rem;
  font-weight: 600;
  text-align: center;
  
  @media (min-width: 1024px) {
    text-align: left;
  }
`;

const TechGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem;
`;

const TechBadge = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 1rem;
  background: ${props => props.theme.card};
  border: 1px solid ${props => props.theme.primary}20;
  border-radius: 12px;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px ${props => props.theme.shadow};
    border-color: ${props => props.theme.primary}40;
  }
`;

const TechIcon = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 8px;
  background: linear-gradient(135deg, ${props => props.theme.primary}, ${props => props.theme.accent});
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  font-size: 0.9rem;
`;

const TechName = styled.span`
  color: ${props => props.theme.text};
  font-weight: 600;
  font-size: 0.95rem;
`;

const VisualContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  align-items: center;
`;

const ImageContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
`;

const ProfileImageContainer = styled.div`
  width: 250px;
  height: 300px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 20px 40px ${props => props.theme.shadow};
  border: 3px solid ${props => props.theme.primary}30;
`;

const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  width: 100%;
  max-width: 400px;
`;

const StatCard = styled(motion.div)`
  background: ${props => props.theme.card};
  padding: 1.5rem;
  border-radius: 15px;
  text-align: center;
  border: 1px solid ${props => props.theme.primary}20;
  box-shadow: 0 8px 25px ${props => props.theme.shadow};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 120px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background: linear-gradient(90deg, ${props => props.theme.primary}, ${props => props.theme.accent});
  }
`;

const StatIcon = styled.div`
  font-size: 1.5rem;
  color: ${props => props.theme.primary};
  margin-bottom: 0.5rem;
`;

const StatNumber = styled.h3`
  font-size: 1.5rem;
  color: ${props => props.theme.primary};
  margin-bottom: 0.3rem;
  font-weight: 700;
`;

const StatLabel = styled.p`
  color: ${props => props.theme.text}70;
  font-weight: 500;
  font-size: 0.8rem;
`;

const About = () => {

  const technologies = [
    { name: "React", icon: "⚛️" },
    { name: "Vue", icon: "📜" },
    { name: "TypeScript", icon: "🔷" },
    { name: "Node.js", icon: "🟢" },
    { name: "Tailwind", icon: "🎨" },
    { name: "Git", icon: "📦" }
  ];

  const stats = [
    { icon: <FiCode />, number: "2+", label: "Años Experiencia" },
    { icon: <FiAward />, number: "15+", label: "Proyectos Completados" },
    { icon: <FiZap />, number: "100%", label: "Dedicación" },
    { icon: <FiUsers />, number: "10+", label: "Clientes Satisfechos" }
  ];

  return (
    <AboutSection id="about">
      <Container>
        <Header>
          <Title
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Sobre Mí
          </Title>
        </Header>

        <MainContent>
          <TextContent>
            <Intro
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <MainTitle>
                Más que un Desarrollador,<br />
                <span>un Líder de Proyectos</span>
              </MainTitle>

              <Description>
                Soy Ingeniero de Sistemas con especialización en Gestión de Proyectos, 
                dedicado a crear soluciones digitales que no solo son técnicamente sólidas, sino también estratégicamente efectivas.
              </Description>
              
              <Description>
                Mi expertise único combina:

                <ul>Liderazgo técnico en desarrollo web con React, JavaScript y frameworks modernos</ul>

                <ul>Gestión ágil de proyectos (Scrum, Kanban) que garantizan entregas puntuales y dentro del presupuesto</ul>
              </Description>
            </Intro>

            <Divider />

            <TechSection
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <TechTitle>Tecnologías Principales</TechTitle>
              <TechGrid>
                {technologies.map((tech, index) => (
                  <TechBadge
                    key={tech.name}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <TechIcon>{tech.icon}</TechIcon>
                    <TechName>{tech.name}</TechName>
                  </TechBadge>
                ))}
              </TechGrid>
            </TechSection>
          </TextContent>

          <VisualContent>
            <ImageContainer
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <ProfileImageContainer>
                <ProfileImage 
                  src="../perfil.DNG"
                  alt="Líder de Proyectos - Desarrollador Frontend"
                />
              </ProfileImageContainer>
            </ImageContainer>

            <StatsGrid>
              {stats.map((stat, index) => (
                <StatCard
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <StatIcon>{stat.icon}</StatIcon>
                  <StatNumber>{stat.number}</StatNumber>
                  <StatLabel>{stat.label}</StatLabel>
                </StatCard>
              ))}
            </StatsGrid>
          </VisualContent>
        </MainContent>
      </Container>
    </AboutSection>
  );
};

export default About;