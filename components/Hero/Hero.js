"use client";

import AnimatedTerminal from "@/utils/AnimatedTerminal";

import "./Hero.css";
import { Cover } from "../ui/SparkTextFast/cover";

const Hero = () => {
  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="isolate px-6 pt-16 sm:pt-8 lg:px-8">
          {/* Decorative Background Blur */}
          <div
            aria-hidden="true"
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          >
            <div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            />
          </div>

          {/* Hero Content */}
          <div className="mx-auto max-w-2xl py-24 sm:py-48 lg:py-56">
            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
              <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                Announcing our next round of funding.{" "}
                <a href="#" className="font-semibold text-secondary">
                  <span aria-hidden="true" className="absolute inset-0" />
                  Read more <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
            <div className="text-center">
              {/* Hero Heading */}
              <h1 className="font-poppins text-2xl font-medium tracking-tight text-secondary dark:text-background sm:text-5xl">
                <span className="block leading-tight">
                  Innovate, Learn, and Connect
                </span>
                <span className="block leading-relaxed">
                  With a
                  <Cover>
                    <strong className="dark:text-quaternary text-tertiary p-2">
                      {" "}
                      Unified IT Solution
                    </strong>
                  </Cover>
                </span>
              </h1>

              {/* Hero Subtext */}
              <p className="mt-6 text-md leading-8 text-primary dark:text-background">
                At NovoAds, we believe that your journey into the IT industry
                begins here. We are a forward-thinking startup committed to
                equipping aspiring professionals with the skills and knowledge
                they need to thrive in today&apos;s fast-paced tech world.
              </p>
              <p className="mt-4 text-md leading-8 text-primary dark:text-background">
                Whether you&apos;re a student, a fresh graduate, or a
                professional looking to upskill, NovoAds Technologies offers an
                engaging and supportive environment to launch or accelerate your
                career in IT.
              </p>

              {/* Call to Actions */}
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="#"
                  className="rounded-md bg-secondary dark:bg-tertiary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-tertiary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Get started
                </a>
                <a
                  href="#"
                  className="text-sm font-semibold leading-6 text-gray-900 dark:text-background"
                >
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>

          {/* Lower Decorative Background Blur */}
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          >
            <div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
              className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            />
          </div>
        </div>
        <AnimatedTerminal />
      </div>
    </section>
  );
};

export default Hero;
