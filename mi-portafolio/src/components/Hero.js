import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiDownload, FiGithub, FiLinkedin, FiMail, FiArrowRight } from 'react-icons/fi';

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 6rem 2rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
`;

const HeroContent = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  align-items: center;
  position: relative;
  z-index: 2;

  @media (min-width: 968px) {
    grid-template-columns: 1.5fr 1fr;
  }
`;

const TextContent = styled.div`
  text-align: center;

  @media (min-width: 968px) {
    text-align: left;
  }
`;

const Title = styled(motion.h1)`
  font-size: clamp(2.5rem, 5vw, 4rem);
  margin-bottom: 1rem;
  background: linear-gradient(135deg, ${props => props.theme.primary}, ${props => props.theme.accent});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1.2;
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 100%;
    height: 3px;
    background: linear-gradient(90deg, ${props => props.theme.primary}, transparent);
    border-radius: 2px;
  }
`;

const Highlight = styled.span`
  color: ${props => props.theme.primary};
  font-weight: 700;
`;

const Subtitle = styled(motion.p)`
  font-size: clamp(1.2rem, 3vw, 1.8rem);
  margin-bottom: 1.5rem;
  color: ${props => props.theme.text}90;
  font-weight: 300;
`;

const Description = styled(motion.p)`
  font-size: 1.1rem;
  margin-bottom: 2.5rem;
  line-height: 1.7;
  max-width: 600px;
  color: ${props => props.theme.text}80;
`;

const ButtonGroup = styled(motion.div)`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 2rem;

  @media (min-width: 968px) {
    justify-content: flex-start;
  }
`;

const PrimaryButton = styled(motion.a)`
  padding: 1rem 2rem;
  background: linear-gradient(135deg, ${props => props.theme.primary}, ${props => props.theme.accent});
  border: none;
  border-radius: 50px;
  text-decoration: none;
  color: ${props => props.theme.body};
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px ${props => props.theme.primary}40;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 25px ${props => props.theme.primary}60;
  }
`;

const SecondaryButton = styled(PrimaryButton)`
  background: transparent;
  border: 2px solid ${props => props.theme.primary};
  color: ${props => props.theme.primary};
  box-shadow: none;

  &:hover {
    background: ${props => props.theme.primary};
    color: ${props => props.theme.body};
  }
`;

const SocialLinks = styled(motion.div)`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  margin-top: 2rem;

  @media (min-width: 968px) {
    justify-content: flex-start;
  }
`;

const SocialLink = styled(motion.a)`
  color: ${props => props.theme.text};
  font-size: 1.8rem;
  transition: all 0.3s ease;
  padding: 0.5rem;
  border-radius: 50%;
  background: ${props => props.theme.card};
  box-shadow: 0 4px 10px ${props => props.theme.shadow};

  &:hover {
    color: ${props => props.theme.primary};
    transform: translateY(-3px);
    box-shadow: 0 6px 15px ${props => props.theme.primary}40;
  }
`;

const TechBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 1;
  pointer-events: none;
`;

const TechShape = styled(motion.div)`
  position: absolute;
  background: ${props => props.theme.primary}08;
  border: 1px solid ${props => props.theme.primary}20;
  border-radius: ${props => props.circle ? '50%' : '15px'};
  backdrop-filter: blur(10px);
  filter: drop-shadow(0 10px 20px ${props => props.theme.primary}15);
`;

const AnimatedShape = ({ style, circle = false, animation }) => (
  <TechShape 
    circle={circle}
    initial={animation.initial}
    animate={animation.animate}
    transition={animation.transition}
    style={style}
  />
);

const CodeSnippet = styled(motion.div)`
  background: ${props => props.theme.card};
  padding: 2rem;
  border-radius: 20px;
  border: 1px solid ${props => props.theme.primary}20;
  box-shadow: 0 20px 40px ${props => props.theme.shadow};
  font-family: 'Fira Code', monospace;
  max-width: 100%;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 3px;
    height: 100%;
    background: linear-gradient(180deg, ${props => props.theme.primary}, ${props => props.theme.accent});
  }

  @media (min-width: 968px) {
    max-width: 400px;
  }
`;

const CodeLine = styled.div`
  color: ${props => props.theme.text};
  font-size: 0.95rem;
  margin-bottom: 0.8rem;
  display: flex;
  align-items: center;

  &.comment {
    color: ${props => props.theme.text}60;
    font-style: italic;
  }

  &.function {
    color: ${props => props.theme.primary};
  }

  &.variable {
    color: ${props => props.theme.accent};
  }

  &.string {
    color: ${props => props.theme.secondary};
  }

  &.number {
    color: ${props => props.theme.primary};
  }
`;

const BlinkingCursor = styled.span`
  display: inline-block;
  width: 8px;
  height: 1.2em;
  background: ${props => props.theme.primary};
  margin-left: 4px;
  animation: blink 1s infinite;

  @keyframes blink {
    0%, 50% { opacity: 1; }
    51%, 100% { opacity: 0; }
  }
`;

const Hero = () => {
  const shapesAnimation = [
    {
      initial: { opacity: 0, scale: 0.8, rotate: -45 },
      animate: { opacity: 1, scale: 1, rotate: 0 },
      transition: { duration: 1.5, delay: 0.5 }
    },
    {
      initial: { opacity: 0, scale: 0.8, rotate: 45 },
      animate: { opacity: 1, scale: 1, rotate: 0 },
      transition: { duration: 1.5, delay: 0.7 }
    },
    {
      initial: { opacity: 0, scale: 0.8 },
      animate: { opacity: 1, scale: 1 },
      transition: { duration: 1.5, delay: 0.9 }
    }
  ];

  return (
    <HeroSection id="home">
      <TechBackground>
        <AnimatedShape
          circle
          animation={shapesAnimation[0]}
          style={{
            width: '400px',
            height: '400px',
            top: '-200px',
            right: '-200px',
          }}
        />
        <AnimatedShape
          animation={shapesAnimation[1]}
          style={{
            width: '250px',
            height: '250px',
            bottom: '100px',
            left: '-125px',
            rotate: '45deg'
          }}
        />
        <AnimatedShape
          circle
          animation={shapesAnimation[2]}
          style={{
            width: '200px',
            height: '200px',
            top: '50%',
            right: '20%',
            translateY: '-50%'
          }}
        />
      </TechBackground>

      <HeroContent>
        <TextContent>
          <Title
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Hola, soy <Highlight>[Tu Nombre]</Highlight>
          </Title>
          
          <Subtitle
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Desarrollador <Highlight>Frontend</Highlight> & UI/UX
          </Subtitle>
          
          <Description
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Creo experiencias digitales increíbles con React, JavaScript y las últimas tecnologías web. 
            Transformo ideas en código elegante y funcional. ☕
          </Description>
          
          <ButtonGroup
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <PrimaryButton
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiMail /> Contáctame <FiArrowRight />
            </PrimaryButton>
            
            <SecondaryButton
              href="/cv.pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiDownload /> Descargar CV
            </SecondaryButton>
          </ButtonGroup>

          <SocialLinks
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <SocialLink
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <FiGithub />
            </SocialLink>
            
            <SocialLink
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <FiLinkedin />
            </SocialLink>
            
            <SocialLink
              href="mailto:tu@email.com"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <FiMail />
            </SocialLink>
          </SocialLinks>
        </TextContent>

        <CodeSnippet
          initial={{ opacity: 0, x: 50, rotate: 5 }}
          animate={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ duration: 1, delay: 1, type: "spring" }}
          whileHover={{ y: -10, transition: { duration: 0.3 } }}
        >
          <CodeLine className="comment">// Mi stack principal</CodeLine>
          <CodeLine className="function">const</CodeLine>
          <CodeLine>
            <span className="variable">techStack</span> = [
          </CodeLine>
          <CodeLine>&nbsp;&nbsp;<span className="string">"React"</span>,</CodeLine>
          <CodeLine>&nbsp;&nbsp;<span className="string">"JavaScript"</span>,</CodeLine>
          <CodeLine>&nbsp;&nbsp;<span className="string">"TypeScript"</span>,</CodeLine>
          <CodeLine>&nbsp;&nbsp;<span className="string">"Node.js"</span></CodeLine>
          <CodeLine>];<BlinkingCursor /></CodeLine>
          <CodeLine className="comment">// Always learning 🚀</CodeLine>
        </CodeSnippet>
      </HeroContent>
    </HeroSection>
  );
};

export default Hero;