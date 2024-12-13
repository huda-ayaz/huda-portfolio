import React from 'react';

function SkillDetailsPage() {
  return (
    <div className="min-h-screen bg-brown-100 p-8 text-brown-700">
      <div className="text-center mb-12"> 
        <h1 className="text-5xl font-bold text-brown-800 mb-4">Web Development Skills</h1>
        <p className="text-xl text-brown-700 max-w-2xl mx-auto">
          As a senior in Computer Science at Brooklyn College, I have developed a diverse set of skills across multiple programming languages, frameworks, and tools. Below is a list of the primary skills I have honed over the years.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div>
          <h2 className="text-2xl font-semibold text-brown-800 mb-4">Programming Languages</h2>
          <p className="text-lg">
            Java, JavaScript, TypeScript, GraphQL, SQL, Python, Bash, C, HTML, CSS
          </p>
        </div>
        
        <div>
          <h2 className="text-2xl font-semibold text-brown-800 mb-4">Frameworks</h2>
          <p className="text-lg">
            Express, Next.js, Node.js, React, Redux, TailwindCSS, Flask
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-brown-800 mb-4">Other Tools & Technologies</h2>
          <p className="text-lg">
            Adobe, APIs, AWS, Axios, CircleCI, DataDog, DBMS (Postgres), Docker, Excel, GitHub, Jira, Kubernetes, LucidChart, MS, NPM, ORM (Sequelize), Pandas, Postico, Postman, Prisma, REST, Git, Shortcut, SocketIO, WebRTC, Websockets
          </p>
        </div>
      </div>

      <p className="text-lg mt-6">
        These tools and technologies are the foundation of my work as a web developer. I continuously strive to expand my expertise and stay updated with the latest advancements in the field to remain adaptable and ready to tackle new challenges.
      </p>
    </div>
  );
}

export default SkillDetailsPage;
