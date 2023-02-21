import React, { FC } from 'react';
import { motion } from 'framer-motion';
import { ExperienceItem } from '@/data/data';

const ExperienceCard: FC<ExperienceItem> = ({
  image,
  title,
  company,
  techStack,
  from,
  to,
  summary,
}) => {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-35 h-32 xl:w-[130px] xl:h-[200px] object cover object-center"
        src={image}
        alt={company}
      />

      <div className="px-0 md:px-10 text-center">
        <h4 className="text-4xl font-light">{title}</h4>
        <p className="font-bold text-2xl mt-1">{company}</p>
        <div className="flex space-x2 my-2 justify-between">
          {techStack.map((tech, index) => {
            return <img src={tech} className="h-10 w-10" key={index} />;
          })}
        </div>
        <p className="uppercase py-5 text-gray-300">
          {from} - {to}{' '}
        </p>

        <ul className="list-disc space-y-4 ml-5 text-lg">
          {summary.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;
