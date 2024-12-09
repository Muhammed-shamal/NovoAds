"use client";
import { cn } from "@/lib/utils";
import {React,useState} from "react";
import { BentoGrid,BentoGridItem} from "../ui/Grid/bento-grid";
import {
  IconBoxAlignRightFilled,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import { motion, AnimatePresence} from "framer-motion";
import Image from "next/image";

// Main Demo component with card tap-to-open functionality
export function BentoGridDemo() {
  const [selectedId, setSelectedId] = useState(null);  // Track selected card

  console.log("id",selectedId);

  return (
    <>
      <BentoGrid className="p-4 sm:p-1 max-w-7xl mx-auto md:auto-rows-[20rem]">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            layoutId={item.id}  // Use item id for layout transitions
            title={item.title}
            description={item.description}
            header={item.header}
            className={cn("[&>p:text-lg]", item.className)}
            icon={item.icon}
            onClick={() => setSelectedId(item.id)}  // Set the selected card
          />
        ))}
      </BentoGrid>

      {/* Expanded Card View */}
      <AnimatePresence>
        {selectedId && (
          <motion.div 
            layoutId={selectedId} 
            className="fixed inset-0 bg-gray-900/80 flex items-center justify-center p-10"
          >
            <div className="bg-white dark:bg-black p-8 rounded-lg max-w-lg w-full">
              <motion.h2 className="text-2xl font-bold">
                {items.find(item => item.id === selectedId)?.title}
              </motion.h2>
              <motion.p className="mt-4 text-lg">
                {items.find(item => item.id === selectedId)?.description}
              </motion.p>
              <motion.button
                onClick={() => setSelectedId(null)}  // Close expanded card
                className="mt-6 px-4 py-2 bg-red-500 text-white rounded-lg"
              >
                Close
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

const SkeletonOne = () => {
  const variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: 10,
      rotate: 5,
      transition: {
        duration: 0.2,
      },
    },
  };
  const variantsSecond = {
    initial: {
      x: 0,
    },
    animate: {
      x: -10,
      rotate: -5,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    (<motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2">
      <motion.div
        variants={variants}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2  items-center space-x-2 bg-secondar dark:bg-black">
        <div
          className="h-6 w-6 rounded-full bg-gradient-to-r from-tertiary-500 to-secondary-500 flex-shrink-0" />
        <div className="w-full bg-gray-100 h-4 rounded-full dark:bg-neutral-900" />
      </motion.div>
      <motion.div
        variants={variantsSecond}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center space-x-2 w-3/4 ml-auto bg-white dark:bg-black">
        <div className="w-full bg-gray-100 h-4 rounded-full dark:bg-neutral-900" />
        <div
          className="h-6 w-6 rounded-full bg-gradient-to-r from-tertiary-500 to-secondary-500 flex-shrink-0" />
      </motion.div>
      <motion.div
        variants={variants}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center space-x-2 bg-white dark:bg-black">
        <div
          className="h-6 w-6 rounded-full bg-gradient-to-r from-tertiary-500 to-secondary-500 flex-shrink-0" />
        <div className="w-full bg-gray-100 h-4 rounded-full dark:bg-neutral-900" />
      </motion.div>
    </motion.div>)
  );
};
const SkeletonTwo = () => {
  const variants = {
    initial: {
      width: 0,
    },
    animate: {
      width: "100%",
      transition: {
        duration: 0.2,
      },
    },
    hover: {
      width: ["0%", "100%"],
      transition: {
        duration: 2,
      },
    },
  };
  const arr = new Array(6).fill(0);
  return (
    (<motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2">
      {arr.map((_, i) => (
        <motion.div
          key={"skelenton-two" + i}
          variants={variants}
          style={{
            maxWidth: Math.random() * (100 - 40) + 40 + "%",
          }}
          className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2  items-center space-x-2 bg-neutral-100 dark:bg-black w-full h-4"></motion.div>
      ))}
    </motion.div>)
  );
};
const SkeletonThree = () => {
  const variants = {
    initial: {
      backgroundPosition: "0 50%",
    },
    animate: {
      backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
    },
  };
  return (
    (<motion.div
      initial="initial"
      animate="animate"
      variants={variants}
      transition={{
        duration: 5,
        repeat: Infinity,
        repeatType: "reverse",
      }}
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] rounded-lg bg-dot-black/[0.2] flex-col space-y-2"
      style={{
        background:
          "linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)",
        backgroundSize: "400% 400%",
      }}>
      <motion.div className="h-full w-full rounded-lg"></motion.div>
    </motion.div>)
  );
};
const SkeletonFour = () => {
  const first = {
    initial: {
      x: 20,
      rotate: -5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  const second = {
    initial: {
      x: -20,
      rotate: 5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  return (
    (<motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-row space-x-2">
      <motion.div
        variants={first}
        className="h-full w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center">
        <Image
          src="/svg/js.svg"
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full h-10 w-10" />
        <p
          className="sm:text-sm text-xs text-center font-semibold text-primary dark:text-background mt-4">
          
          &quot;Just code with Javascript&quot;
          <br/>
          <small>JavaScript is a versatile programming language primarily used for web development.</small>
        </p>
        <p
          className="border border-red-500 bg-red-100 dark:bg-red-900/20 text-red-600 text-xs rounded-full px-2 py-0.5 mt-4">
          Delusional
        </p>
      </motion.div>
      <motion.div
        className="h-full relative z-20 w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center">
        <Image
          src="/svg/flutter.svg"
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full h-10 w-10" />
        <p
          className="sm:text-sm text-xs text-center font-semibold text-primary dark:text-background mt-4">
          
          &quot;Make your favour apps with flutter&quot;
          <br/>
          <small>Flutter is an open-source UI toolkit developed by Google</small>
        </p>
        <p
          className="border border-green-500 bg-green-100 dark:bg-green-900/20 text-green-600 text-xs rounded-full px-2 py-0.5 mt-4">
          Sensible
        </p>
      </motion.div>
      <motion.div
        variants={second}
        className="h-full w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center">
        <Image
          src="/svg/python.svg"
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full h-10 w-10" />
        <p
          className="sm:text-sm text-xs text-center font-semibold text-primary dark:text-background mt-4">
          &quot;python for all&quot;
          <br/>
          <small>Python is used for web development, artificial intelligence (AI), and machine learning (ML)</small>
        </p>
        <p
          className="border border-orange-500 bg-orange-100 dark:bg-orange-900/20 text-orange-600 text-xs rounded-full px-2 py-0.5 mt-4">
          Helpless
        </p>
      </motion.div>
    </motion.div>)
  );
};
const SkeletonFive = () => {
  const variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: 10,
      rotate: 5,
      transition: {
        duration: 0.2,
      },
    },
  };
  const variantsSecond = {
    initial: {
      x: 0,
    },
    animate: {
      x: -10,
      rotate: -5,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    (<motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2">
      <motion.div
        variants={variants}
        className="flex flex-row rounded-2xl border border-neutral-100 dark:border-white/[0.2] p-2  items-start space-x-2 bg-white dark:bg-black">
        <Image
          src="/svg/react.svg"
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full h-10 w-10" />
        <p className="text-xs text-neutral-500">
          There are a lot of cool framerworks out there like React, Angular,
          Vue, Svelte that can make your life ....

        </p>
      </motion.div>
      <motion.div
        variants={variantsSecond}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center justify-end space-x-2 w-3/4 ml-auto bg-white dark:bg-black">
        <p className="text-xs text-neutral-500">Use Next JS.</p>
        {/* <div
          className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0" /> */}
          <Image
          src="/svg/next-js.svg"
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full h-10 w-10" />
      </motion.div>
    </motion.div>)
  );
};
const items = [
  // {
  //   // id: 1,
  //   title: "AI Content Generation",
  //   description: (
  //     <span className="text-sm">
  //       Experience the power of AI in generating unique content.
  //     </span>
  //   ),
  //   header: <SkeletonOne />,
  //   className: "md:col-span-1",
  //   icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  // },
  // {
  //   // id: 2,
  //   title: "Automated Proofreading",
  //   description: (
  //     <span className="text-sm">
  //       Let AI handle the proofreading of your documents.
  //     </span>
  //   ),
  //   header: <SkeletonTwo />,
  //   className: "md:col-span-1",
  //   icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  // },
  {
    // id: 3,
    title: "Contextual Suggestions",
    description: (
      <span className="text-sm">
        Get AI-powered suggestions based on your writing context.
      </span>
    ),
    header: <SkeletonThree />,
    className: "md:col-span-1",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    // id: 4,
    title: "Sentiment Analysis",
    description: (
      <span className="text-sm">
        Understand the sentiment of your text with AI analysis.
      </span>
    ),
    header: <SkeletonFour />,
    className: "md:col-span-2",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },

  // {
  //   // id: 5,
  //   title: "Text Summarization",
  //   description: (
  //     <span className="text-sm">
  //       Summarize your lengthy documents with AI technology.
  //     </span>
  //   ),
  //   header: <SkeletonFive />,
  //   className: "md:col-span-1",
  //   icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  // },
];
