import React from "react";
import { motion } from "framer-motion";
import { portfolioData } from "../data";
import { FiMail, FiPhone, FiMapPin, FiGithub } from "react-icons/fi";

function Contact() {
  return (
    <section id="contact" className="py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Let's <span className="text-purple-500">Connect</span>
            </h2>
            {/* <p className="text-gray-400 text-lg mb-12">
              I'm currently open to new opportunities and collaborations. If you have a question or just want to say hi, my inbox is always open!
            </p> */}

            <div className="space-y-6">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-purple-500 group-hover:bg-purple-500 group-hover:text-white transition-all">
                  <FiMail size={24} />
                </div>
                <div>
                  <p className="text-gray-500 text-sm uppercase tracking-widest font-bold">Email Me</p>
                  <p className="text-white font-medium">{portfolioData.contact.email}</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-purple-500 group-hover:bg-purple-500 group-hover:text-white transition-all">
                  <FiPhone size={24} />
                </div>
                <div>
                  <p className="text-gray-500 text-sm uppercase tracking-widest font-bold">Call Me</p>
                  <p className="text-white font-medium">{portfolioData.contact.phone}</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-purple-500 group-hover:bg-purple-500 group-hover:text-white transition-all">
                  <FiMapPin size={24} />
                </div>
                <div>
                  <p className="text-gray-500 text-sm uppercase tracking-widest font-bold">Location</p>
                  <p className="text-white font-medium">{portfolioData.contact.location}</p>
                </div>
              </div>

              <a 
                href={portfolioData.contact.github} 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-6 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-purple-500 group-hover:bg-purple-500 group-hover:text-white transition-all">
                  <FiGithub size={24} />
                </div>
                <div>
                  <p className="text-gray-500 text-sm uppercase tracking-widest font-bold">GitHub</p>
                  <p className="text-white font-medium">@prernagulati109-pixel</p>
                </div>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="p-8 md:p-12 rounded-3xl bg-white/5 border border-white/10"
          >
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-gray-400 text-sm font-medium ml-1">Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-purple-500 focus:outline-none transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-gray-400 text-sm font-medium ml-1">Email</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-purple-500 focus:outline-none transition-colors"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-gray-400 text-sm font-medium ml-1">Message</label>
                <textarea 
                  rows="5" 
                  placeholder="Your message here..."
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-purple-500 focus:outline-none transition-colors"
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-xl font-bold transition-all shadow-[0_0_20px_rgba(147,51,234,0.2)]"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

