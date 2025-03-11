import { motion } from 'framer-motion';
import Layout from '@/components/Layout';
import { Button } from "@/components/ui/button";

const AboutPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.8,
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    
      <div className="container mx-auto px-4 py-12 max-w-6xl text-gray-900 dark:text-white transition-colors duration-300">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h1 className="text-3xl md:text-4xl font-bold mb-6" variants={itemVariants}>
            About CommunionHub
          </motion.h1>
          <motion.p className="text-lg text-gray-700 dark:text-gray-300 mb-6" variants={itemVariants}>
            Our mission is to bridge divides and create meaningful connections across different faith communities and interest groups.
          </motion.p>
          
          <motion.section className="mb-12" variants={itemVariants}>
            <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
            <p className="mb-4 text-gray-700 dark:text-gray-300">
              CommunionHub was founded with a simple belief: that meaningful connections happen when people come together in shared spaces, regardless of their backgrounds or beliefs.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              What started as a small initiative to bring together different faith communities has grown into a platform that serves thousands of people looking to connect, learn, and grow together.
            </p>
          </motion.section>
          
          <motion.section className="mb-12" variants={itemVariants}>
            <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Inclusivity",
                  description: "We create spaces where everyone feels welcome, regardless of faith, background, or identity."
                },
                {
                  title: "Understanding",
                  description: "We foster dialogue that promotes learning about different perspectives and traditions."
                },
                {
                  title: "Community",
                  description: "We believe in the power of shared experiences to build lasting relationships and support networks."
                }
              ].map((value, index) => (
                <motion.div
                  key={index}
                  className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg dark:shadow-gray-900/30 hover:shadow-2xl hover:translate-y-[-5px] transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-700"
                  whileHover={{ y: -5 }}
                  variants={itemVariants}
                >
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{value.title}</h3>
                  <p className="text-gray-700 dark:text-gray-300">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>
          
          <motion.section className="mb-12" variants={itemVariants}>
            <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  name: "John Doe",
                  role: "Founder & CEO",
                  image: "https://via.placeholder.com/150"
                },
                {
                  name: "Jane Smith",
                  role: "Chief Operating Officer",
                  image: "https://via.placeholder.com/150"
                },
                {
                  name: "Michael Brown",
                  role: "Head of Community Engagement",
                  image: "https://via.placeholder.com/150"
                }
              ].map((teamMember, index) => (
                <motion.div
                  key={index}
                  className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg dark:shadow-gray-900/30 hover:shadow-2xl hover:translate-y-[-5px] transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-700"
                  whileHover={{ y: -5 }}
                  variants={itemVariants}
                >
                  <img src={teamMember.image} alt={teamMember.name} className="w-full h-40 object-cover rounded-xl mb-4" />
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{teamMember.name}</h3>
                  <p className="text-gray-700 dark:text-gray-300">{teamMember.role}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>
          
          <motion.section className="mb-12" variants={itemVariants}>
            <h2 className="text-2xl font-semibold mb-4">Our Impact</h2>
            <p className="mb-4 text-gray-700 dark:text-gray-300">
              Since our inception, CommunionHub has made a significant impact in communities around the world. Here are some of our achievements:
            </p>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
              <li>Connected over 10,000 individuals through our platform.</li>
              <li>Hosted more than 500 events across various regions.</li>
              <li>Facilitated interfaith dialogues and community-building activities.</li>
              <li>Supported numerous charity initiatives and social causes.</li>
            </ul>
          </motion.section>
          
          <motion.section className="mb-12" variants={itemVariants}>
            <h2 className="text-2xl font-semibold mb-4">Join Our Community</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Whether you're looking to organize events for your community, find meaningful connections, or simply learn more about different faiths and interests, CommunionHub is the place for you.
            </p>
            <div className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 p-8 rounded-xl border border-purple-700/30">
              <h3 className="text-xl font-semibold mb-4">Ready to get started?</h3>
              <p className="mb-6 text-gray-300">
                Explore events in your area or create your own to start building connections today.
              </p>
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 transition-all shadow-lg hover:translate-y-[-2px] text-white font-medium px-6 py-6 rounded-xl"
                onClick={() => navigate('/events')}
              >
                Explore Events
              </Button>
            </div>
          </motion.section>
        </motion.div>
      </div>
  
  );
};

export default AboutPage;