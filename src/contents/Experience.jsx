import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import React from 'react';

const ExperienceSection = ({ experiences }) => {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-4">Experience</h2>
      <div className="space-y-6">
        {experiences.experience.map((exp, index) => (
          <Card key={index} className="bg-gray-400 shadow-md rounded-lg">
            <CardHeader>
              <CardTitle className="text-xl font-semibold">{exp.title}</CardTitle>
              <p className="text-gray-500 text-xl">{exp.company}</p>
              <p className="text-gray-500">{exp.duration}</p>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside text-gray-600">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx}>{resp}</li>
                ))}
              </ul>
              {exp.projects && (
                <div className="mt-4">
                  <h4 className="text-lg font-semibold">Projects:</h4>
                  <ul className="list-disc list-inside text-gray-600">
                    {exp.projects.map((proj, idx) => (
                      <li key={idx}>{proj}</li>
                    ))}
                  </ul>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
