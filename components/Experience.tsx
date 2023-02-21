import React, { FC } from 'react';
import { motion } from 'framer-motion';
import ExperienceCard from './ExperienceCard';
import { ExperienceItem, Report } from '@/data/data';

const Experience: FC<Report> = (report) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      className="h-screen flex relative overflow-x-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Experience
      </h3>

      <div className="w-full flex space-x-5 overflow-y-scroll  p-10 snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/40">
        {report.items.map((exp, index) => {
          return <ExperienceCard key={index} {...exp} />;
        })}
      </div>
    </motion.div>
  );
};

export default Experience;
