import React from 'react';
import data from "../data/data.json"
import { Card, CardContent, CardFooter, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { SkipBack, StepBack } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 p-6">
      <div className="container mx-auto">
        <div className="text-xl flex items-center justify-between p-2 rounded-md 
        bg-gradient-to-br from-cyan-400 via-gray-900 to-white;
         text-gray-500 hover:bg-slate-800 font-extrabold text-center mb-8">
        <Link to="/">
          <StepBack className='cursor-pointer'/>
        </Link>
          My Projects
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.projects.map((project, index) => (
             <Card 
             key={index} 
             className="relative shadow-md
              hover:shadow-cyan-400
               bg-gray-800 text-gray-500 
               transition-transform duration-500 ease-in-out hover:rotate-6"
           >
              <CardContent>
                <CardTitle className="text-xl font-extrabold text-gray-400">
                  {project.title}
                </CardTitle>
                <p className="text-gray-400 mt-2">
                  {project.description}
                </p>
              </CardContent>
              <CardFooter className="flex gap-6 justify-between">
                <Button 
                  onClick={() => window.location.href = project.link} 
                  variant="blue"

                >
                 Demo
                </Button>
                <Button 
                  onClick={() => window.location.href = project.github} 
                  variant="blue"
                >
                  Git
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
