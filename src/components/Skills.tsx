import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skills = [
    { name: "HTML/CSS", level: 70 },
    { name: "JavaScript", level: 65 },
    { name: "Python", level: 60 },
    { name: "React", level: 55 },
    { name: "TypeScript", level: 70 },
    { name: "Node.js", level: 50 },
    { name: "Tailwind CSS", level: 50 },
    { name: "Motion/Animations", level: 40 },
    { name: "UI/UX Design", level: 30}
  ];

  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-purple-400 mb-4">Skills & Expertise</h2>
          <p className="text-purple-100 max-w-2xl mx-auto">
            Technologies and tools I work with to bring your ideas to life
          </p>
        </motion.div>

        <div className="space-y-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex justify-between mb-2">
                <span className="text-white">{skill.name}</span>
                <span className="text-purple-400">{skill.level}%</span>
              </div>
              <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                  transition={{ duration: 1, delay: index * 0.1 + 0.3, ease: "easeOut" }}
                  className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
