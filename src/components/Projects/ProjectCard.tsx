import React from 'react';
import { useSpring, animated } from '@react-spring/web';

interface ProjectCardProps {
  title: string;
  desc: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, desc }) => {
  const [hovered, setHovered] = React.useState(false);
  const props = useSpring({
    transform: hovered ? 'scale(1.05)' : 'scale(1)',
    boxShadow: hovered
      ? '0 8px 32px 0 rgba(31, 38, 135, 0.37)'
      : '0 4px 16px 0 rgba(31, 38, 135, 0.17)',
  });

  return (
    <animated.div
      style={{
        ...props,
        background: '#fff',
        borderRadius: '1rem',
        padding: '2rem',
        margin: '1rem',
        cursor: 'pointer',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <h3>{title}</h3>
      <p>{desc}</p>
    </animated.div>
  );
};

export default ProjectCard;
