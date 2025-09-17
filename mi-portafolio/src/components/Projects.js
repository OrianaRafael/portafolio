import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink, FiCode, FiStar, FiFolder } from 'react-icons/fi';

const ProjectsSection = styled.section`
  padding: 6rem 2rem;
  background: ${props => props.theme.body};
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
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
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 3px;
    background: linear-gradient(90deg, ${props => props.theme.primary}, ${props => props.theme.accent});
    border-radius: 2px;
  }
`;

const Filters = styled(motion.div)`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
`;

const FilterButton = styled(motion.button)`
  padding: 0.8rem 1.5rem;
  border: 2px solid ${props => props.active ? props.theme.primary : props.theme.text}30;
  border-radius: 25px;
  background: ${props => props.active ? props.theme.primary : 'transparent'};
  color: ${props => props.active ? props.theme.body : props.theme.text};
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);

  &:hover {
    border-color: ${props => props.theme.primary};
    transform: translateY(-2px);
  }
`;

const ProjectsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const ProjectCard = styled(motion.div)`
  background: ${props => props.theme.card};
  border-radius: 20px;
  overflow: hidden;
  border: 1px solid ${props => props.theme.primary}20;
  box-shadow: 0 10px 30px ${props => props.theme.shadow};
  transition: all 0.3s ease;
  position: relative;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px ${props => props.theme.shadow};
    
    .project-image {
      transform: scale(1.05);
    }
    
    .project-overlay {
      opacity: 1;
    }
  }
`;

const ProjectImage = styled.div`
  height: 200px;
  overflow: hidden;
  position: relative;
  background: linear-gradient(135deg, ${props => props.theme.primary}20, ${props => props.theme.accent}20);

  &::before {
    content: '${props => props.category}';
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: ${props => props.theme.primary};
    color: ${props => props.theme.body};
    padding: 0.3rem 0.8rem;
    border-radius: 15px;
    font-size: 0.8rem;
    font-weight: 600;
    z-index: 2;
  }
`;

const ImagePlaceholder = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  color: ${props => props.theme.primary};
`;

const ProjectOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(0deg, ${props => props.theme.primary}90, transparent);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  opacity: 0;
  transition: opacity 0.3s ease;
`;

const ProjectLink = styled(motion.a)`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: ${props => props.theme.body};
  color: ${props => props.theme.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  font-size: 1.2rem;
  transition: all 0.3s ease;

  &:hover {
    background: ${props => props.theme.primary};
    color: ${props => props.theme.body};
    transform: scale(1.1);
  }
`;

const ProjectContent = styled.div`
  padding: 1.5rem;
`;

const ProjectTitle = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
  color: ${props => props.theme.text};
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const ProjectDescription = styled.p`
  color: ${props => props.theme.text}80;
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const ProjectTech = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const TechTag = styled.span`
  background: ${props => props.theme.primary}20;
  color: ${props => props.theme.primary};
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 600;
`;

const ProjectFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1rem;
  border-top: 1px solid ${props => props.theme.primary}20;
`;

const ProjectStars = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;
  color: ${props => props.theme.text}60;
  font-size: 0.9rem;
`;

const ViewMore = styled(motion.div)`
  text-align: center;
  margin-top: 3rem;
`;

const ViewMoreButton = styled(motion.button)`
  padding: 1rem 2rem;
  border: 2px solid ${props => props.theme.primary};
  border-radius: 25px;
  background: transparent;
  color: ${props => props.theme.primary};
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${props => props.theme.primary};
    color: ${props => props.theme.body};
    transform: translateY(-2px);
  }
`;

// Datos de ejemplo para proyectos
const projectsData = [
  {
    id: 1,
    title: "E-commerce React",
    description: "Plataforma de e-commerce completa con carrito de compras, pasarela de pagos y panel administrativo.",
    image: "🛒",
    category: "Fullstack",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    githubUrl: "https://github.com",
    liveUrl: "https://demo.com",
    stars: 45,
    featured: true
  },
  {
    id: 2,
    title: "Task Manager App",
    description: "Aplicación de gestión de tareas con drag & drop, notificaciones y sincronización en tiempo real.",
    image: "✅",
    category: "Frontend",
    technologies: ["React", "TypeScript", "Firebase", "Framer"],
    githubUrl: "https://github.com",
    liveUrl: "https://demo.com",
    stars: 32,
    featured: true
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "Dashboard meteorológico con visualización de datos en tiempo real y pronóstico extendido.",
    image: "🌤️",
    category: "Frontend",
    technologies: ["React", "Chart.js", "API", "CSS3"],
    githubUrl: "https://github.com",
    liveUrl: "https://demo.com",
    stars: 28,
    featured: false
  },
  {
    id: 4,
    title: "Social Media API",
    description: "API RESTful para red social con autenticación JWT, upload de imágenes y sockets.",
    image: "🔗",
    category: "Backend",
    technologies: ["Node.js", "Express", "MongoDB", "JWT"],
    githubUrl: "https://github.com",
    liveUrl: "https://demo.com",
    stars: 51,
    featured: true
  },
  {
    id: 5,
    title: "Portfolio Personal",
    description: "Sitio web portfolio personal con diseño responsive y modo oscuro/claro.",
    image: "🎨",
    category: "Frontend",
    technologies: ["React", "Styled Components", "Framer Motion"],
    githubUrl: "https://github.com",
    liveUrl: "https://demo.com",
    stars: 67,
    featured: false
  },
  {
    id: 6,
    title: "Chat en Tiempo Real",
    description: "Aplicación de chat con rooms, emojis y mensajes privados usando WebSockets.",
    image: "💬",
    category: "Fullstack",
    technologies: ["React", "Socket.io", "Node.js", "Redis"],
    githubUrl: "https://github.com",
    liveUrl: "https://demo.com",
    stars: 39,
    featured: true
  }
];

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [visibleProjects, setVisibleProjects] = useState(6);

  const filters = [
    { key: 'all', label: 'Todos' },
    { key: 'frontend', label: 'Frontend' },
    { key: 'backend', label: 'Backend' },
    { key: 'fullstack', label: 'Fullstack' },
    { key: 'featured', label: 'Destacados' }
  ];

  const filteredProjects = projectsData
    .filter(project => {
      if (filter === 'all') return true;
      if (filter === 'featured') return project.featured;
      return project.category.toLowerCase() === filter;
    })
    .slice(0, visibleProjects);

  const loadMore = () => {
    setVisibleProjects(prev => prev + 3);
  };

  return (
    <ProjectsSection id="projects">
      <Title
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Mis Proyectos
      </Title>

      <Filters
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {filters.map((filterItem) => (
          <FilterButton
            key={filterItem.key}
            active={filter === filterItem.key}
            onClick={() => setFilter(filterItem.key)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {filterItem.label}
          </FilterButton>
        ))}
      </Filters>

      <AnimatePresence>
        <ProjectsGrid
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              layout
            >
              <ProjectImage category={project.category}>
                <ImagePlaceholder>
                  {project.image}
                </ImagePlaceholder>
                <ProjectOverlay className="project-overlay">
                  <ProjectLink
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FiGithub />
                  </ProjectLink>
                  <ProjectLink
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FiExternalLink />
                  </ProjectLink>
                </ProjectOverlay>
              </ProjectImage>

              <ProjectContent>
                <ProjectTitle>
                  <FiFolder /> {project.title}
                </ProjectTitle>
                <ProjectDescription>
                  {project.description}
                </ProjectDescription>
                <ProjectTech>
                  {project.technologies.map((tech, techIndex) => (
                    <TechTag key={techIndex}>
                      {tech}
                    </TechTag>
                  ))}
                </ProjectTech>
                <ProjectFooter>
                  <ProjectStars>
                    <FiStar /> {project.stars}
                  </ProjectStars>
                  <FiCode />
                </ProjectFooter>
              </ProjectContent>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </AnimatePresence>

      {visibleProjects < projectsData.length && (
        <ViewMore
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <ViewMoreButton
            onClick={loadMore}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Ver Más Proyectos
          </ViewMoreButton>
        </ViewMore>
      )}
    </ProjectsSection>
  );
};

export default Projects;