'use client';

import { PROJECTS } from '@/lib/data';
import ProjectDetails from '@/components/data-display/project-details';
import Tag from '@/components/data-display/tag';
import Typography from '@/components/general/typography';
import Container from '@/components/layout/container';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const WorkSection = () => {
  return (
    <Container id="work">
      <div className="flex flex-col items-center gap-4">
        <div className="self-center">
          <Tag label="Work" />
        </div>
        <Typography variant="subtitle" className="max-w-xl text-center">
          Some of the noteworthy projects I have built:
        </Typography>
      </div>

      <motion.div
        className="flex flex-col gap-8 md:gap-12 w-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        {PROJECTS?.map((project, index) => (
          <motion.div key={index} variants={itemVariants}>
            <ProjectDetails
              {...project}
              layoutType={index % 2 === 0 ? 'default' : 'reverse'}
            />
          </motion.div>
        ))}
      </motion.div>
    </Container>
  );
};

export default WorkSection;
