import React from "react";
import { motion } from "framer-motion";
import { portfolioData } from "../data";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiGithub,
  FiLinkedin,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

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
           <a
               href={`mailto:${portfolioData.contact.email}`}
             className="text-white font-medium hover:text-purple-400 transition"
>
  {portfolioData.contact.email}
</a>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-purple-500 group-hover:bg-purple-500 group-hover:text-white transition-all">
                  <FiPhone size={24} />
                </div>
                <div>
                  <p className="text-gray-500 text-sm uppercase tracking-widest font-bold">Call Me</p>
                  <a
                    href={`tel:${portfolioData.contact.phone}`}
                    className="text-white font-medium hover:text-purple-400 transition"
                  >
                    {portfolioData.contact.phone}
                  </a>
                </div>
              </div>

              <a
                href={`https://wa.me/${portfolioData.contact.whatsapp}?text=${encodeURIComponent("Hi Prerna, I found your portfolio and would like to connect.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-6 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-purple-500 group-hover:bg-purple-500 group-hover:text-white transition-all">
                  <FaWhatsapp size={24} />
                </div>
                <div>
                  <p className="text-gray-500 text-sm uppercase tracking-widest font-bold">WhatsApp</p>
                  <p className="text-white font-medium">{portfolioData.contact.whatsapp}</p>
                </div>
              </a>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-purple-500 group-hover:bg-purple-500 group-hover:text-white transition-all">
                  <FiMapPin size={24} />
                </div>
                <div>
                  <p className="text-gray-500 text-sm uppercase tracking-widest font-bold">Location</p>
                  <p className="text-white font-medium">{portfolioData.contact.location}</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-purple-500 group-hover:bg-purple-500 group-hover:text-white transition-all">
                  <FiGithub size={24} />
                </div>
                <div>
                  <p className="text-gray-500 text-sm uppercase tracking-widest font-bold">GitHub</p>
                  <a
                    href={portfolioData.contact.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-white font-medium hover:text-purple-400 transition"
                  >
                    @prernagulati109-pixel
                  </a>
                </div>
              </div>
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
              <div className="flex items-center gap-4 my-4">
                <div className="flex-1 h-px bg-white/10" />
                <span className="text-gray-400 uppercase tracking-widest font-bold">OR</span>
                <div className="flex-1 h-px bg-white/10" />
              </div>

              <a
                href={`https://wa.me/${portfolioData.contact.whatsapp}?text=${encodeURIComponent("Hi Prerna, I found your portfolio and would like to connect.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 bg-green-600 hover:bg-green-700 text-white rounded-xl font-bold transition-all flex items-center justify-center gap-3"
              >
                <FaWhatsapp />
                Send Message on WhatsApp
              </a>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

