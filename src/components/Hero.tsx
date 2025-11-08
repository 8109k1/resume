import React from 'react';
import Typewriter from 'typewriter-effect';

const Hero: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16 text-center">
      <h1 className="text-5xl font-bold mb-4">Hi, I’m Barri Rajesh 👋</h1>
      <div className="text-2xl font-medium mb-6">
        <Typewriter
          options={{
            strings: [
              'Front-End Developer',
              'React Enthusiast',
              'Creative Web Designer',
              'Lifelong Learner'
            ],
            autoStart: true,
            loop: true,
          }}
        />
      </div>
      <a
        href="/BARRI_RAJESH_Resume.pdf"
        download
        className="bg-white text-indigo-700 px-6 py-3 font-semibold rounded-full shadow hover:bg-indigo-100 transition"
      >
        Download Resume
      </a>
    </section>
  );
};

export default Hero;
