import React from 'react';
import pfp from '../assets/huda_pic.jpeg';

function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-brown-100 text-center">
      <div className="mb-6">
        <img
          src={pfp}
          alt="Huda Ayaz"
          className="w-40 h-40 rounded-full border-4 border-brown-600"
        />
      </div>
      <h1 className="text-4xl font-bold text-brown-800 mb-4">Welcome to Huda Ayaz's Web Development Portfolio</h1>

      <p className="text-xl max-w-2xl text-brown-700 mb-6">
        I am a senior at Brooklyn College majoring in Computer Science. I have experience in software engineering through internships, projects, and various hackathons. My passion lies in creating innovative solutions and building meaningful applications. I am continuously expanding my skill set in web development and beyond.
      </p>

      <p className="text-lg text-brown-600">
        Explore my work and learn more about my skills and projects by clicking the tabs in the navbar above.
      </p>
    </div>
  );
}


export default HomePage;
