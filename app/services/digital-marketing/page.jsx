import Image from "next/image";
import { Card, Button } from "@nextui-org/react";

const DigitalMarketing = () => {
  return (
    <div className="min-h-screen py-16 bg-background dark:bg-background-dark">
      {/* Hero Section */}
      <div className="text-center mb-16 px-6">
        <h1 className="text-4xl font-bold mt-6 ">
          Expert Digital Marketing Solutions
        </h1>
        <p className="text-gray-600 dark:text-gray-300 text-lg mt-4 leading-relaxed">
          Drive traffic, generate leads, and boost sales with our tailored
          digital marketing strategies.
        </p>
        <Button
          color="primary"
          className="mt-8 px-8 py-3 text-lg font-semibold"
        >
          Get Started
        </Button>
      </div>

      <section className="mt-8">
        <div className="max-w-14xl mx-auto grid grid-cols-1 lg:grid-cols-1 gap-12 px-6">
          {/* SEO Section */}
          <div className="flex flex-col lg:flex-row bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg transition-transform hover:scale-105">
            <div className="flex-1">
              <h2 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-white">
                Search Engine Optimization (SEO)
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                Boost your website&apos;s visibility on search engines with our
                expert SEO services. We use the latest techniques and strategies
                to improve your rankings and drive organic traffic.
              </p>
            </div>
            <div className="mt-4 lg:mt-0 lg:ml-6">
              <Image
                src="/img/seo.jpg"
                alt="SEO"
                width={500}
                height={300}
                className="rounded-lg"
              />
            </div>
          </div>

          {/* Divider Line */}
          <div className="col-span-2 my-8">
            <div className="h-px bg-gray-300"></div>
          </div>

          {/* Social Media Marketing Section */}
          <div className="flex flex-col lg:flex-row-reverse bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg transition-transform hover:scale-105">
            <div className="flex-1">
              <h2 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-white">
                Social Media Marketing
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                Engage your audience and build your brand on social media
                platforms. Our social media marketing services include content
                creation, management, and advertising to help you reach your
                goals.
              </p>
            </div>
            <div className="mt-4 lg:mt-0 lg:mr-6">
              <Image
                src="/img/social-media.jpg"
                alt="Social Media Marketing"
                width={500}
                height={300}
                className="rounded-lg"
              />
            </div>
          </div>

          {/* Divider Line */}
          <div className="col-span-2 my-8">
            <div className="h-px bg-gray-300"></div>
          </div>

          {/* Pay-Per-Click Advertising Section */}
          <div className="flex flex-col lg:flex-row bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg transition-transform hover:scale-105">
            <div className="flex-1">
              <h2 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-white">
                Pay-Per-Click Advertising (PPC)
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                Maximize your ROI with our targeted PPC campaigns. We create,
                manage, and optimize ads on platforms like Google Ads and Bing
                Ads to drive qualified traffic to your website.
              </p>
            </div>
            <div className="mt-4 lg:mt-0 lg:ml-6">
              <Image
                src="/img/ppc.jpg"
                alt="PPC Advertising"
                width={500}
                height={300}
                className="rounded-lg"
              />
            </div>
          </div>

          {/* Divider Line */}
          <div className="col-span-2 my-8">
            <div className="h-px bg-gray-300"></div>
          </div>

          {/* Content Marketing Section */}
          <div className="flex flex-col lg:flex-row-reverse bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg transition-transform hover:scale-105">
            <div className="flex-1">
              <h2 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-white">
                Content Marketing
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                Attract and retain your target audience with high-quality
                content. Our content marketing services include strategy
                development, content creation, and distribution to help you
                achieve your business objectives.
              </p>
            </div>
            <div className="mt-4 lg:mt-0 lg:mr-6">
              <Image
                src="/img/content-marketing.jpg"
                alt="Content Marketing"
                width={500}
                height={300}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Technologies We Use */}
      <div className="mt-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-6">
        {[
          {
            name: "Google Analytics",
            description:
              "Google Analytics provides detailed insights into your website traffic and marketing effectiveness. Track visitor behavior, measure conversions, and optimize your marketing strategies with powerful analytics tools.",
            icon: "/icons/google-analytics.svg",
          },
          {
            name: "Facebook Ads",
            description:
              "Facebook Ads is a powerful advertising platform that allows you to reach a vast audience with targeted ads. Create, manage, and optimize campaigns to increase brand awareness, generate leads, and drive sales.",
            icon: "/icons/facebook-ads.svg",
          },
          {
            name: "Hootsuite",
            description:
              "Hootsuite is a social media management tool that helps you schedule, manage, and analyze your social media campaigns. Save time and improve your social media strategy with Hootsuite's comprehensive features.",
            icon: "/icons/hootsuite.svg",
          },
          {
            name: "Mailchimp",
            description:
              "Mailchimp is an email marketing platform that enables you to create and send email campaigns, manage subscribers, and analyze campaign performance. Build relationships and grow your audience with Mailchimp.",
            icon: "/icons/mailchimp.svg",
          },
          {
            name: "Ahrefs",
            description:
              "Ahrefs is a powerful SEO toolset that helps you improve your search rankings. Conduct keyword research, analyze backlinks, track rankings, and optimize your website with Ahrefs' comprehensive tools.",
            icon: "/icons/ahrefs.svg",
          },
          {
            name: "HubSpot",
            description:
              "HubSpot is an all-in-one marketing, sales, and service platform. Attract visitors, convert leads, and close customers with HubSpot's powerful marketing automation and CRM tools.",
            icon: "/icons/hubspot.svg",
          },
        ].map((tech) => (
          <Card
            key={tech.name}
            className="p-6 flex items-center space-x-4 shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            <Image src={tech.icon} alt={tech.name} width={50} height={40} />
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                {tech.name}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mt-4 leading-relaxed">
                {tech.description}
              </p>
              {/* <Link href={tech.link} className="text-primary mt-4 inline-block">Read More →</Link> */}
            </div>
          </Card>
        ))}
      </div>

      {/* Types of Digital Marketing Services */}
      <div className="max-w-7xl mx-auto mt-16 px-6">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
          Types of Digital Marketing Services We Offer
        </h2>
        {/* <Tabs aria-label="Types of Digital Marketing Services">
          {['SEO', 'PPC', 'Content Marketing', 'Social Media Marketing'].map((type) => (
            <Tab key={type} title={type}>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-gray-700 mt-4 leading-relaxed">
                  Detailed information about {type} services.
                </p>
              </div>
            </Tab>
          ))}
        </Tabs> */}
      </div>

      {/* Why Choose Us */}
      <div className="max-w-7xl mx-auto mt-16 px-6 grid md:grid-cols-4 gap-8">
        {[
          { name: "Data-Driven Strategies", icon: "/icons/data-driven.svg" },
          { name: "Expert Team", icon: "/icons/expert-team.svg" },
          { name: "Proven Results", icon: "/icons/proven-results.svg" },
          { name: "Comprehensive Services", icon: "/icons/comprehensive.svg" },
        ].map((feature) => (
          <div
            key={feature.name}
            className="p-6 bg-gray-100 rounded-lg shadow-md text-center hover:bg-gray-200 transition-colors duration-300"
          >
            <Image
              src={feature.icon}
              alt={feature.name}
              className="mx-auto mb-4"
              width={60}
              height={50}
            />
            <h3 className="text-xl font-bold text-secondary dark:text-tertiary">{feature.name}</h3>
          </div>
        ))}
      </div>

      {/* FAQ Section */}
      <div className="max-w-7xl mx-auto mt-16 px-6">
        <h2 className="text-4xl font-bold text-secondary dark:text-tertiary mb-8">FAQs</h2>
        <div className="space-y-6">
          {[
            {
              question: "What is digital marketing?",
              answer:
                "Digital marketing encompasses all marketing efforts that use an electronic device or the internet. It includes SEO, PPC, social media marketing, and more.",
            },
            {
              question: "How can digital marketing help my business?",
              answer:
                "Digital marketing can help your business by increasing online visibility, driving traffic to your website, generating leads, and boosting sales.",
            },
            {
              question: "What services do you offer?",
              answer:
                "We offer a range of digital marketing services, including SEO, PPC, social media marketing, content marketing, and more.",
            },
          ].map((faq) => (
            <div
              key={faq.question}
              className="bg-gray-100 p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-bold text-secondary dark:text-tertiary">
                {faq.question}
              </h3>
              <p className="text-gray-700 mt-2 leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Get Started Section */}
      <div className="text-center mt-16 px-6">
        <h2 className="text-4xl font-bold text-secondary dark:text-tertiary mb-8">
          Ready to Grow Your Business?
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          Contact us today to get started with our expert digital marketing
          services.
        </p>
        <Button
          color="primary"
          className="mt-8 px-8 py-3 text-lg font-semibold"
        >
          Contact Us
        </Button>
      </div>
    </div>
  );
};

export default DigitalMarketing;
