import React, { FC } from 'react';
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';
import Link from 'next/link';

type Props = {};

const Header: FC = (props: Props) => {
  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.2,
        }}
        className="flex flex-row items-center"
      >
        {/* TODO: create component for this icons so I don't repeat so much code  */}
        <SocialIcon
          url="https://twitter.com/matiast__"
          target="_blank"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://www.linkedin.com/in/matias-turra/"
          target="_blank"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://github.com/matias9477"
          target="_blank"
          fgColor="gray"
          bgColor="transparent"
        />
      </motion.div>
      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.2,
        }}
        className="flex flex-row items-center text-gray-300 cursor-pointer"
      >
        <Link href="#contact">
          <button>
            <SocialIcon
              className="cursor-pointer"
              network="email"
              fgColor="gray"
              bgColor="transparent"
            />
          </button>
          <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
            Get in touch with me
          </p>
        </Link>
      </motion.div>
    </header>
  );
};

export default Header;
