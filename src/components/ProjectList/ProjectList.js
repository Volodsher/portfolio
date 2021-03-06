import React from 'react';
import './ProjectList.css';
// import PropTypes from 'prop-types';
import allTypes from '../../types/index';

import ProjectItem from '../ProjectItem/ProjectItem';

export const ProjectList = ({ projects }) => {
  const listOfProjects = projects.map((project, numb) => (
    <ProjectItem
      key={project.id}
      name={project.name}
      url={project.url}
      urlCode={project.urlCode}
      imageUrl={project.imageUrl}
      technologies={project.technologies}
    />
  ));

  return (
    <div className="projectList">
      {listOfProjects}
    </div>
  );
};

ProjectList.propTypes = allTypes;

export default ProjectList;
