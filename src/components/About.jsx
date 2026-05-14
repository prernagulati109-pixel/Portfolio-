import React from "react";
import { motion } from "framer-motion";
import { portfolioData } from "../data";
import profileImg from "../assets/about-me.jpeg";

function About() {
  return (
    <section id="about" className="py-24 bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              A bit about <span className="text-purple-500">me</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              {portfolioData.profile}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-purple-600/20 to-pink-600/20 border border-white/10 flex items-center justify-center">
              <img 
                src={profileImg} 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-purple-600/30 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-pink-600/30 rounded-full blur-2xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;

