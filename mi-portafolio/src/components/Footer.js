import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiHeart, FiGithub, FiLinkedin, FiMail, FiArrowUp } from 'react-icons/fi';

const FooterContainer = styled.footer`
  background: ${props => props.theme.card};
  padding: 3rem 2rem 1rem;
  border-top: 1px solid ${props => props.theme.border};
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const FooterTop = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  
  @media (min-width: 768px) {
    grid-template-columns: 2fr 1fr 1fr;
  }
`;

const FooterBrand = styled.div`
  text-align: center;
  
  @media (min-width: 768px) {
    text-align: left;
  }
`;

const Logo = styled(motion.a)`
  font-size: 2rem;
  font-weight: bold;
  color: ${props => props.theme.primary};
  text-decoration: none;
  cursor: pointer;
  display: inline-block;
  margin-bottom: 1rem;
`;

const BrandDescription = styled.p`
  color: ${props => props.theme.textSecondary};
  line-height: 1.6;
  max-width: 400px;
`;

const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const LinksTitle = styled.h4`
  color: ${props => props.theme.text};
  margin-bottom: 1rem;
  font-size: 1.2rem;
`;

const FooterLink = styled(motion.a)`
  color: ${props => props.theme.textSecondary};
  text-decoration: none;
  transition: color 0.3s ease;
  
  &:hover {
    color: ${props => props.theme.primary};
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  
  @media (min-width: 768px) {
    justify-content: flex-start;
  }
`;

const SocialLink = styled(motion.a)`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background: ${props => props.theme.body};
  color: ${props => props.theme.text};
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  font-size: 1.2rem;
  transition: all 0.3s ease;
  border: 1px solid ${props => props.theme.border};
  
  &:hover {
    background: ${props => props.theme.primary};
    color: ${props => props.theme.body};
    transform: translateY(-3px);
  }
`;

const FooterBottom = styled.div`
  border-top: 1px solid ${props => props.theme.border};
  padding-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const Copyright = styled.p`
  color: ${props => props.theme.textSecondary};
  text-align: center;
  
  @media (min-width: 768px) {
    text-align: left;
  }
`;

const MadeWith = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${props => props.theme.textSecondary};
`;

const BackToTop = styled(motion.button)`
  padding: 0.8rem 1.5rem;
  background: ${props => props.theme.primary};
  color: ${props => props.theme.body};
  border: none;
  border-radius: 25px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 600;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${props => props.theme.accent};
    transform: translateY(-2px);
  }
`;

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <FooterContainer>
      <FooterContent>
        <FooterTop>
          <FooterBrand>
            <Logo href="#home" whileHover={{ scale: 1.05 }}>
              {"<Portfolio />"}
            </Logo>
            <BrandDescription>
              Desarrollador frontend apasionado por crear experiencias digitales 
              excepcionales con las últimas tecnologías web.
            </BrandDescription>
            <SocialLinks>
              <SocialLink
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <FiGithub />
              </SocialLink>
              <SocialLink
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <FiLinkedin />
              </SocialLink>
              <SocialLink
                href="mailto:tu.email@ejemplo.com"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <FiMail />
              </SocialLink>
            </SocialLinks>
          </FooterBrand>

          <FooterLinks>
            <LinksTitle>Enlaces Rápidos</LinksTitle>
            <FooterLink href="#home">Inicio</FooterLink>
            <FooterLink href="#about">Sobre Mí</FooterLink>
            <FooterLink href="#skills">Habilidades</FooterLink>
            <FooterLink href="#projects">Proyectos</FooterLink>
            <FooterLink href="#contact">Contacto</FooterLink>
          </FooterLinks>

          <FooterLinks>
            <LinksTitle>Servicios</LinksTitle>
            <FooterLink href="#">Desarrollo Web</FooterLink>
            <FooterLink href="#">Diseño UI/UX</FooterLink>
            <FooterLink href="#">Aplicaciones React</FooterLink>
            <FooterLink href="#">Consultoría</FooterLink>
          </FooterLinks>
        </FooterTop>

        <FooterBottom>
          <Copyright>
            © {new Date().getFullYear()} Tu Nombre. Todos los derechos reservados.
          </Copyright>
          
          <MadeWith>
            Hecho con <FiHeart style={{ color: '#CE7D67' }} /> usando React & Styled Components
          </MadeWith>
          
          <BackToTop
            onClick={scrollToTop}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Volver Arriba <FiArrowUp />
          </BackToTop>
        </FooterBottom>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;