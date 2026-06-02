'use client';

import { CERTIFICATIONS } from '@/lib/data';
import Tag from '@/components/data-display/tag';
import Typography from '@/components/general/typography';
import Container from '@/components/layout/container';
import { motion } from 'framer-motion';

const CertificationsSection = () => {
  return (
    <Container id="certifications" className="w-full bg-gray-50 dark:bg-100">
      <div className="flex flex-col items-center gap-4">
        <div className="self-center">
          <Tag label="Certifications" />
        </div>
        <Typography variant="subtitle" className="max-w-xl text-center !text-gray-600 dark:!text-gray-700">
          My continuous learning and training journey:
        </Typography>
      </div>

      <motion.div 
        className="bg-gray-50 dark:bg-slate-800/50 rounded-xl p-8 w-[95%] md:w-[90%] max-w-6xl mx-auto relative mt-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        {/* Center Line */}
        <motion.div 
          className="absolute left-6 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-emerald-500 dark:bg-emerald-500" 
          initial={{ scaleY: 0 }} 
          whileInView={{ scaleY: 1 }} 
          style={{ transformOrigin: "top" }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          viewport={{ once: true, amount: 0.2 }}
        />

        <motion.div 
          className="flex flex-col gap-8 w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.3,
              }
            }
          }}
        >
          {CERTIFICATIONS.map((cert, index) => (
            <motion.div 
              key={index} 
              className="relative w-full"
              variants={{
                hidden: { opacity: 0, x: index % 2 === 0 ? -50 : 50 },
                visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 50 } }
              }}
            >
              {/* Dot */}
              <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-emerald-500 border-4 border-gray-300 dark:border-emerald-900 top-1 z-10 animate-pulse" />
              
              {/* Content */}
              <div
                className={`w-full pl-12 text-left ${
                  index % 2 === 0
                    ? 'md:w-1/2 md:pr-12 md:pl-0 md:text-right'
                    : 'md:w-1/2 md:pl-12 md:text-left md:ml-auto'
                }`}
              >
                <h3 className="text-lg font-bold text-gray-900 dark:text-gray-700">{cert.title}</h3>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-500 mt-1">{cert.institutionDate}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </Container>
  );
};

export default CertificationsSection;
