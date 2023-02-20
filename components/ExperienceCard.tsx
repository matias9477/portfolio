import React from 'react';
import { motion } from 'framer-motion';

type Props = {};

const ExperienceCard = (props: Props) => {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object cover object-center"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDy30XVwtkhj5YqOOzfyHwF_99WJYzCFVi5A&usqp=CAU"
        alt=""
      />

      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">Job title</h4>
        <p className="font-bold text-2xl mt-1">Company</p>
        <div className="flex space-x2 my-2">
          <img
            src="https://logosdownload.com/logo/javascript-logo-512.png"
            className="h-10 w-10 rounded-full"
          />
        </div>
        <p className="uppercase py-5 text-gray-300">from...to... </p>

        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>Summary Points</li>
          <li>Summary Points</li>
          <li>Summary Points</li>
          <li>Summary Points</li>
          <li>Summary Points</li>
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;
