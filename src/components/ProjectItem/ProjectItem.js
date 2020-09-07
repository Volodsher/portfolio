import React from 'react';
import './ProjectItem.css';
import allTypes from '../../types/index';

function ProjectItem({ name, url, imageUrl, technologies, urlCode }) {
  return (
    <div className="projectItem">
      <a href={url}>
        <img
          className="projectImage"
          src={imageUrl}
          alt=""
        />
      </a>
      <div className="container">
        <h3>
          <a className="containerLink" href={url}>
            <span>{name}</span>
          </a>
        </h3>
        <h4>
          <a className="containerLink" href={urlCode}>
            {urlCode.length > 0 ? 'Review code' : ''}
          </a>
        </h4>
        <p>
          {technologies}
        </p>
      </div>
    </div>
  );
}

ProjectItem.propTypes = allTypes;

export default ProjectItem;
