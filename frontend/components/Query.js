import React, { useMemo } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import contactImage from "../public/assets/contact.jpg";
import ButtonPrimary from "./misc/ButtonPrimary";

const Query = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  return (
    <div
      className="bg-gradient-to-b from-white-300 to-white-500 w-full py-14" id="query">
      <ScrollAnimationWrapper className="relative w-full mt-16">
        <motion.div variants={scrollAnimation} custom={{ duration: 3 }}>
          <div className="flex items-center bg-gray-50">
            <div className="flex-1 h-full max-w-4xl mx-auto bg-white rounded-lg shadow-xl">
              <div className="flex flex-col md:flex-row">
                <div className="h-32 md:h-auto md:w-1/2">
                  <img className="object-cover w-full h-full" src={contactImage.src} alt="img" />
                </div>
                <div className="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
                  <div className="w-full">
                    <h3 className="text-3xl lg:text-4xl font-medium leading-relaxed text-black-600 mb-4">
                      Send Query, We like to read from you
                    </h3>
                    <div>
                      <label className="block text-sm">
                        Name
                      </label>
                      <input type="text"
                        className="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                        placeholder="Name" />
                    </div>
                    <div className="mt-4">
                      <label className="block text-sm">
                        Email
                      </label>
                      <input type="email"
                        className="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                        placeholder="Email Address" />
                    </div>
                    <div className="mt-4">
                      <label className="block text-sm">
                        Mobile
                      </label>
                      <input type="mobile"
                        className="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                        placeholder="Mobiule Number" />
                    </div>
                    <div className="mt-4">
                      <label className="block text-sm">
                        Query / Message
                      </label>
                      <input type="message"
                        className="w-full px-4 mb-6 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                        placeholder="Email Address" />
                    </div>
                    <ButtonPrimary>Send Now</ButtonPrimary>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </ScrollAnimationWrapper>
    </div>
  );
};

export default Query;
