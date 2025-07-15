import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Globe, Smartphone, Server, Palette } from 'lucide-react';

const About: React.FC = () => {
  const skills = [
    {
      category: 'Frontend',
      icon: Globe,
      skills: ['React.js', 'Next.js', 'JavaScript', 'TypeScript (Basic)', 'HTML5', 'CSS3'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      category: 'Backend',
      icon: Server,
      skills: ['Node.js', 'Express.js', 'RESTful APIs', 'Authentication', 'Middleware'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      category: 'Database',
      icon: Database,
      skills: ['MongoDB', 'Firebase', 'Mongoose', ],
      color: 'from-purple-500 to-violet-500'
    },
    {
      category: 'Styling',
      icon: Palette,
      skills: ['Tailwind CSS', 'Bootstrap', 'CSS Modules', 'Responsive Design'],
      color: 'from-pink-500 to-rose-500'
    },
    
    {
      category: 'Tools',
      icon: Code,
      skills: ['Git', 'GitHub', 'Vercel', 'Postman', 'Thunder Client'],
      color: 'from-indigo-500 to-blue-500'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            rotate: [360, 0],
            scale: [1.1, 1, 1.1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-r from-cyan-400/10 to-blue-400/10 rounded-full blur-3xl"
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
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            I'm a passionate MERN Stack Developer with expertise in building modern, 
            scalable web applications. I love turning ideas into reality through clean, 
            efficient code and exceptional user experiences.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skills.map((skillGroup, index) => (
            <motion.div
              key={skillGroup.category}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
              }}
              className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${skillGroup.color} flex items-center justify-center mb-6 mx-auto`}
              >
                <skillGroup.icon className="w-8 h-8 text-white" />
              </motion.div>

              <h3 className="text-2xl font-bold text-center mb-6 text-gray-900 dark:text-white">
                {skillGroup.category}
              </h3>

              <div className="space-y-3">
                {skillGroup.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: skillIndex * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 10 }}
                    className="flex items-center space-x-3 group"
                  >
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      className={`w-2 h-2 rounded-full bg-gradient-to-r ${skillGroup.color}`}
                    />
                    <span className="text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-200">
                      {skill}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

   
      </div>
    </section>
  );
};

export default About;