"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import MyAbout from "/public/images/MyAbout.jpg";
import Tag from "@/components/data-display/tag";
import Container from "@/components/layout/container";
import Typography from "@/components/general/typography";
import Link from "@/components/navigation/link";
import AnimatedNumber from "@/components/data-display/animated-number";
import { EXTERNAL_LINKS } from "@/lib/data";

const AboutMeSection = () => {
  return (
    <Container className="bg-gray-50" id="about">
      <div className="self-center">
        <Tag label="About me" />
      </div>

      <div className="flex w-full flex-col justify-between gap-12 md:flex-row md:items-center">
        {/* Image */}
        <motion.div
          className="flex justify-center md:order-first md:justify-end"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative h-[380px] w-[320px] md:h-[460px] md:w-[380px] lg:h-[520px] lg:w-[440px]">
            <Image
              src={MyAbout}
              alt="Fullpose of Sagar"
              className="absolute z-10 h-[360px] w-[280px] rounded-2xl border-4 border-gray-50 max-md:left-5 md:right-0 md:top-0 md:h-[420px] md:w-[340px] lg:h-[480px] lg:w-[400px]"
              style={{ objectFit: "cover" }}
            ></Image>
            <div className="absolute h-[360px] w-[320px] rounded-2xl rounded-2xl border-8 border-transparent bg-gray-200 max-md:top-5 md:bottom-0 md:left-0 md:h-[420px] md:w-[340px] lg:h-[480px] lg:w-[400px]"></div>
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          className="flex max-w-xl flex-col gap-6"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Typography variant="h3">
            Curious about me? Here you have it:
          </Typography>
          <Typography className="text-justify">
            I&apos;m a passionate{" "}
            <span className="font-bold text-gray-900 dark:text-gray-800">
              Software Engineer
            </span>{" "}
            specializing in{" "}
            <span className="font-bold text-gray-900 dark:text-gray-800">
              Full-Stack Web Development
            </span>{" "}
            and{" "}
            <span className="font-bold text-gray-900 dark:text-gray-800">
              Artificial Intelligence
            </span>
            . I am enthusiastic about bringing both the complex technical
            architecture and the visual aspects of digital products to life.
            Creating precise, user-centric UI layouts and integrating
            intelligent machine learning models into robust systems is what
            truly drives me.
          </Typography>
          <Typography className="text-justify">
            Currently in my final year completing my{" "}
            <span className="font-bold text-gray-900 dark:text-gray-800">
              BSc (Hons) in Computer Science
            </span>{" "}
            at{" "}
            <span className="font-bold text-gray-900 dark:text-gray-800">
              NSBM Green University
            </span>{" "}
            awarded by{" "}
            <span className="font-bold text-gray-900 dark:text-gray-800">
              Plymouth University, (UK)
            </span>
            . My journey has been fueled by a deep curiosity for modern
            technologies. I am actively building scalable applications - ranging
            from advanced facial recognition attendance systems using{" "}
            <span className="font-bold text-gray-900 dark:text-gray-800">
              Python, FastAPI, and OpenCV
            </span>
            , to interactive 3D e-commerce platforms utilizing{" "}
            <span className="font-bold text-gray-900 dark:text-gray-800">
              React.js and Three.js
            </span>
            .
          </Typography>
          <Typography className="text-justify">
            I am a progressive thinker who enjoys working on products
            end-to-end, from{" "}
            <span className="font-bold text-gray-900 dark:text-gray-800">
              database design and API development
            </span>{" "}
            all the way to deploying{" "}
            <span className="font-bold text-gray-900 dark:text-gray-800">
              high-performance microservices
            </span>
            .
          </Typography>
          <Typography className="text-justify">
            When I&apos;m not in full-on developer mode, you can find me
            crafting UI/UX concepts on{" "}
            <span className="font-bold text-gray-900 dark:text-gray-800">
              Figma
            </span>
            , exploring the latest AI trends, or enjoying some strategic
            downtime playing Computer Games. You can follow my coding journey
            and projects on{" "}
            <Link
              noCustomization
              externalLink
              withUnderline
              href={EXTERNAL_LINKS.GITHUB}
            >
              GitHub
            </Link>
            , or connect with me professionally on{" "}
            <Link
              noCustomization
              externalLink
              withUnderline
              href="https://www.linkedin.com/in/yashan-dinusha"
            >
              LinkedIn
            </Link>
            .
          </Typography>
          <Typography>Finally, some quick bits about me.</Typography>
          <div className="flex flex-col gap-2 font-bold md:flex-row md:gap-6">
            <ul className="flex list-inside list-disc flex-col gap-2">
              <Typography component="li">
                BSc in Computer Science (Final Year)
              </Typography>
              <Typography component="li">Full-Stack & AI Developer</Typography>
            </ul>
            <ul className="flex list-inside list-disc flex-col gap-2">
              <Typography component="li">3D Web Design Enthusiast</Typography>
              <Typography component="li">Avid Learner</Typography>
            </ul>
          </div>

          <Typography>
            One last thing, I&apos;m always open to exciting new projects,
            collaborations, or tech discussions, so feel free to reach out and
            say hello!👋
          </Typography>
        </motion.div>
      </div>

      {/* Skill Progress Bars */}
      <div className="mt-12 w-full">
        <h3 className="mb-6 text-xl font-bold text-gray-900 dark:text-gray-700 md:text-3xl">
          Core Strengths
        </h3>
        <div className="grid grid-cols-1 gap-x-16 gap-y-8 md:grid-cols-2">
          {[
            { name: "Full-Stack Development", percentage: 90 },
            { name: "AI & Machine Learning", percentage: 85 },
            { name: "3D Web Development", percentage: 80 },
            { name: "Mobile App UI", percentage: 75 },
          ].map((skill, idx) => (
            <div key={idx} className="flex flex-col gap-2">
              <div className="flex items-center justify-between text-base font-semibold text-gray-600 dark:text-gray-600">
                <span>{skill.name}</span>
                <AnimatedNumber targetValue={skill.percentage} />
              </div>
              <div className="h-2.5 w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
                <motion.div
                  className="h-full rounded-full bg-emerald-500"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.percentage}%` }}
                  viewport={{ once: true, amount: 0.8 }}
                  transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default AboutMeSection;
