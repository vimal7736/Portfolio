import React from 'react';
import data from '../data/data.json';
import { Card, CardBody, CardSubtitle, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import ExperienceSection from './Experience';

const PortfolioPage = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold">{data.name}</h1>
        <h2 className="text-xl text-gray-700">{data.title}</h2>
        <p className="mt-2 text-gray-600">{data.summary}</p>
      </header>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Contact</h2>
        <ul className="list-disc list-inside text-gray-600">
          <li>Email: <a href={`mailto:${data.contact.email}`} className="text-blue-600">{data.contact.email}</a></li>
          <li>Phone: {data.contact.phone}</li>
          <li>LinkedIn: <a href={data.contact.linkedin} className="text-blue-600" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          <li>GitHub: <a href={data.contact.github} className="text-blue-600" target="_blank" rel="noopener noreferrer">GitHub</a></li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Technologies</h2>
        <ul className="list-disc list-inside text-gray-600">
          {data.technologies.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>
      </section>
      <ExperienceSection experiences={data} />

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.projects.map((project, index) => (
            <Card key={index} className="bg-white shadow-md rounded-lg">
              <CardBody>
                <CardTitle className="text-xl font-semibold">{project.title}</CardTitle>
                {/* <CardSubtitle className="text-gray-500 mb-2">{project.description}</CardSubtitle> */}

                {project.technologies.map((tech,index)=>(

                <ul>

                <li key={index} target="_blank" rel="noopener noreferrer" className=" text-gray-500">{tech}</li>
                </ul>
                ))}
              </CardBody>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;
