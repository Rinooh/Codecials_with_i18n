import React, { useState, useEffect } from 'react';
import { Animate } from "react-simple-animate";
import { useInView } from 'react-intersection-observer';

const OurProjectsV2 = () => {
  const [inView, setInView] = useState(false);
  const [translations, setTranslations] = useState(null);

  useEffect(() => {
    fetch(`/locales/${navigator.language}.json`)
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else {
          return fetch('/locales/en.json').then((response) => response.json());
        }
      })
      .then((data) => setTranslations(data))
      .catch((error) => {
        console.error('Error fetching translation:', error);
      });
  }, []);

  const { ref, inView: isElementInView, entry } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  useEffect(() => {
    if (isElementInView) {
      setInView(true);
    }
  }, [isElementInView]);
  
  if (!translations) {
    return <div>Loading...</div>;
  }

  const projectsData = [
    {
      title: 'Cocials',
      image: 'images/cocials.avif',
      description: translations.CocialsDescription,
    },
    {
      title: 'Divide by Zero',
      image: 'images/dbz.avif',
      description: translations.DBZDescription,
    },
    {
      title: 'Hoornhek',
      image: 'images/school.avif',
      description: translations.HoornhekDescription,
    },
  ];

  const ProjectCard = ({ title, image, description }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
      <div
        className="relative group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          src={image}
          alt={title}
          className={`w-full h-full object-cover rounded-lg ${isHovered ? 'opacity-80 blur-sm' : ''}`}
          loading="lazy"
        />
        {isHovered && (
          <div className="project-details absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <h3 className="text-white text-2xl font-bold mb-4">{title}</h3>
            <p className="text-white text-lg text-center">{description}</p>
          </div>
        )}
      </div>
    );
  };

  return (
    
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {projectsData.map((project, index) => (
        <ProjectCard key={index} title={project.title} image={project.image} description={project.description} />
      ))}
    </div>
  );
};

export default OurProjectsV2;
