import Image from "next/image";
import React, { useMemo } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

const features = [
  "With our online platform, you can browse through products.",
  "We offer convenient delivery options ",
  "Staying up-to-date with the latest technology",
  "We are offering our customers a wide range of mobile phones at competitive prices."
]

const Feature = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div
      className="max-w-screen-xl mt-8 mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto"
      id="feature"
    >
      <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8 p  y-8 my-12">
        <ScrollAnimationWrapper className="flex w-full justify-end">
          <motion.div className="h-full w-full p-4" variants={scrollAnimation}>
            <Image
              src="/assets/mobile.png"
              alt="Amk-Int"
              layout="responsive"
              quality={100}
              height={414}
              width={508}
            />
          </motion.div>
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper>

        <motion.div className="flex flex-col items-end justify-center ml-auto w-full lg:w-9/12" variants={scrollAnimation}>
          <h3 className="text-3xl lg:text-4xl font-medium leading-relaxed text-black-600">
            Are you looking for a new phone
          </h3>
          <p className="my-2 text-black-500">
          Welcome to our mobile trading company based in the UAE! We are proud to be direct partners with leading mobile phone brands such as Samsung, One-Plus, Apple, Xiaomi, Oppo, Vivo and Infinix. Our company deals in both retail and wholesale, offering our customers a wide range of mobile phones at competitive prices.
          </p>
          <ul className="text-black-500 self-start list-inside ml-8">
            {features.map((feature, index) => (
              <motion.li
                className="relative circle-check custom-list"
                custom={{duration: 2 + index}}
                variants={scrollAnimation}
                key={feature}
                whileHover={{
                scale : 1.1,
                transition: {
                  duration: .2
                }
                }}>
                  {feature}
              </motion.li>
              )
            )}
          </ul>
        </motion.div>
        </ScrollAnimationWrapper>
      </div>
    </div>
  );
};

export default Feature;
