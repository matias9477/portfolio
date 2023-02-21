import React from 'react';
import { motion } from 'framer-motion';

type Props = {};

export const About = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>

      <motion.img
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: -200, opacity: 1 }}
        transition={{ duration: 1 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="-mb-20 rounded-full md:mb-0 flex-shrink-0 w-56 h-56  object-cover 
        md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px] xs:rounded-sm"
        src="https://i.pinimg.com/originals/c7/24/3d/c7243dbb7fca4e8330bab161cf1f5525.jpg"
      />

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a{' '}
          <span className="underline decoration-[#f7ab0a]/50">little</span>{' '}
          background
        </h4>
        <p className="text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id repellat
          pariatur incidunt consectetur ab, porro inventore vel quasi dolorem
          quam reiciendis beatae quidem quos dolores eum accusamus impedit
          blanditiis sit?
        </p>
      </div>
    </motion.div>
  );
};
