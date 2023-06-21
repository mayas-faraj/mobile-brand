import React, { useMemo } from "react";
import Maps from "../public/assets/HugeGlobal.svg";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

const brands = [
  { name: "Samsung", image: "samsung.png" },
  { name: "Xiaomi", image: "xiaomi.png" },
  { name: "Infinix", image: "infinix.png" },
  { name: "One Plus", image: "one-plus.png" },
  { name: "Oppo", image: "oppo.png" },
  { name: "Vivo", image: "vivo.png" },
];

const Map = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div className="bg-green-500 w-full py-14" id="global">
      <div className="max-w-screen-xl  px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
        <div className="flex flex-col w-full my-16">
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className="text-2xl sm:text-3xl lg:text-4xl font-medium text-white-500 leading-relaxed w-9/12 sm:w-6/12 lg:w-4/12 mx-auto">
              AmkInt Store and POS
            </motion.h3>
            <motion.p className="leading-normal  mx-auto my-2 w-10/12 sm:w-7/12 lg:w-6/12 text-white-300" variants={scrollAnimation}>
              Our POS and stores around the world
            </motion.p>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper>
            <motion.div className="py-12 w-full px-8 mt-16" variants={scrollAnimation}>
              <Maps className="w-full h-auto" />
            </motion.div>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className="text-2xl sm:text-3xl lg:text-4xl font-medium text-white-500 leading-relaxed w-9/12 sm:w-6/12 lg:w-4/12 mx-auto">
              Brand Partners
            </motion.h3>
            <motion.p className="leading-normal  mx-auto my-2 w-10/12 sm:w-7/12 lg:w-6/12 text-white-300" variants={scrollAnimation}>
              We provide a host of effective distribution services allowing device manufacturers to focus on their core competencies. We constantly deploy resources to improve supply chain efficiencies and increase channel penetration in order to drive demand and enhance end-user satisfaction..
            </motion.p>
            <motion.div className="w-full flex justify-evenly items-center mt-4 flex-wrap lg:flex-nowrap bg-white-500 rounded-lg p-8" variants={scrollAnimation}>
              {/* <Netflix className="h-18 w-auto" /> */}
              {
                brands.map(({ name, image }) => (
                  <div>
                    <img
                      src={"/assets/brands/" + image}
                      className="h-14 w-auto mt-4 lg:mt-2"
                      alt={name + " logo"}
                    />
                    <h3 className="mt-4">{name}</h3>
                  </div>
                ))
              }

            </motion.div>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </div>
  );
};

export default Map;
