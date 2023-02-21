import { motion } from 'framer-motion';
import React from 'react';

type Props = {};

export const Projects = (props: Props) => {
  const projects = [1, 2, 3, 4, 5];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      className="flex flex-col relative h-screen text-center md:textleft md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20">
        {projects.map((project, index) => {
          return (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1.2 }}
              key={index}
              className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen"
            >
              <motion.img
                initial={{ y: -200, opacity: 0 }}
                transition={{ duration: 0.7 }}
                whileInView={{ opacity: 1, y: 0 }}
                src="https://www.interviewbit.com/blog/wp-content/uploads/2021/12/React-Projects.png"
                alt=""
              />
              <div className="space-y-10 px-0 md:px-10 max-w-6xl">
                <h4 className="text-2xl font-semibold text-center">
                  <span className="underline decoration-[#f7ab0a]/50">
                    Case of study {index + 1} of {projects.length}
                  </span>{' '}
                  name
                </h4>

                <p className="text-lg text-center md:text-left">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Nostrum fuga maxime beatae eligendi labore, deleniti
                  dignissimos itaque. Mollitia quam, repellendus amet deserunt
                  animi impedit neque earum, voluptates inventore laboriosam
                  quaerat.
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="w-full absolute top-[30%] bg-[#f7ab0a]/10 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  );
};
