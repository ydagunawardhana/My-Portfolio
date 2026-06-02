'use client';

import { EXPERIENCES } from '@/lib/data';
import ExperienceDetails from '@/components/data-display/experience-details';
import Tag from '@/components/data-display/tag';
import Typography from '@/components/general/typography';
import Container from '@/components/layout/container';
import { motion } from 'framer-motion';

const ExperienceSection = () => {
  return (
    <Container className="bg-gray-50">
      <motion.div 
        className="flex flex-col items-center gap-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="self-center">
          <Tag label="Project Experience" />
        </div>
        <Typography variant="subtitle" className="max-w-xl text-center">
          Here is a quick summary of my most recent Project Experience:
        </Typography>
      </motion.div>

      <motion.div 
        className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full max-w-7xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
        }}
      >
        {EXPERIENCES?.map((experience, index) => (
          <motion.div 
            key={index}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
            }}
          >
            <ExperienceDetails {...experience} />
          </motion.div>
        ))}
      </motion.div>
    </Container>
  );
};

export default ExperienceSection;
