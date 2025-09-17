import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { 
  FiCode, 
  FiLayout, 
  FiCloud
} from 'react-icons/fi';

const SkillsSection = styled.section`
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
  position: relative;
  padding-bottom: 1rem;
  
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
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const SkillCategory = styled(motion.div)`
  background: ${props => props.theme.card};
  padding: 2rem;
  border-radius: 15px;
  border: 1px solid ${props => props.theme.primary}20;
  box-shadow: 0 4px 20px ${props => props.theme.shadow};
`;

const SkillHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

const SkillIcon = styled.div`
  font-size: 2rem;
  color: ${props => props.theme.primary};
`;

const SkillTitle = styled.h3`
  font-size: 1.5rem;
  color: ${props => props.theme.text};
`;

const SkillList = styled.ul`
  list-style: none;
`;

const SkillItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  padding: 0.5rem 0;
  border-bottom: 1px solid ${props => props.theme.primary}10;
`;

const SkillName = styled.span`
  color: ${props => props.theme.text};
  font-weight: 500;
`;

const SkillLevel = styled.div`
  background: ${props => props.theme.primary}20;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  color: ${props => props.theme.primary};
  font-size: 0.9rem;
  font-weight: 600;
`;

const Skills = () => {
  const skillsData = [
    {
      icon: <FiCloud />,
      title: "Project Manager",
      skills: [
        { name: "Slack", level: "Intermedio" },
        { name: "Notion", level: "Intermedio" },
        { name: "Github", level: "Intermedio" },
        { name: "Google WorkSpace", level: "Intermedio" }
      ]
    },
    {
      icon: <FiCode />,
      title: "Frontend",
      skills: [
        { name: "React", level: "Avanzado" },
        { name: "Vue", level: "Avanzado" },
        { name: "HTML/CSS", level: "Experto" },
        { name: "TypeScript", level: "Intermedio" }
      ]
    },
    {
      icon: <FiLayout />,
      title: "UI/UX",
      skills: [
        { name: "Styled Components", level: "Avanzado" },
        { name: "Framer Motion", level: "Intermedio" },
        { name: "Figma", level: "Intermedio" },
        { name: "Responsive Design", level: "Experto" }
      ]
    },
    
  ];

  return (
    <SkillsSection id="skills">
      <Title
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Habilidades
      </Title>

      <SkillsGrid>
        {skillsData.map((category, index) => (
          <SkillCategory
            key={category.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ y: -5 }}
          >
            <SkillHeader>
              <SkillIcon>{category.icon}</SkillIcon>
              <SkillTitle>{category.title}</SkillTitle>
            </SkillHeader>
            <SkillList>
              {category.skills.map((skill, skillIndex) => (
                <SkillItem key={skill.name}>
                  <SkillName>{skill.name}</SkillName>
                  <SkillLevel>{skill.level}</SkillLevel>
                </SkillItem>
              ))}
            </SkillList>
          </SkillCategory>
        ))}
      </SkillsGrid>
    </SkillsSection>
  );
};

export default Skills;