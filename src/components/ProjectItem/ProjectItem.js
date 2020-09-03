import React from 'react';
import './ProjectItem.css';

function ProjectItem({ name, url, imageUrl, technologies, urlCode }) {
  return (
    <div className="projectItem">
      <a href={url}>
        <img
          className="projectImage"
          src={require(`../../images/${imageUrl}.png`)}
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
          <a className="containerLink" href={urlCode}
>
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

export default ProjectItem;
