import React, { useState } from 'react';

const Resume: React.FC = () => {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  const toggleProject = (index: number) => {
    setExpandedProject(expandedProject === index ? null : index);
  };

  const skills = [
    { category: 'Front-End', items: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'React.js', 'Tailwind CSS', 'Bootstrap'] },
    { category: 'UI/UX Tools', items: ['Figma', 'Canva', 'CapCut'] },
    { category: 'Programming', items: ['Python (basics)', 'Java (OOP concepts)'] },
    { category: 'Version Control', items: ['Git', 'GitHub'] },
    { category: 'Web Concepts', items: ['REST APIs', 'Responsive Design', 'Web Accessibility'] },
  ];

  const projects = [
    {
      title: 'Sign Language Translator Website',
      description: 'Developed a basic web app that detects and interprets hand gestures for sign-language recognition.',
      details: [
        'Integrated simple machine-learning logic for gesture mapping and display',
        'Focused on accessibility and inclusive design',
        'Built with HTML, CSS, and JavaScript'
      ]
    },
    {
      title: 'Personal Portfolio Website',
      description: 'Designed and deployed a responsive portfolio site showcasing projects, skills, and contact information.',
      details: [
        'Implemented clean UI design principles with React and CSS animations',
        'Fully responsive across devices',
        'Showcases front-end development capabilities'
      ]
    },
    {
      title: 'Work Tracking System',
      description: 'Built a task-tracking web app for managing daily to-do lists and work logs.',
      details: [
        'Used localStorage for client-side data persistence',
        'Implemented task filtering by status',
        'Simple and intuitive user interface'
      ]
    }
  ];

  const certifications = [
    'Introduction to Web Development — Coursera',
    'JavaScript Basics — FreeCodeCamp',
    'Responsive Web Design — freeCodeCamp (in progress)'
  ];

  const softSkills = [
    'Adaptability',
    'Communication',
    'Teamwork',
    'Time Management',
    'Creative Thinking'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-12 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">

        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-8">
          <div className="flex flex-col md:flex-row justify-between items-start">
            {/* Left Section – Name / Title */}
            <div>
              <h1 className="text-4xl font-bold mb-1">BARRI RAJESH</h1>
              <p className="text-lg opacity-90">Web Developer</p>
            </div>

            {/* Right Section – Contact Info */}
                Hyderabad
            <div className="w-full md:w-1/2 mt-6 md:mt-0 flex flex-col items-end text-right space-y-">
              <p className="flex items-center justify-end">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                Hyderabad
              </p>
              <p className="flex items-center justify-end">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <a href="mailto:rajesh8109k1@gmail.com" className="hover:underline">rajesh8109k1@gmail.com</a>
              </p>
              <p className="flex items-center justify-end">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                +91 8309545370
              </p>
              <p className="flex items-center justify-end">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                <a href="https://github.com/8109k1?tab=repositories" target="_blank" rel="noreferrer" className="hover:underline">GitHub: 8190k1</a>
              </p>
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="p-8">
          {/* Career Objective */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-indigo-700 mb-4 border-b-2 border-indigo-200 pb-2 inline-block">Career Objective</h2>
            <p className="text-gray-700 leading-relaxed">
              Motivated and detail-oriented Computer Science undergraduate passionate about front-end web development and emerging technologies. 
              Skilled in crafting responsive, user-friendly interfaces and eager to learn new frameworks, collaborate on innovative projects, 
              and contribute to modern web applications.
            </p>
          </section>

          {/* Education */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-indigo-700 mb-4 border-b-2 border-indigo-200 pb-2 inline-block">Education</h2>
            <div className="pl-2">
              <h3 className="text-xl font-semibold text-gray-800">B.Tech in Computer Science & Engineering</h3>
              <p className="text-gray-600">MLR Institute of Technology — 2024 – 2028</p>
            </div>
          </section>

          {/* Technical Skills */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-indigo-700 mb-4 border-b-2 border-indigo-200 pb-2 inline-block">Technical Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {skills.map((skillGroup, index) => (
                <div key={index} className="bg-blue-50 rounded-lg p-4 border border-blue-100">
                  <h3 className="font-semibold text-lg text-indigo-700 mb-2">{skillGroup.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((item, i) => (
                      <span key={i} className="px-3 py-1 bg-white text-indigo-600 rounded-full text-sm font-medium border border-indigo-200">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Projects */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-indigo-700 mb-4 border-b-2 border-indigo-200 pb-2 inline-block">Projects</h2>
            <div className="space-y-6">
              {projects.map((project, index) => (
                <div key={index} className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-all duration-300">
                  <div 
                    className="p-5 bg-gradient-to-r from-indigo-50 to-blue-50 flex justify-between items-center cursor-pointer"
                    onClick={() => toggleProject(index)}
                  >
                    <h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>
                    <button className="text-indigo-600">
                      {expandedProject === index ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                        </svg>
                      ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      )}
                    </button>
                  </div>
                  <div className={`p-5 bg-white ${expandedProject === index ? 'block' : 'hidden'}`}>
                    <p className="text-gray-700 mb-3">{project.description}</p>
                    <ul className="list-disc pl-5 text-gray-600 space-y-2">
                      {project.details.map((detail, i) => <li key={i}>{detail}</li>)}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Certifications */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-indigo-700 mb-4 border-b-2 border-indigo-200 pb-2 inline-block">Certifications & Learning</h2>
            <ul className="list-disc pl-5 text-gray-700 space-y-2">
              {certifications.map((cert, i) => <li key={i}>{cert}</li>)}
            </ul>
          </section>

          {/* Soft Skills */}
          <section>
            <h2 className="text-2xl font-bold text-indigo-700 mb-4 border-b-2 border-indigo-200 pb-2 inline-block">Soft Skills</h2>
            <div className="flex flex-wrap gap-3">
              {softSkills.map((skill, i) => (
                <span key={i} className="px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full font-medium">
                  {skill}
                </span>
              ))}
            </div>
          </section>
        </div>

        {/* Footer */}
        <div className="bg-gray-800 text-white text-center py-4 text-sm">
          <p>© {new Date().getFullYear()} Barri Rajesh. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Resume;

