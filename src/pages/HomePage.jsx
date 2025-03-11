import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sparkles, Users, Calendar, ArrowRight } from 'lucide-react';
import HeroImage from '../assets/hero_section_image.jpeg';
import Layout from '@/components/Layout';

const HomePage = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

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

      <motion.div 
        className="container mx-auto px-4 py-12 max-w-6xl  text-gray-900 dark:text-white transition-colors duration-300"
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {/* Hero Section - Updated with modern design */}
        <motion.div className="flex flex-col lg:flex-row items-center justify-between gap-16 mb-24">
          <motion.div className="lg:w-1/2" variants={itemVariants}>
            <div className="relative mb-4">
              <span className="inline-block py-1 px-3 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 rounded-full text-sm font-medium mb-2">
                Join Our Community
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">Connecting People</span>
              <br /> Across Faiths & Interests
            </h1>
            <p className="text-xl mb-8 text-gray-700 dark:text-gray-300 leading-relaxed">
              CommunionHub brings together individuals from diverse backgrounds to foster understanding and build community through meaningful events.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                onClick={() => navigate('/events')}
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 transition-all shadow-lg hover:translate-y-[-2px] text-white font-medium px-6 py-6 rounded-xl flex items-center gap-2"
              >
                Explore Events <ArrowRight className="h-5 w-5" />
              </Button>
              <Button 
                size="lg"
                variant="outline" 
                onClick={() => navigate('/about')}
                className="border-2 border-purple-500 text-purple-700 dark:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/20 font-medium px-6 py-6 rounded-xl"
              >
                Learn More
              </Button>
            </div>
          </motion.div>
          <motion.div className="lg:w-1/2" variants={itemVariants}>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 dark:bg-blue-500/10 rounded-full -mr-10 -mt-10 backdrop-blur-xl"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-purple-500/20 dark:bg-purple-500/10 rounded-full -ml-6 -mb-6 backdrop-blur-xl"></div>
              
              {/* Image container */}
              <div className="relative z-10 rounded-3xl overflow-hidden border-2 border-gray-100 dark:border-gray-800">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/40 to-blue-500/40 z-10 mix-blend-overlay"></div>
                <img 
                  src={HeroImage}
                  alt="People connecting at community events" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Features Section - Modernized */}
        <motion.section variants={itemVariants} className="mb-24">
          <div className="text-center mb-16">
            <span className="inline-block py-1 px-3 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium mb-2">
              The Process
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">How CommunionHub Works</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Join our community and discover new ways to connect with others through our simple three-step process.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Discover Events",
                description: "Find gatherings that align with your faith, values, and interests near you.",
                icon: <Calendar className="h-8 w-8 text-white" />,
                color: "bg-gradient-to-br from-purple-500 to-purple-600 dark:from-purple-600 dark:to-purple-700",
                number: "01"
              },
              {
                title: "Connect With Others",
                description: "Meet like-minded individuals and expand your community network.",
                icon: <Users className="h-8 w-8 text-white" />,
                color: "bg-gradient-to-br from-blue-500 to-blue-600 dark:from-blue-600 dark:to-blue-700",
                number: "02"
              },
              {
                title: "Create Gatherings",
                description: "Host your own events and bring people together for a meaningful cause.",
                icon: <Sparkles className="h-8 w-8 text-white" />,
                color: "bg-gradient-to-br from-indigo-500 to-indigo-600 dark:from-indigo-600 dark:to-indigo-700",
                number: "03"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl dark:shadow-gray-900/30 hover:shadow-2xl hover:translate-y-[-5px] transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-700"
                whileHover={{ y: -5 }}
                variants={itemVariants}
              >
                <div className="relative">
                  <div className={`${feature.color} p-6`}>
                    <div className="flex justify-between items-center">
                      <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                        {feature.icon}
                      </div>
                      <span className="text-4xl font-bold text-white/30">{feature.number}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{feature.title}</h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Testimonials - Modern Card Style */}
        <motion.section variants={itemVariants} className="mb-24">
          <div className="text-center mb-16">
            <span className="inline-block py-1 px-3 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-300 rounded-full text-sm font-medium mb-2">
              Testimonials
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">What Our Community Says</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Join thousands of satisfied members who have found community through our platform.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                quote: "CommunionHub has transformed how I connect with my faith community and beyond. I've made meaningful relationships across different belief systems.",
                author: "Sarah M.",
                role: "Community Member",
                gradient: "bg-gradient-to-br from-purple-500/5 to-blue-500/5 dark:from-purple-900/10 dark:to-blue-900/10"
              },
              {
                quote: "As a community leader, CommunionHub gives me a platform to organize events that bring people together in ways I never thought possible.",
                author: "David L.",
                role: "Event Organizer",
                gradient: "bg-gradient-to-br from-blue-500/5 to-indigo-500/5 dark:from-blue-900/10 dark:to-indigo-900/10"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                className={`${testimonial.gradient} border border-gray-200 dark:border-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden`}
                whileHover={{ scale: 1.02 }}
                variants={itemVariants}
              >
                {/* Abstract shape decorations */}
                <div className="absolute top-0 right-0 w-20 h-20 -mt-10 -mr-10 bg-purple-200/50 dark:bg-purple-800/20 rounded-full"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 -mb-8 -ml-8 bg-blue-200/50 dark:bg-blue-800/20 rounded-full"></div>
                
                <div className="text-5xl text-purple-500 dark:text-purple-400 mb-4 font-serif">"</div>
                <p className="text-lg mb-6 text-gray-800 dark:text-gray-200 relative z-10 leading-relaxed">{testimonial.quote}</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center text-white font-bold">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div className="ml-3">
                    <p className="font-semibold text-gray-900 dark:text-white">{testimonial.author}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CTA Section - Updated with modern design */}
        <motion.section 
          variants={itemVariants}
          className="relative rounded-3xl overflow-hidden shadow-2xl mb-8"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-700 dark:to-blue-700"></div>
          
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-40 h-40 bg-white/10 rounded-full -mt-20 -ml-20"></div>
          <div className="absolute bottom-0 right-0 w-60 h-60 bg-white/10 rounded-full -mb-32 -mr-32"></div>
          
          <div className="relative z-10 p-12 md:p-16 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Join Our Community?</h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto mb-8 leading-relaxed">
              Start your journey with CommunionHub today and connect with people who share your values and interests.
            </p>
            <Button 
              size="lg" 
              className="bg-white hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 text-purple-700 dark:text-purple-400 hover:translate-y-[-2px] transition-all shadow-lg font-medium px-8 py-6 rounded-xl"
              onClick={() => navigate('/events')}
            >
              Get Started Today
            </Button>
          </div>
        </motion.section>
      </motion.div>
  
  );
};

export default HomePage;