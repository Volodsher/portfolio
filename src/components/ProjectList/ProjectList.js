import React from 'react';
import './ProjectList.css';
import ProjectItem from '../ProjectItem/ProjectItem';

export const ProjectList = ({ projects }) => {
  let listOfProjects = projects.map((project, numb) => {
    return <ProjectItem
      key={project.id}
      name={project.name}
      url={project.url}
      urlCode={project.urlCode}
      imageUrl={project.imageUrl}
      technologies={project.technologies}
    />
  });

  return (
    <div className="projectList">
      {listOfProjects}
    </div>
  )
};

export default ProjectList;
