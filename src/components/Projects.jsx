import React from "react";
import { motion } from "framer-motion";
import { portfolioData } from "../data";

function Projects() {
  return (
    <section id="projects" className="py-24 bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto px-6 md:px-10 text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="text-purple-500">Projects</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Selection of my favorite works, ranging from full-stack applications to machine learning systems.
          </p>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {portfolioData.projects.map((project, idx) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="group relative rounded-3xl overflow-hidden bg-white/5 border border-white/10 hover:border-purple-500/30 transition-all hover:-translate-y-2"
          >
            {/* Project Image Placeholder */}
            <div className="h-48 bg-gradient-to-br from-purple-900/50 to-pink-900/50 flex items-center justify-center overflow-hidden">
              <span className="text-4xl group-hover:scale-110 transition-transform duration-500">
                {idx === 0 ? "🌍" : idx === 1 ? "🎬" : "❤️"}
              </span>
            </div>

            <div className="p-8">
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tech.map((t) => (
                  <span key={t} className="text-[10px] uppercase tracking-wider font-bold text-purple-400/80 bg-purple-400/10 px-2 py-1 rounded">
                    {t}
                  </span>
                ))}
              </div>

              <a
                href={project.link}
                className="inline-flex items-center text-white text-sm font-semibold group/link"
              >
                View Project 
                <span className="ml-2 group-hover/link:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;

