'use client';

import Image from 'next/image';
import { MapPin, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

import MyHeader from '/public/images/MyHeader.jpg';
import SocialIcons from '@/components/data-display/social-icons';
import Typography from '@/components/general/typography';
import Container from '@/components/layout/container';

const HeroSection = () => {
  return (
    <Container id="hero">
      <div className="flex flex-col gap-12 md:flex-row">
        {/* Image */}
        <motion.div 
          className="flex items-center justify-center md:order-last md:flex-grow md:justify-end"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative h-[300px] w-[280px] md:h-[380px] md:w-[350px]">
            <Image
              src={MyHeader}
              alt="Headyashan"
              className="absolute z-10 !h-[350px] !w-[320px] border-4 rounded-2xl border-gray max-md:left-5 md:left-0 md:top-0 md:h-[320px] md:w-[280px]"
              style={{ objectFit: 'cover' }}
            ></Image>
            <div className="absolute !h-[350px] !w-[320px] border-4 rounded-2xl border-transparent bg-gray-200 max-md:top-5 md:bottom-0 md:right-0 md:h-[320px] md:w-[280px]"></div>
          </div>
        </motion.div>

        {/* Content */}
        <motion.div 
          className="flex max-w-3xl flex-grow flex-col justify-center gap-8 md:order-first md:items-start md:justify-center 2xl:gap-12"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex flex-col gap-2">
            <Typography variant="h1">
              Hi, I&apos;m Yashan{' '}
              <span className="inline-block animate-waving-hand">👋</span>
            </Typography>
            <Typography className="text-justify">
              I&apos;m a Full Stack & AI ML Engineer specializing in building scalable web applications with React.js and Node.js. 
              I focus on creating highly interactive digital experiences, integrating intelligent Python microservices, and crafting precise, user-centric interfaces. 
              Whether it's developing 3D web visualizations or integrating advanced machine learning models, I love combining modern software engineering with AI to solve complex challenges.
            </Typography>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-2">
              <MapPin className="stroke-gray-600" />
              <Typography>Matara, Sri Lanka</Typography>
            </div>

            <div className="flex gap-2">
              <Phone className="stroke-gray-600" />
              <Typography>+94 74 070 1613</Typography>
            </div>

            <div className="flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center">
                <span className="relative flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500"></span>
                </span>
              </div>
              <Typography>Available for new projects</Typography>
            </div>
          </div>
          <SocialIcons />
        </motion.div>
      </div>
    </Container>
  );
};

export default HeroSection;
