import React from 'react';

function Tst() {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "Full-stack e-commerce solution with payment integration, featuring user authentication, product catalog, shopping cart, and secure payment processing.",
      tech: ["React", "Laravel", "MySQL", "Stripe"],
      image: "./projects/notes.jpeg",
      github: "https://github.com/username/ecommerce",
    },
    {
      id: 2,
      title: "Task Management App",
      description:
        "Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      tech: ["React", "Node.js", "Socket.io", "MongoDB"],
      image: "/api/placeholder/600/400",
      demo: "https://demo-tasks.com",
      github: "https://github.com/username/tasks",
    },
    {
      id: 3,
      title: "Analytics Dashboard",
      description:
        "Interactive analytics dashboard featuring custom data visualizations, real-time metrics, and exportable reports for business intelligence.",
      tech: ["React", "D3.js", "Express", "PostgreSQL"],
      image: "/api/placeholder/600/400",
      demo: "https://demo-analytics.com",
      github: "https://github.com/username/analytics",
    },
    {
      id: 4,
      title: "Social Media Dashboard",
      description:
        "Comprehensive social media management platform supporting multiple platforms with scheduling, analytics, and engagement tracking.",
      tech: ["React", "Laravel", "Redis", "API Integration"],
      image: "/api/placeholder/600/400",
      demo: "https://demo-social.com",
      github: "https://github.com/username/social",
    },
  ];

  return (
<section id="projects" className="py-20">
  <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
        Projects Showcase
      </h2>
      <p className="text-xl text-gray-400">Some of my recent work</p>
    </div>

    <div className="space-y-20">
      {projects.map((project, index) => (
        <div
          key={project.id}
          className={`flex flex-col ${
            index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
          } items-center gap-12`}
        >
          {/* Project Image */}

              {/* Project Image */}
              <div className="w-full lg:w-1/2">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group"
                >
                  <div className="relative overflow-hidden rounded-lg bg-slate-800 border border-slate-700 hover:border-indigo-500 transition-colors duration-300 aspect-video">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover filter blur-sm md:blur-none group-hover:scale-105 transition-transform duration-300"
                    />

                    {/* Mobile Overlay */}
                    <div className="absolute inset-0 bg-slate-900/75 flex flex-col justify-center items-center text-center p-6 lg:hidden">
                      <h3 className="text-lg sm:text-xl font-bold mb-2 text-violet-400">
                        {project.title}
                      </h3>
                      <p className="text-white text-xs sm:text-sm leading-relaxed mb-3">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-1 sm:gap-2 justify-center mb-3">
                        {project.tech.map((tech, i) => (
                          <span key={i} className="text-xs font-medium text-violet-400">
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex gap-4">
                        {/* GitHub Icon */}
                        <svg
                          className="w-5 h-5 text-white hover:text-indigo-400 transition-colors duration-200"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.11.793-.26.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                        </svg>
                        {/* External Link Icon */}
                        <svg
                          className="w-5 h-5 text-white hover:text-indigo-400 transition-colors duration-200"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                          <path d="M15 3h6v6" />
                          <path d="M10 14L21 3" />
                        </svg>
                      </div>
                    </div>

                    {/* Desktop Hover Effect */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden lg:flex">
                      <div className="absolute bottom-4 left-4">
                        <span className="text-white text-sm font-medium">
                          View on GitHub →
                        </span>
                      </div>
                    </div>
                  </div>
                </a>
              </div>



          {/* Project Content - Hidden on mobile, visible on desktop */}
          <div className="w-full lg:w-1/2 hidden lg:block">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-bold text-white mb-4">
                {project.title}
              </h3>
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                {project.description}
              </p>
              
              {/* Tech Stack */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-slate-800 text-indigo-300 px-3 py-1 rounded-md text-sm border border-slate-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Links */}
              <div className="flex gap-4 justify-center lg:justify-start">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-slate-800 hover:bg-slate-700 text-white px-6 py-2 rounded-md border border-slate-700 hover:border-indigo-500 transition-colors duration-200 text-sm font-medium"
                >
                  Source Code
                </a>
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-md transition-colors duration-200 text-sm font-medium"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>  );
}

export default Tst;







