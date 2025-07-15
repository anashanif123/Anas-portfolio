import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, ChevronLeft, ChevronRight, Code, Database, Palette } from 'lucide-react';

const Projects: React.FC = () => {
  const [currentProject, setCurrentProject] = useState(0);

  const projects = [
    {
      id: 1,
      title: 'Real-Time Chat Application',
      description: 'A modern real-time chat application built with React and Node.js, featuring instant messaging, typing indicators, and user authentication.',
      image: 'https://images.pexels.com/photos/5926382/pexels-photo-5926382.jpeg?auto=compress&cs=tinysrgb&w=800',
      liveUrl: 'https://chat-frontend-murex.vercel.app/',
      githubUrl: 'https://github.com/anashanif123',
      technologies: ['React.js', 'Node.js', 'Socket.io', 'MongoDB', 'Express.js', 'JWT'],
      category: 'Full Stack',
      features: [
        'Real-time messaging with WebSocket',
        'User authentication & authorization',
        'Typing indicators & read receipts',
        'Responsive design for all devices'
      ]
    },
    {
      id: 2,
      title: 'Diamond Salon - Booking Platform',
      description: 'A comprehensive salon booking platform with user authentication, service management, and admin dashboard for seamless appointment scheduling.',
      image: 'https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=800',
      liveUrl: 'https://salon-frontend-ebon.vercel.app/',
      githubUrl: 'https://github.com/anashanif123',
      technologies: ['React.js', 'Express.js', 'MongoDB', 'Stripe', 'JWT', 'Framer Motion'],
      category: 'Full Stack',
      features: [
        'Online appointment booking system',
        'Payment integration with Stripe',
        'Admin dashboard for management',
        'Real-time deal expiry tracking'
      ]
    },
    {
      id: 3,
      title: 'TravelMine - Travel Planning',
      description: 'A beautiful travel planning frontend application with destination search, itinerary creation, and travel inspiration galleries.',
      image: 'https://images.pexels.com/photos/1008155/pexels-photo-1008155.jpeg?auto=compress&cs=tinysrgb&w=800',
      liveUrl: 'https://travelmine.vercel.app/',
      githubUrl: 'https://github.com/anashanif123',
      technologies: ['React.js', 'Tailwind CSS', 'React Router', 'Axios', 'Framer Motion'],
      category: 'Frontend',
      features: [
        'Destination search & filtering',
        'Interactive travel galleries',
        'Responsive mobile-first design',
        'Smooth page transitions'
      ]
    },
    {
      id: 4,
      title: 'Admin Dashboard',
      description: 'A modern admin dashboard with comprehensive data visualization, user management, and analytics for business operations.',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
      liveUrl: 'https://react-admin-dashbord-omega.vercel.app/login',
      githubUrl: 'https://github.com/anashanif123',
      technologies: ['React.js', 'Chart.js', 'Material-UI', 'Redux', 'Axios'],
      category: 'Frontend',
      features: [
        'Interactive data visualizations',
        'User role management',
        'Real-time analytics',
        'Responsive dashboard layout'
      ]
    }
  ];

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const getTechIcon = (tech: string) => {
    if (tech.includes('React') || tech.includes('Node') || tech.includes('Express')) {
      return <Code className="w-4 h-4" />;
    }
    if (tech.includes('MongoDB') || tech.includes('JWT')) {
      return <Database className="w-4 h-4" />;
    }
    return <Palette className="w-4 h-4" />;
  };

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Explore my latest work showcasing modern web development with cutting-edge technologies
          </p>
        </motion.div>

        {/* Custom 3D Carousel */}
        <div className="relative">
          <div className="flex justify-center items-center min-h-[600px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentProject}
                initial={{ opacity: 0, rotateY: 90, scale: 0.8 }}
                animate={{ opacity: 1, rotateY: 0, scale: 1 }}
                exit={{ opacity: 0, rotateY: -90, scale: 0.8 }}
                transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
                className="w-full max-w-6xl"
              >
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  {/* Project Image */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="relative group"
                  >
                    <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                      <img
                        src={projects[currentProject].image}
                        alt={projects[currentProject].title}
                        className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      {/* Overlay buttons */}
                      <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <motion.a
                          href={projects[currentProject].liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors duration-200"
                        >
                          <ExternalLink size={20} />
                        </motion.a>
                        <motion.a
                          href={projects[currentProject].githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors duration-200"
                        >
                          <Github size={20} />
                        </motion.a>
                      </div>
                    </div>

                    {/* Floating category badge */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="absolute -top-4 -right-4 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full text-sm font-semibold shadow-lg"
                    >
                      {projects[currentProject].category}
                    </motion.div>
                  </motion.div>

                  {/* Project Details */}
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="space-y-6"
                  >
                    <div>
                      <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        {projects[currentProject].title}
                      </h3>
                      <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                        {projects[currentProject].description}
                      </p>
                    </div>

                    {/* Features */}
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                        Key Features
                      </h4>
                      <ul className="space-y-2">
                        {projects[currentProject].features.map((feature, index) => (
                          <motion.li
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 + index * 0.1 }}
                            className="flex items-center space-x-3"
                          >
                            <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
                            <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-3">
                        {projects[currentProject].technologies.map((tech, index) => (
                          <motion.div
                            key={tech}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.6 + index * 0.1 }}
                            whileHover={{ scale: 1.05 }}
                            className="flex items-center space-x-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300"
                          >
                            {getTechIcon(tech)}
                            <span>{tech}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-4 pt-4">
                      <motion.a
                        href={projects[currentProject].liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold hover:shadow-lg transition-shadow duration-300"
                      >
                        <ExternalLink size={18} />
                        <span>Live Demo</span>
                      </motion.a>
                      <motion.a
                        href={projects[currentProject].githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center space-x-2 px-6 py-3 border-2 border-purple-600 text-purple-600 dark:text-purple-400 rounded-full font-semibold hover:bg-purple-600 hover:text-white transition-colors duration-300"
                      >
                        <Github size={18} />
                        <span>Source Code</span>
                      </motion.a>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={prevProject}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300 z-10"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700 dark:text-gray-300" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={nextProject}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300 z-10"
          >
            <ChevronRight className="w-6 h-6 text-gray-700 dark:text-gray-300" />
          </motion.button>

          {/* Project Indicators */}
          <div className="flex justify-center space-x-3 mt-8">
            {projects.map((_, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                onClick={() => setCurrentProject(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentProject
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 scale-125'
                    : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;