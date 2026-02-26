import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const socialRef = useRef<HTMLDivElement>(null);

  const scrollToSocial = () => {
    socialRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: Github, label: "GitHub", href: "https://github.com/JaNz-22" },
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/franz" },
    { icon: Twitter, label: "Twitter", href: "https://twitter.com/yourprofile" },
    { icon: Mail, label: "Email", href: "mailto:fdpa04@gmail.com" }
  ];

  return (
    <section id="contact" ref={ref} className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl mx-auto w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-purple-400 mb-4">Let's Work Together</h2>
          <p className="text-purple-100 max-w-2xl mx-auto mb-12">
            Have a project in mind? I'd love to hear about it. Let's create something amazing together.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <motion.button
            onClick={scrollToSocial}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full hover:from-purple-700 hover:to-pink-700 transition-all cursor-pointer border-none"
          >
            Get In Touch
          </motion.button>
        </motion.div>

        <motion.div
          ref={socialRef}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex justify-center gap-6 mb-12"
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="p-4 bg-white/5 backdrop-blur-sm rounded-full border border-purple-500/20 text-purple-400 hover:text-purple-300 hover:border-purple-400/40 transition-colors"
              aria-label={social.label}
            >
              <social.icon size={24} />
            </motion.a>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-purple-300"
        >
          © 2025 FDPA. All rights reserved.
        </motion.p>
      </div>
    </section>
  );
}
