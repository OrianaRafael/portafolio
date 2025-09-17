import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiMail, FiUser, FiMessageSquare, FiSend, FiMapPin, FiPhone, FiClock, FiPhoneCall } from 'react-icons/fi';

const ContactSection = styled.section`
  padding: 4rem 1rem;
  background: ${props => props.theme.body};
  max-width: 800px;
  margin: 0 auto;
  position: relative;
`;

const Title = styled(motion.h2)`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 2.5rem;
  background: linear-gradient(135deg, ${props => props.theme.primary}, ${props => props.theme.accent});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  
  &::after {
    content: '';
    display: block;
    width: 60px;
    height: 3px;
    background: linear-gradient(90deg, ${props => props.theme.primary}, ${props => props.theme.accent});
    margin: 1rem auto;
    border-radius: 2px;
  }
`;

const ContactContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const ContactInfo = styled(motion.div)`
  background: ${props => props.theme.card};
  padding: 2rem;
  border-radius: 16px;
  border: 1px solid ${props => props.theme.border};
  box-shadow: 0 8px 20px ${props => props.theme.shadow};
  flex: 1;
`;

const InfoTitle = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 1.5rem;
  color: ${props => props.theme.text};
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const InfoList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.8rem;
`;

const InfoIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${props => props.theme.primary}20;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.primary};
  font-size: 1rem;
  flex-shrink: 0;
`;

const InfoContent = styled.div`
  flex: 1;
`;

const InfoLabel = styled.p`
  font-weight: 600;
  color: ${props => props.theme.text};
  margin-bottom: 0.2rem;
  font-size: 0.9rem;
`;

const InfoText = styled.p`
  color: ${props => props.theme.textSecondary};
  line-height: 1.4;
  font-size: 0.9rem;
`;

const WhatsAppButton = styled(motion.a)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background: #25D366;
  color: white;
  padding: 1rem;
  border-radius: 10px;
  text-decoration: none;
  font-weight: 600;
  margin-top: 1.5rem;
  transition: all 0.3s ease;
  
  &:hover {
    background: #128C7E;
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(37, 211, 102, 0.3);
  }
`;

const ContactForm = styled(motion.form)`
  background: ${props => props.theme.card};
  padding: 2rem;
  border-radius: 16px;
  border: 1px solid ${props => props.theme.border};
  box-shadow: 0 8px 20px ${props => props.theme.shadow};
  flex: 1;
`;

const FormGroup = styled.div`
  margin-bottom: 1.2rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.4rem;
  color: ${props => props.theme.text};
  font-weight: 600;
  font-size: 0.9rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.8rem;
  border: 1px solid ${props => props.theme.border};
  border-radius: 8px;
  background: ${props => props.theme.body};
  color: ${props => props.theme.text};
  font-size: 0.9rem;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: ${props => props.theme.primary};
    box-shadow: 0 0 0 3px ${props => props.theme.primary}20;
  }
  
  &::placeholder {
    color: ${props => props.theme.textSecondary};
    font-size: 0.9rem;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.8rem;
  border: 1px solid ${props => props.theme.border};
  border-radius: 8px;
  background: ${props => props.theme.body};
  color: ${props => props.theme.text};
  font-size: 0.9rem;
  min-height: 120px;
  resize: vertical;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: ${props => props.theme.primary};
    box-shadow: 0 0 0 3px ${props => props.theme.primary}20;
  }
  
  &::placeholder {
    color: ${props => props.theme.textSecondary};
    font-size: 0.9rem;
  }
`;

const SubmitButton = styled(motion.button)`
  width: 100%;
  padding: 1rem;
  background: linear-gradient(135deg, ${props => props.theme.primary}, ${props => props.theme.accent});
  border: none;
  border-radius: 8px;
  color: ${props => props.theme.body};
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px ${props => props.theme.primary}40;
  }
  
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    transform: none;
  }
`;

const StatusMessage = styled(motion.div)`
  padding: 0.8rem;
  border-radius: 8px;
  margin-top: 1rem;
  text-align: center;
  font-weight: 600;
  font-size: 0.9rem;
  
  &.success {
    background: ${props => props.theme.tertiary}20;
    color: ${props => props.theme.tertiary};
    border: 1px solid ${props => props.theme.tertiary}40;
  }
  
  &.error {
    background: ${props => props.theme.error}20;
    color: ${props => props.theme.error};
    border: 1px solid ${props => props.theme.error}40;
  }
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('');

    // Simulación de envío (reemplazar con tu API)
    setTimeout(() => {
      setIsSubmitting(false);
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Limpiar mensaje después de 3 segundos
      setTimeout(() => setStatus(''), 3000);
    }, 2000);
  };

  return (
    <ContactSection id="contact">
      <Title
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Contacto
      </Title>

      <ContactContent>
        <ContactInfo
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <InfoTitle>
            <FiMail /> Información de Contacto
          </InfoTitle>
          <InfoList>
            <InfoItem>
              <InfoIcon>
                <FiMapPin />
              </InfoIcon>
              <InfoContent>
                <InfoLabel>Ubicación</InfoLabel>
                <InfoText>Oruro, Bolivia</InfoText>
              </InfoContent>
            </InfoItem>
            
            <InfoItem>
              <InfoIcon>
                <FiPhone />
              </InfoIcon>
              <InfoContent>
                <InfoLabel>Teléfono</InfoLabel>
                <InfoText>+591 73803997</InfoText>
              </InfoContent>
            </InfoItem>
            
            <InfoItem>
              <InfoIcon>
                <FiMail />
              </InfoIcon>
              <InfoContent>
                <InfoLabel>Email</InfoLabel>
                <InfoText>rafaeloriana2002@gmail.com</InfoText>
              </InfoContent>
            </InfoItem>
            
            <InfoItem>
              <InfoIcon>
                <FiClock />
              </InfoIcon>
              <InfoContent>
                <InfoLabel>Disponibilidad</InfoLabel>
                <InfoText>Lunes - Viernes: 9:00 - 18:00</InfoText>
              </InfoContent>
            </InfoItem>
          </InfoList>
          
          <WhatsAppButton
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <FiPhoneCall /> Contactar por WhatsApp
          </WhatsAppButton>
        </ContactInfo>

        <ContactForm
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <FormGroup>
            <Label htmlFor="name">Nombre</Label>
            <Input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Tu nombre completo"
              required
            />
          </FormGroup>
          
          <FormGroup>
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="tu.email@ejemplo.com"
              required
            />
          </FormGroup>
          
          <FormGroup>
            <Label htmlFor="subject">Asunto</Label>
            <Input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Asunto del mensaje"
              required
            />
          </FormGroup>
          
          <FormGroup>
            <Label htmlFor="message">Mensaje</Label>
            <TextArea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Escribe tu mensaje aquí..."
              required
            />
          </FormGroup>
          
          <SubmitButton
            type="submit"
            disabled={isSubmitting}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
            <FiSend />
          </SubmitButton>
          
          {status === 'success' && (
            <StatusMessage className="success" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              ¡Mensaje enviado con éxito! Te contactaré pronto.
            </StatusMessage>
          )}
        </ContactForm>
      </ContactContent>
    </ContactSection>
  );
};

export default Contact;