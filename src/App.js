import React from 'react';
// import logo from './logo.svg';
import { ProjectList } from './components/ProjectList/ProjectList';
import { projects } from './api/projects';
import './App.css';

function App() {
  return (
    <div className="app">
      <h1 className="header">
        Volodsher&rsquo;s Portfolio
      </h1>
      <a className="App-link" href="https://github.com/Volodsher/portfolio">
        Portfolio code
      </a>
      <ProjectList projects={projects} />
      <div className="footer">
        2019 - 2021 &#169;Volodsher
      </div>
    </div>
  );
}

export default App;
