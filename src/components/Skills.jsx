import React from "react";
import { motion } from "framer-motion";
import { portfolioData } from "../data";

function Skills() {
  const skillCategories = [
    { title: "Frontend", skills: portfolioData.skills.frontend },
    { title: "Backend", skills: portfolioData.skills.backend },
    { title: "Database", skills: portfolioData.skills.database },
    { title: "Tools", skills: portfolioData.skills.tools },
    { title: "Languages", skills: portfolioData.skills.languages },
    { title: "Concepts", skills: portfolioData.skills.concepts },
  ];

  return (
    <section id="skills" className="py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6 md:px-10 text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-purple-500">Tech Stack</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            A comprehensive list of technologies and tools I've mastered and worked with throughout my journey.
          </p>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((category, idx) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-purple-500/50 transition-colors group"
          >
            <h3 className="text-xl font-bold text-white mb-6 group-hover:text-purple-400 transition-colors">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 rounded-xl bg-white/5 border border-white/5 text-gray-400 text-sm hover:bg-purple-500/10 hover:text-white hover:border-purple-500/20 transition-all cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Skills;

