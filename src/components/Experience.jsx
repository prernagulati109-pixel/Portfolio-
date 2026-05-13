import React from "react";
import { motion } from "framer-motion";
import { portfolioData } from "../data";

function Experience() {
  return (
    <section id="experience" className="py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Work <span className="text-purple-500">Experience</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            My professional journey and the organizations I've contributed to.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {portfolioData.experience.map((exp, idx) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="relative p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-purple-500/30 transition-all group"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-4">
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">
                    {exp.role}
                  </h3>
                  <p className="text-purple-500 font-medium">{exp.company}</p>
                </div>
                <span className="px-4 py-1 rounded-full bg-white/5 text-gray-400 text-sm border border-white/5 whitespace-nowrap self-start md:self-center">
                  {exp.duration}
                </span>
              </div>
              <p className="text-gray-400 leading-relaxed italic">
                "{exp.description}"
              </p>
              
              {/* Timeline connector visual (decorative) */}
              <div className="absolute top-1/2 -left-4 w-2 h-2 bg-purple-500 rounded-full hidden md:block"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
