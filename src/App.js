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
      <ProjectList projects={projects} />
    </div>
  );
}

export default App;
