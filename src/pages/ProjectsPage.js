// src/pages/ProjectsPage.js
import React from 'react';
import { Link } from 'react-router-dom';

const ProjectsPage = () => (
    <section className="container">
        <h2>Projects</h2>
        <div className="project">
            <h3>プロジェクト1</h3>
            <Link to="/projects/project1" className="project-link">詳細を見る</Link>
        </div>
        <div className="project">
            <h3>プロジェクト2</h3>
            <Link to="/projects/project2" className="project-link">詳細を見る</Link>
        </div>
        <div className="project">
            <h3>プロジェクト3</h3>
            <Link to="/projects/project3" className="project-link">詳細を見る</Link>
        </div>
    </section>
);

export default ProjectsPage;

