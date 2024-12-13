import React from 'react';
import serenade from '../assets/serenade.png';
import simplisafe from '../assets/simplisafe.png';
import gitsight from '../assets/gitsight.png';

function ProjectShowcasePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-brown-100 text-center">
      <h1 className="text-5xl font-bold text-brown-800 mb-4">Project Showcase</h1>
      <p className="text-xl text-brown-700 max-w-2xl mb-6">
        Here are a few projects where I have applied my web development skills. These projects showcase my ability to create dynamic, user-friendly, and responsive websites and applications.
      </p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="max-w-sm rounded-lg shadow-lg bg-white">
          <img src={serenade} alt="Serenade" className="w-full h-48 object-cover rounded-t-lg"/>
          <div className="p-4">
            <h3 className="text-xl font-semibold text-brown-800">Serenade: A Virtual Karaoke Platform</h3>
            <p className="text-brown-600 mt-2">A real-time virtual karaoke platform where you can sing and view along with anyone from the comfort of your own home.</p>
          </div>
        </div>
        <div className="max-w-sm rounded-lg shadow-lg bg-white">
          <img src={simplisafe} alt="SimpliSafe" className="w-full h-48 object-cover rounded-t-lg"/>
          <div className="p-4">
            <h3 className="text-xl font-semibold text-brown-800">SimpliSafe: Safe Summaries Made Simple</h3>
            <p className="text-brown-600 mt-2">SimpliSafe produces standardized model-ready datasets, stripped of private information, that machine learning engineers can easily input into LLMs to mitigate data contamination and memorization.</p>
          </div>
        </div>
        <div className="max-w-sm rounded-lg shadow-lg bg-white">
          <img src={gitsight} alt="GitSight" className="w-full h-48 object-cover rounded-t-lg"/>
          <div className="p-4">
            <h3 className="text-xl font-semibold text-brown-800">GitSight</h3>
            <p className="text-brown-600 mt-2">A  platform that provides metrics on users' GitHub repositories to measure user and team efficiency.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectShowcasePage;
