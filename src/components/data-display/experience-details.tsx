import Typography from "@/components/general/typography";
import ImageWrapper from "@/components/data-display/image-wrapper";
import Card from "@/components/layout/card";
import { ExperienceDetails as ExperienceDetailsProps } from "@/lib/types";
import { motion } from "framer-motion";

const dateFormatOptions: Intl.DateTimeFormatOptions = {
  year: "numeric",
  month: "short",
};

const ExperienceDetails = ({
  logo,
  darkModeLogo,
  logoAlt,
  position,
  currentlyWorkHere,
  startDate,
  endDate,
  summary,
}: ExperienceDetailsProps) => {
  return (
    <Card className="flex h-full w-full flex-col items-start justify-between p-6 transition-all duration-200 hover:scale-105 md:p-12">
      <div className="mb-4 flex w-full items-start justify-between">
        <div className="flex items-center gap-4">
          {typeof logo === "function" ? (
            (() => {
              const Icon = logo as React.ElementType;
              return (
                <Icon className="h-12 w-12 text-emerald-500 dark:text-emerald-400" />
              );
            })()
          ) : (
            <ImageWrapper
              src={logo as any}
              srcForDarkMode={darkModeLogo as any}
              alt={logoAlt}
              className="h-12 max-h-[48px] w-12 max-w-[48px] object-contain"
            />
          )}
          <h3 className="text-lg font-bold text-gray-900 dark:text-gray-500 md:text-xl">
            {position}
          </h3>
        </div>
        <Typography className="ml-4 whitespace-nowrap text-right text-xs font-semibold text-gray-600 md:text-sm">
          {new Intl.DateTimeFormat("en-US", dateFormatOptions).format(
            startDate,
          )}{" "}
          -{" "}
          {currentlyWorkHere
            ? "Present"
            : endDate
            ? new Intl.DateTimeFormat("en-US", dateFormatOptions).format(
                endDate,
              )
            : "NA"}
        </Typography>
      </div>
      <div className="relative ml-3 mt-5 w-full">
        {/* The Vertical Line */}
        <motion.div
          className="absolute left-0 top-0 bottom-0 w-[2px] bg-emerald-500/30"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          style={{ originY: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          viewport={{ once: true }}
        />
        <motion.ul 
          className="relative w-full list-none space-y-6 border-l-2 border-transparent"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.25 } }
          }}
        >
          {summary?.map((sentence, index) => (
            <motion.li
              key={index}
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 70 } }
              }}
            >
              <Typography
                className="relative w-full pl-6 text-justify !text-sm leading-relaxed !text-gray-700 before:absolute before:-left-[9px] before:top-1.5 before:h-3 before:w-3 before:rounded-full before:bg-emerald-500 before:content-[''] md:text-base"
              >
                {sentence}
              </Typography>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </Card>
  );
};

export default ExperienceDetails;
