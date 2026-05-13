import React from "react";
import { motion } from "framer-motion";
import { portfolioData } from "../data";

function Education() {
  return (
    <section id="education" className="py-24 bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Educational <span className="text-purple-500">Background</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            My academic qualifications and certifications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {portfolioData.education.map((edu, idx) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-purple-500/30 transition-all flex flex-col"
            >
              <span className="text-purple-500 font-bold text-sm mb-4">{edu.duration}</span>
              <h3 className="text-xl font-bold text-white mb-2 leading-tight">
                {edu.degree}
              </h3>
              <p className="text-gray-400 text-sm mb-6">{edu.institution}</p>
              {edu.details && (
                <div className="mt-auto pt-6 border-t border-white/5">
                  <p className="text-gray-500 text-xs font-semibold uppercase tracking-widest">Performance</p>
                  <p className="text-white font-medium">{edu.details}</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
