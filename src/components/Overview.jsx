import React from 'react';
import resumeData from '../data/resumeData.json';
import './Overview.css';

const Overview = () => {
    return (
        <div className="overview-container">
            <header className="header">
                <h1>{resumeData.name}</h1>
                <h2>{resumeData.title}</h2>
                <p className="summary">{resumeData.summary}</p>
            </header>

            <section className="contact-info">
                <h3>Contact Information</h3>
                <ul>
                    <li>Email: <a href={`mailto:${resumeData.contact.email}`}>{resumeData.contact.email}</a></li>
                    <li>Phone: <a href={`tel:${resumeData.contact.phone}`}>{resumeData.contact.phone}</a></li>
                    <li>LinkedIn: <a href={resumeData.contact.linkedin} target='_blank' without rel="noreferrer"  >{resumeData.contact.linkedin}</a></li>
                    <li>GitHub: <a href={resumeData.contact.github} target="_blank" rel="noopener noreferrer">{resumeData.contact.github}</a></li>

                    <li>Website: <a href={resumeData.contact.website} target="_blank" rel="noopener noreferrer">{resumeData.contact.website}</a></li>

                </ul>
            </section>

            <section className="skills">
                <h3>Technologies</h3>
                <div className="skills-grid">
                    {resumeData.technologies.map((tech, index) => (
                        <div className="skill-item">
                            <span>{tech}</span>

                        </div>
                    ))}

                </div>
            </section>
            <section className="projects">
                <h3>Projects</h3>
                <div className="projects-grid">
                    {resumeData.projects.map((project, index) => (
                        <div className="project-item" key={index}>
                            <h4>{project.title}</h4>
                            <p className="project-description">{project.description}</p>
                            <div className="project-tech">
                                {project.technologies.map((tech, i) => (
                                    <span className="tech-badge" key={i}>{tech}</span>
                                ))}
                            </div>
                            <div className="project-links">
                                {project.title !== "PawsBaeEstate" ?

                                    (<a className="tech-badge" href={project.link} target="_blank" rel="noopener noreferrer">Live Demo</a>) :
                                    (<a className="tech-badge" >On going Project</a>)
                                }

                                <a className="tech-badge" href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="experience">
                <h3>Experience</h3>
                {resumeData.experience.map((job, index) => (
                    <div className="job-item" key={index}>
                        <h4>{job.title} at {job.company}</h4>
                        <p className="job-duration">{job.duration}</p>
                        <ul>
                            <h1>Responsibilities</h1>
                            {job.responsibilities.map((responsibility, i) => (
                                <li key={i}>{responsibility}</li>
                            ))}

                        </ul>

                        {job.projects && (

                            <ul>
                                <h1>Project</h1>

                                {job?.projects?.map((projects, i) => (
                                    <li key={i}>{projects}</li>
                                ))}
                            </ul>
                        )}


                    </div>
                ))}
            </section>

            <section className="education">
                <h3>Education</h3>
                {resumeData.education.map((edu, index) => (
                    <div className="education-item" key={index}>
                        <h4>{edu.degree}</h4>
                        <p>{edu.school}, {edu.graduation_year}</p>
                    </div>
                ))}
            </section>
        </div>
    );
};

export default Overview;
