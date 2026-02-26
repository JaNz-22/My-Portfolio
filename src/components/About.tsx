import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Code2, Palette, Rocket } from 'lucide-react';

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing maintainable and scalable code with best practices"
    },
    {
      icon: Palette,
      title: "Creative Design",
      description: "Crafting beautiful and intuitive user interfaces"
    },
    {
      icon: Rocket,
      title: "Fast Performance",
      description: "Optimizing for speed and smooth user experiences"
    }
  ];

  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-purple-400 mb-4">About Me</h2>
          <p className="text-purple-100 max-w-2xl mx-auto">
            I'm a passionate developer who loves creating exceptional digital experiences. 
            With a keen eye for design and a love for clean code, I bring ideas to life.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-purple-500/20"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="inline-block mb-4"
              >
                <feature.icon className="text-purple-400" size={48} />
              </motion.div>
              <h3 className="text-white mb-2">{feature.title}</h3>
              <p className="text-purple-200">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
