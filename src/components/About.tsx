import { motion } from 'framer-motion';
import { TextReveal } from './TextReveal';
import { SkillCloud } from './SkillCloud';
import { ImageAtomizer } from './ImageAtomizer';

const About = () => (
  <>
    <section id="about">
      <div className="container">
        <motion.div initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} transition={{ duration:.5 }} viewport={{ once:true, amount:.1 }}>
          <span className="section-num">01. about me</span>
          <h2 className="section-title mb-8">
            <TextReveal text="👋 About Me" delay={0.1} />
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-10 items-start">
          <motion.div initial={{ opacity:0, x:-20 }} whileInView={{ opacity:1, x:0 }} transition={{ duration:.5, delay:.1 }} viewport={{ once:true, amount:.1 }}>
            <div className="grid md:grid-cols-[6fr_4fr] gap-12 md:gap-16 items-center w-full">
              <div className="flex flex-col gap-4">
                <p className="body-text">
                  I am a <strong className="text-gray-200">Software Engineering</strong> student passionate about building scalable web applications, AI-powered automation workflows, and solving real-world problems through technology.
                </p>
                <p className="body-text">
                  I enjoy creating modern web experiences, learning new technologies, and continuously improving my development skills. My focus areas include <strong className="text-green-500">Full Stack Development</strong>, <strong className="text-green-500">AI Automation</strong>, and <strong className="text-green-500">DSA</strong>.
                </p>
                <p className="body-text">
                  Currently focusing on: Full Stack Development, AI Automation, React, Node.js, Java, MySQL, and DSA. I believe in building software that is efficient, scalable, and impactful.
                </p>
              </div>

              <div className="relative w-full max-w-[500px] mx-auto">
                  {/* Main image container, enlarged and set to true aspect ratio */}
                  <div className="relative w-full aspect-[1239/1272]">
                    <ImageAtomizer imageUrl="./sanskar.jpg" />
                  </div>
                </div>
              </div>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Skills section immediately after about */}
    <section id="skills">
      <div className="container">
        <motion.div initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} transition={{ duration:.5 }} viewport={{ once:true, amount:.1 }}>
          <span className="section-num">02. skills</span>
          <h2 className="section-title mb-8">
            <TextReveal text="💡 Tech Arsenal" delay={0.1} />
          </h2>
        </motion.div>

        <motion.div initial={{ opacity:0 }} whileInView={{ opacity:1 }} transition={{ duration: 1, delay: 0.2 }} viewport={{ once:true, amount:0.1 }}>
          <SkillCloud />
        </motion.div>
      </div>
    </section>
  </>
);

export default About;
