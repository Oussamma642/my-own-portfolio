import React, { useState, useEffect } from "react";
import {
  ChevronDown,
  ExternalLink,
  Github,
  Linkedin,
  Twitter,
  Mail,
  Phone,
  MapPin,
  Code,
  Database,
  Cloud,
  Monitor,
  Server,
  Wrench,
  X,
  ChevronLeft,
  ChevronRight,
  Menu,
  Download,
} from "lucide-react";
import {
  SiReact,
  SiJavascript,
  SiMongodb,
  SiPhp,
  SiBootstrap,
  SiMysql,
  SiGithub,
  SiPython,
  SiNodedotjs,
  SiTailwindcss,
} from "react-icons/si";

const Portfolio = () => {
  const [activeProject, setActiveProject] = useState(null);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [navOpen, setNavOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Smooth scroll function
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Intersection Observer for fade-in animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fadeIn");
        }
      });
    }, observerOptions);

    const animatedElements = document.querySelectorAll(".fade-in");
    animatedElements.forEach((el) => observer.observe(el));

    // For left/right card animations
    const observerX = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target.classList.contains("fade-in-left")) {
            entry.target.classList.add("animate-fadeInLeft");
          } else if (entry.target.classList.contains("fade-in-right")) {
            entry.target.classList.add("animate-fadeInRight");
          }
        }
      });
    }, observerOptions);

    const animatedXElements = document.querySelectorAll(".fade-in-x");
    animatedXElements.forEach((el) => observerX.observe(el));

    return () => {
      observer.disconnect();
      observerX.disconnect();
    };
  }, []);

  const skills = [
    {
      category: "Front-end",
      skills: [
        { name: "React", level: 80 },
        { name: "JavaScript", level: 85 },
        { name: "TypeScript", level: 70 },
        { name: "Tailwind CSS", level: 90 },
      ],
    },
    {
      category: "Back-end",
      skills: [
        { name: "PHP", level: 70 },
        { name: "Laravel", level: 75 },
        { name: "Node.js", level: 65 },
        { name: "MySQL", level: 80 },
      ],
    },
    {
      category: "DevOps",
      skills: [
        { name: "Docker", level: 60 },
        { name: "Git", level: 85 },
        { name: "AWS", level: 55 },
        { name: "Linux", level: 70 },
      ],
    },
  ];

  const services = [
    {
      name: "Custom Web Applications",
      icon: <Code className="w-8 h-8" />,
      description: "Full-stack web applications tailored to your needs",
    },
    {
      name: "RESTful API Design",
      icon: <Database className="w-8 h-8" />,
      description: "Scalable and secure API development",
    },
    {
      name: "UI/UX Prototyping",
      icon: <Monitor className="w-8 h-8" />,
      description: "User-centered design and prototyping",
    },
  ];

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with payment integration",
      tech: ["React", "Laravel", "MySQL", "Stripe"],
      image: "/api/placeholder/400/250",
      details:
        "A comprehensive e-commerce platform featuring user authentication, product catalog, shopping cart, and secure payment processing.",
      challenges:
        "Implementing real-time inventory management and optimizing database queries for large product catalogs.",
      solution:
        "Used Redis for caching and implemented database indexing strategies to improve performance by 60%.",
      codeSnippet: `// Product search with caching
const searchProducts = async (query) => {
  const cached = await redis.get(\`search:\${query}\`);
  if (cached) return JSON.parse(cached);
  
  const results = await Product.where('name', 'LIKE', \`%\${query}%\`).get();
  await redis.setex(\`search:\${query}\`, 3600, JSON.stringify(results));
  return results;
};`,
      demo: "https://demo-ecommerce.com",
      github: "https://github.com/username/ecommerce",
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Collaborative task management with real-time updates",
      tech: ["React", "Node.js", "Socket.io", "MongoDB"],
      image: "/api/placeholder/400/250",
      details:
        "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      challenges:
        "Implementing real-time collaboration while maintaining data consistency across multiple users.",
      solution:
        "Utilized WebSockets with conflict resolution algorithms and optimistic UI updates.",
      codeSnippet: `// Real-time task updates
socket.on('taskUpdated', (task) => {
  setTasks(prev => prev.map(t => 
    t.id === task.id ? { ...t, ...task } : t
  ));
});`,
      demo: "https://demo-tasks.com",
      github: "https://github.com/username/tasks",
    },
    {
      id: 3,
      title: "Analytics Dashboard",
      description: "Data visualization dashboard with interactive charts",
      tech: ["React", "D3.js", "Express", "PostgreSQL"],
      image: "/api/placeholder/400/250",
      details:
        "Interactive analytics dashboard featuring custom data visualizations, real-time metrics, and exportable reports.",
      challenges:
        "Handling large datasets efficiently while maintaining smooth interactions.",
      solution:
        "Implemented data virtualization and server-side pagination with optimized SQL queries.",
      codeSnippet: `// Efficient data fetching with pagination
const fetchAnalytics = async (page, filters) => {
  const query = db.select('*')
    .from('analytics')
    .where(filters)
    .limit(100)
    .offset(page * 100);
  
  return await query;
};`,
      demo: "https://demo-analytics.com",
      github: "https://github.com/username/analytics",
    },
    {
      id: 4,
      title: "Social Media Dashboard",
      description: "Multi-platform social media management tool",
      tech: ["React", "Laravel", "Redis", "API Integration"],
      image: "/api/placeholder/400/250",
      details:
        "Comprehensive social media management platform supporting multiple platforms with scheduling, analytics, and engagement tracking.",
      challenges:
        "Managing rate limits and API quotas across multiple social media platforms.",
      solution:
        "Implemented a queue system with rate limiting and smart retry mechanisms.",
      codeSnippet: `// Rate-limited API calls
const apiCall = async (platform, endpoint, data) => {
  const key = \`rate_limit:\${platform}\`;
  const current = await redis.get(key) || 0;
  
  if (current >= RATE_LIMITS[platform]) {
    throw new Error('Rate limit exceeded');
  }
  
  await redis.incr(key);
  await redis.expire(key, 3600);
  
  return await platformAPI[platform].call(endpoint, data);
};`,
      demo: "https://demo-social.com",
      github: "https://github.com/username/social",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Project Manager at TechCorp",
      photo: "/api/placeholder/80/80",
      quote:
        "Outstanding work on our e-commerce platform. The attention to detail and technical expertise exceeded our expectations.",
    },
    {
      name: "Michael Chen",
      role: "CTO at StartupXYZ",
      photo: "/api/placeholder/80/80",
      quote:
        "Delivered a complex analytics dashboard on time and within budget. Great communication throughout the project.",
    },
    {
      name: "Emily Rodriguez",
      role: "Marketing Director",
      photo: "/api/placeholder/80/80",
      quote:
        "The social media management tool has revolutionized our workflow. Highly recommended for any web development needs.",
    },
  ];

  const timeline = [
    {
      year: "2025",
      title: "Full-Stack Developer Intern",
      company: "OFPPT",
      description:
        "Developing web applications using React and Laravel, collaborating with senior developers on client projects.",
    },
    {
      year: "2024",
      title: "Web Development Coursework",
      company: "OFPPT",
      description:
        "Completed comprehensive training in full-stack development, including modern JavaScript frameworks and PHP.",
    },
    {
      year: "2023",
      title: "Freelance Projects",
      company: "Self-employed",
      description:
        "Built various web applications for local businesses, gaining experience in client communication and project management.",
    },
  ];

  const blogPosts = [
    {
      title: "Building Scalable APIs with Laravel",
      date: "2025-06-15",
      excerpt:
        "Learn best practices for designing and implementing RESTful APIs that can handle high traffic and complex business logic.",
      slug: "building-scalable-apis-laravel",
    },
    {
      title: "React Performance Optimization Techniques",
      date: "2025-06-10",
      excerpt:
        "Discover advanced techniques for optimizing React applications, including memoization, lazy loading, and bundle splitting.",
      slug: "react-performance-optimization",
    },
    {
      title: "Docker for Web Developers",
      date: "2025-06-05",
      excerpt:
        "A comprehensive guide to containerizing web applications with Docker, from development to production deployment.",
      slug: "docker-for-web-developers",
    },
  ];

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = "Name is required";
    if (!formData.email.trim()) errors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      errors.email = "Email is invalid";
    if (!formData.message.trim()) errors.message = "Message is required";

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted:", formData);
      alert("Thank you for your message! I'll get back to you soon.");
      setFormData({ name: "", email: "", message: "" });
    }
  };

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setShowNav(false); // scrolling down, hide nav
      } else {
        setShowNav(true); // scrolling up, show nav
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div className="min-h-screen">
      {/* Social Vertical Bar - Left */}
      <div className="fixed left-[2%] top-[90%] -translate-y-1/2 z-50 hidden lg:flex flex-col items-center">
        <div className="flex flex-col items-center mb-5">
          <a
            href="https://www.linkedin.com/in/oussama-ait-mohamed-239402336/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-200 hover:text-indigo-600 transition-colors mb-6"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-7 h-7" />
          </a>
          <a
            href="https://github.com/Oussamma642"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-200 hover:text-indigo-600 transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-7 h-7" />
          </a>
        </div>
        <div className="w-0.5 h-60 bg-indigo-600"></div>
      </div>

      {/* Email Vertical Bar - Right */}
      <div className="fixed right-[-9%] top-[55%] -translate-y-1/2 z-50 hidden lg:flex flex-col items-center">
        <a
          href="mailto:aitmohamedoussama57@gmail.com"
          className="
      text-indigo-200 
      hover:text-indigo-800 
      font-bold            /* make it bold */
      text-sm              /* bump up from xs to sm */
      tracking-widest 
      rotate-90 
      mb-40 
      mt-[90%]
    "
          style={{ letterSpacing: "0.2em" }}
        >
          aitmohamedoussama57@gmail.com
        </a>
        <div className="w-0.5 h-50 bg-indigo-600"></div>
      </div>

      {/* Main Content with balanced left/right padding */}
      <div className="lg:pl-20 lg:pr-20">
        {/* Custom CSS for animations */}

        {/* Navigation */}
        <nav
          className={`fixed top-0 left-0 right-0 backdrop-blur-md z-50 transition-transform duration-300 border-b border-slate-800 shadow-lg shadow-slate-900/40 ${
            showNav ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              {/* Logo */}
              <a href="/" className="cursor-pointer" aria-label="home">
                <svg
                  id="logo"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  viewBox="0 0 84 96"
                  width={48}
                  height={54}
                >
                  <title>Logo</title>
                  <g transform="translate(-8.000000, -2.000000)">
                    <g transform="translate(11.000000, 5.000000)">
                      <polygon
                        id="Shape"
                        stroke="#7c3aed" // violet-600
                        strokeWidth="5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="#fff"
                        points="39 0 0 22 0 67 39 90 78 68 78 23"
                      ></polygon>
                    </g>
                  </g>
                  <text
                    x="28"
                    y="65"
                    fill="#7c3aed" // violet-600
                    fontSize="50px"
                    fontFamily="Consolas, serif"
                    fontWeight="bold"
                  >
                    O
                  </text>
                </svg>
              </a>

              {/* Desktop Nav */}
              <div className="hidden md:flex items-center space-x-8">
                <button
                  onClick={() => scrollToSection("about")}
                  className="cursor-pointer text-white hover:text-violet-400 transition-colors text-sm font-mono"
                >
                  <span className="cursor-pointer text-violet-400 mr-2">
                    01.
                  </span>
                  About
                </button>
                <button
                  onClick={() => scrollToSection("experience")}
                  className="cursor-pointer text-white hover:text-violet-400 transition-colors text-sm font-mono"
                >
                  <span className="cursor-pointer text-violet-400 mr-2">
                    02.
                  </span>
                  Experience
                </button>
                <button
                  onClick={() => scrollToSection("projects")}
                  className="cursor-pointer text-white hover:text-violet-400 transition-colors text-sm font-mono"
                >
                  <span className=" text-violet-400 mr-2">03.</span>
                  Projects
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="cursor-pointer text-white hover:text-violet-400 transition-colors text-sm font-mono"
                >
                  <span className="text-violet-400 mr-2 ">04.</span>
                  Contact
                </button>

                {/* Resume Button */}
                <a
                  href="/cv.pdf"
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-6 px-4 py-2 border border-violet-600 text-violet-400  transition-colors hover:bg-indigo-50 text-sm font-mono rounded"
                >
                  Resume
                </a>
              </div>

              {/* Mobile Nav Hamburger */}
              <div className="md:hidden">
                <button
                  onClick={() => setNavOpen(true)}
                  className="text-white hover:text-violet-400 transition-colors focus:outline-none"
                >
                  <Menu className="w-7 h-7 cursor-pointer" />
                </button>
              </div>
            </div>
          </div>
        </nav>

        {/* Mobile Nav Drawer */}
        {navOpen && (
          <div className="fixed inset-0 z-[9999] bg-black/50 flex md:hidden">
            <div className="w-64 h-full shadow-lg p-6 flex flex-col gap-6 animate-fadeInLeft bg-slate-900 border-r border-slate-800">
              <div className="flex justify-between items-center mb-8">
                <span className="font-bold text-xl text-violet-400">
                  Portfolio
                </span>
                <button
                  onClick={() => setNavOpen(false)}
                  className="cursor-pointer text-white hover:text-violet-400 transition-colors focus:outline-none"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              <button
                onClick={() => {
                  scrollToSection("about");
                  setNavOpen(false);
                }}
                className="cursor-pointer text-white hover:text-violet-400 transition-colors text-left font-mono"
              >
                <span className="text-violet-400 mr-2">01.</span>
                About
              </button>
              <button
                onClick={() => {
                  scrollToSection("experience");
                  setNavOpen(false);
                }}
                className="cursor-pointer text-white hover:text-violet-400 transition-colors text-left font-mono"
              >
                <span className="text-violet-400 mr-2">02.</span>
                Experience
              </button>
              <button
                onClick={() => {
                  scrollToSection("projects");
                  setNavOpen(false);
                }}
                className="cursor-pointer text-white hover:text-violet-400 transition-colors text-left font-mono"
              >
                <span className="text-violet-400 mr-2">03.</span>
                Projects
              </button>
              <button
                onClick={() => {
                  scrollToSection("contact");
                  setNavOpen(false);
                }}
                className="cursor-pointer text-white hover:text-violet-400 transition-colors text-left font-mono"
              >
                <span className="text-violet-400 mr-2">04.</span>
                Contact
              </button>

              {/* Mobile Resume Button */}
              <a
                href="/cv.pdf"
                download
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer w-full border-2 border-violet-600 text-violet-600 px-8 py-3 rounded-lg font-medium hover:bg-violet-50 transition-colors text-center"
              >
                Resume
              </a>
            </div>
            <div className="flex-1" onClick={() => setNavOpen(false)}></div>
          </div>
        )}

        {/* Hero Section */}
        <section
          id="hero"
          className="min-h-screen flex items-center justify-center pt-16 "
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center justify-center text-center fade-in animate-heroIntro">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white-900">
              Hi, I'm <br />{" "}
              <span className="text-indigo-600">AIT MOHAMED Oussama</span>,
              <br />
              Full-Stack Developer.
            </h1>
            <p className="text-xl md:text-2xl text-white-600 mb-8">
              Building web applications with React & Laravel.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md mx-auto">
              <button
                onClick={() => scrollToSection("projects")}
                className="cursor-pointer w-full bg-indigo-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors"
              >
                View My Work
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="cursor-pointer w-full border-2 border-indigo-600 text-indigo-600 px-8 py-3 rounded-lg font-medium hover:bg-indigo-50 transition-colors"
              >
                Get in Touch
              </button>
            </div>
          </div>
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-8 h-8 text-gray-400" />
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 text-white-100 fade-in">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Professional Photo Container */}
              <div className="flex justify-center mb-8 lg:mb-0">
                <div className="relative group">
                  {/* Subtle background accent */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-gray-200 to-gray-300 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>

                  {/* Main photo container */}
                  <div className="relative bg-white p-2 rounded-3xl shadow-lg">
                    <img
                      src="/me.JPG"
                      alt="Alex Smith"
                      className="w-80 h-80 object-cover rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300"
                    />
                  </div>

                  {/* Professional accent dot */}
                  <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-indigo-500 rounded-full border-4 border-white shadow-lg"></div>
                </div>
              </div>

              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white-900">
                  About Me
                </h2>
                <p className="text-lg text-white-600 mb-6">
                  I'm a specialized technician in digital development, with a
                  strong foundation in both frontend and backend technologies.
                  My skill set includes PHP, Laravel, and SQL, as well as
                  frontend tools like HTML, CSS, JavaScript, React.js. I'm
                  naturally curious, energetic, and enthusiastic about expanding
                  my knowledge. Always ready to take on new challenges, I'm
                  driven by the desire to grow and make a meaningful impact
                  through continuous learning and hands-on experience.{" "}
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-white-600">
                    <MapPin className="w-5 h-5 mr-2" />
                    <span>Marrakech, Morocco</span>
                  </div>
                  <div className="flex items-center text-white-600">
                    <Mail className="w-5 h-5 mr-2" />
                    <span>aitmohamedoussama57@gmail.com</span>
                  </div>
                  <div>
                    <a
                      href="/cv.pdf"
                      download
                      className="inline-flex items-center mt-2 bg-indigo-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-indigo-700 transition-colors"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Resume
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section id="technologies" className="py-20 fade-in">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white-900">
                Technologies
              </h2>
              <p className="text-xl text-gray-400">The ones I master</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 justify-items-center">
              {[
                {
                  name: "React",
                  icon: (
                    <SiReact className="w-16 h-16 text-[#61dafb] tech-float" />
                  ),
                },
                {
                  name: "JavaScript",
                  icon: (
                    <span
                      className="w-16 h-16 flex items-center justify-center tech-float uppercase"
                      style={{
                        fontWeight: "bold",
                        fontSize: "3.5rem",
                        color: "#f7df1e",
                        fontFamily: "monospace",
                        letterSpacing: "-0.1rem",
                      }}
                    >
                      JS
                    </span>
                  ),
                },
                {
                  name: "MongoDB",
                  icon: (
                    <SiMongodb className="w-16 h-16 text-[#47A248] tech-float" />
                  ),
                },
                {
                  name: "PHP",
                  icon: (
                    <SiPhp className="w-16 h-16 text-[#7A86B8] tech-float" />
                  ),
                },
                {
                  name: "Bootstrap",
                  icon: (
                    <SiBootstrap className="w-16 h-16 text-[#7952b3] tech-float" />
                  ),
                },
                {
                  name: "MySQL",
                  icon: (
                    <SiMysql className="w-16 h-16 text-[#4479a1] tech-float" />
                  ),
                },
                {
                  name: "GIT/GitHub",
                  icon: (
                    <SiGithub className="w-16 h-16 text-[#6e42f5] tech-float" />
                  ),
                },
                {
                  name: "Tailwind CSS",
                  icon: (
                    <SiTailwindcss className="w-16 h-16 text-[#6e42f5] tech-float" />
                  ),
                },
              ].map((tech, idx) => (
                <div key={idx} className="flex flex-col items-center py-4">
                  {tech.icon}
                  <span className="mt-4 text-lg font-semibold text-white-700">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20  fade-in">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white-900">
                Projects Showcase
              </h2>
              <p className="text-xl text-gray-400">Some of my recent work</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <div
                  key={project.id}
                  className={`bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow group cursor-pointer fade-in-x ${
                    index % 2 === 0 ? "fade-in-left" : "fade-in-right"
                  }`}
                >
                  <div
                    className="relative h-48 bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center"
                    onClick={() => setActiveProject(project)}
                  >
                    <div className="text-white text-6xl font-bold opacity-20">
                      {project.title
                        .split(" ")
                        .map((word) => word[0])
                        .join("")}
                    </div>
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="text-white text-center">
                        <h3 className="text-xl font-semibold mb-2">
                          {project.title}
                        </h3>
                        <p className="mb-4">{project.description}</p>
                        <div className="flex flex-wrap gap-2 justify-center">
                          {project.tech.map((tech, index) => (
                            <span
                              key={index}
                              className="bg-white/20 px-2 py-1 rounded text-sm"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 bg-slate-900 text-white">
                    <h3 className="text-xl font-semibold mb-2 text-white">
                      {project.title}
                    </h3>
                    <p className="mb-4 text-indigo-200">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, index) => (
                        <span
                          key={index}
                          className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Project Modal */}
        {activeProject && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-2xl font-bold text-gray-900">
                    {activeProject.title}
                  </h3>
                  <button
                    onClick={() => setActiveProject(null)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold mb-2 text-gray-900">
                      Overview
                    </h4>
                    <p className="text-gray-600">{activeProject.details}</p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold mb-2 text-gray-900">
                      Challenges & Solutions
                    </h4>
                    <p className="text-gray-600 mb-2">
                      <strong>Challenge:</strong> {activeProject.challenges}
                    </p>
                    <p className="text-gray-600">
                      <strong>Solution:</strong> {activeProject.solution}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold mb-2 text-gray-900">
                      Code Example
                    </h4>
                    <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                      <code>{activeProject.codeSnippet}</code>
                    </pre>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {activeProject.tech.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <a
                      href={activeProject.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                    <a
                      href={activeProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 border-2 border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Experience & Education Section */}
        <section id="experience" className="py-20 fade-in">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white-900">
                Experience & Education
              </h2>
              <p className="text-xl text-gray-400">My journey so far</p>
            </div>

            <div className="relative">
              {/* Timeline line - only visible on desktop */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-indigo-600"></div>

              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <div
                    key={index}
                    className={`flex items-center flex-col md:flex-row ${
                      index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    <div
                      className={`w-full md:w-1/2 ${
                        index % 2 === 0
                          ? "md:pr-8 md:text-right"
                          : "md:pl-8 md:text-left"
                      } fade-in-x ${
                        index % 2 === 0 ? "fade-in-left" : "fade-in-right"
                      }`}
                    >
                      <div className="bg-slate-900/95 p-6 rounded-lg shadow-md md:ml-0">
                        <div className="text-indigo-400 font-semibold text-sm mb-1">
                          {item.year}
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-1">
                          {item.title}
                        </h3>
                        <div className="text-indigo-400 font-medium mb-2">
                          {item.company}
                        </div>
                        <p className="text-gray-100">{item.description}</p>
                      </div>
                    </div>

                    {/* Timeline dot - hidden on mobile, visible on desktop */}
                    <div className="hidden md:block w-4 h-4 bg-indigo-600 rounded-full border-4 border-white shadow-md relative z-10 my-4 md:my-0"></div>

                    <div className="hidden md:block w-1/2"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 fade-in">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white-900">
                Get in Touch
              </h2>
              <p className="text-xl text-gray-400">
                I would love to hear from you
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div className="bg-slate-900/95 p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-6 text-white-900 text-center">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  {/* Address */}
                  <div className="flex items-center bg-gray-100 rounded-lg p-4">
                    <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-gray-300 rounded-full mr-4">
                      <MapPin className="w-6 h-6 text-gray-700" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-800">Address</div>
                      <div className="text-gray-600 text-sm">
                        DR JDID NO 886 SYBA MARRAKECH
                      </div>
                    </div>
                  </div>
                  {/* Phone */}
                  <div className="flex items-center bg-gray-100 rounded-lg p-4">
                    <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-gray-300 rounded-full mr-4">
                      <Phone className="w-6 h-6 text-gray-700" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-800">Phone</div>
                      <div className="text-gray-600 text-sm">
                        +212 652155542
                      </div>
                    </div>
                  </div>
                  {/* Email */}
                  <div className="flex items-center bg-gray-100 rounded-lg p-4">
                    <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-gray-300 rounded-full mr-4">
                      <Mail className="w-6 h-6 text-gray-700" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-800">Email</div>
                      <div className="text-gray-600 text-sm">
                        aitmohamedoussama57@gmail.com
                      </div>
                    </div>
                  </div>
                  {/* Socials */}
                  <div className="flex justify-center gap-6 mt-4">
                    <a
                      href="https://www.linkedin.com/in/oussama-ait-mohamed-239402336/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 flex items-center justify-center bg-gray-300 rounded-full hover:bg-indigo-600 transition-colors"
                    >
                      <Linkedin className="w-5 h-5 text-gray-700" />
                    </a>
                    <a
                      href="https://github.com/Oussamma642"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 flex items-center justify-center bg-gray-300 rounded-full hover:bg-indigo-600 transition-colors"
                    >
                      <Github className="w-5 h-5 text-gray-700" />
                    </a>
                  </div>
                </div>
              </div>
              {/* Contact Form */}
              <div className="bg-slate-900/95 p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-6 text-white-900 text-center">
                  Contact Form
                </h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label
                      className="block text-sm font-medium text-gray-700 mb-1"
                      htmlFor="name"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:outline-none"
                      placeholder="Your Name"
                    />
                    {formErrors.name && (
                      <p className="text-red-500 text-sm mt-1">
                        {formErrors.name}
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      className="block text-sm font-medium text-gray-700 mb-1"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:outline-none"
                      placeholder="you@example.com"
                    />
                    {formErrors.email && (
                      <p className="text-red-500 text-sm mt-1">
                        {formErrors.email}
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      className="block text-sm font-medium text-gray-700 mb-1"
                      htmlFor="message"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:outline-none"
                      rows="4"
                      placeholder="Your message"
                    ></textarea>
                    {formErrors.message && (
                      <p className="text-red-500 text-sm mt-1">
                        {formErrors.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="cursor-pointer  w-full bg-indigo-600 text-white px-4 py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
      </div>
    </div>
  );
};

export default Portfolio;
