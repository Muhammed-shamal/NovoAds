import { Button, Card, CardBody, Tab, Tabs } from "@nextui-org/react";
// import { useTheme } from "next-themes";
import Image from "next/image";

export default function WebDevelopment() {
  // const { theme } = useTheme();

  // console.log('them now ',theme)
  return (
    <div className="min-h-screen py-16 bg-background dark:bg-background-dark">
      {/* Hero Section */}
      <div className="text-center mb-16 px-6">
        <h1 className="text-4xl font-bold mt-6 ">
          Custom Web Development Solutions
        </h1>
        <p className="text-gray-600 dark:text-gray-300 text-lg mt-4 leading-relaxed">
          We build responsive, scalable, and engaging websites tailored to your
          business needs.
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
          {/* Web Application Development Section */}
          <div className="flex flex-col lg:flex-row bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg transition-transform hover:scale-105">
            <div className="flex-1">
              <h2 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-white">
                Web Application Development
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                Our master web application designers utilize programming
                processes, as PHP, Python, Java, ASP.net and HTML to create a
                progressive web application. Our team has the hands on
                experience in the industry by which we can ensure the most
                optimized, light weight and error free solutions. And so Foxiom
                is popular in the industry and considered the best web
                development company.
              </p>
            </div>
            <div className="mt-4 lg:mt-0 lg:ml-6">
              <Image
                src="/img/service-4.webp"
                alt="Web Application Development"
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

          {/* E-commerce Development Section */}
          <div className="flex flex-col lg:flex-row-reverse bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg transition-transform hover:scale-105">
            <div className="flex-1">
              <h2 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-white">
                E-commerce Development
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                E-commerce development plays a crucial role in enabling
                businesses to reach a global audience, increase sales, and adapt
                to the changing landscape of online commerce. Successful
                e-commerce websites prioritize user experience, security, and
                seamless transaction processes to build trust and loyalty among
                customers.
              </p>
            </div>
            <div className="mt-4 lg:mt-0 lg:mr-6">
              <Image
                src="/img/ecommerce-graphic.jpg"
                alt="E-commerce Development"
                width={500}
                height={300}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Technologies We Use */}
      <div className="mt-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-6">
        {[
          {
            name: "React.js",
            description:
              "React is a popular JavaScript library for building user interfaces, developed by Facebook. It allows developers to create reusable UI components and manage the state of complex applications efficiently. Its virtual DOM ensures high performance by minimizing direct manipulation of the real DOM.",
            icon: "/icons/react.svg",
          },
          {
            name: "Next.js",
            description:
              "Next.js is a React framework known for its server-side rendering (SSR) capabilities, static site generation (SSG), and powerful routing system. It enhances the performance and SEO of React applications, making it ideal for web applications that require fast load times and dynamic content.",
            icon: "/icons/nextjs.svg",
          },
          {
            name: "Tailwind CSS",
            description:
              "Tailwind CSS is a utility-first CSS framework that enables rapid UI development by providing pre-defined classes for styling. Unlike traditional CSS frameworks, Tailwind encourages a more customizable approach, reducing the need for writing custom CSS and improving maintainability.",
            icon: "/icons/tailwindcss.svg",
          },
          {
            name: "Node.js",
            description:
              "Node.js is a JavaScript runtime built on Chrome’s V8 JavaScript engine. It allows developers to build scalable server-side applications using JavaScript. Known for its non-blocking, event-driven architecture, Node.js is ideal for real-time applications like chat applications and streaming services.",
            icon: "/icons/nodejs.svg",
          },
          {
            name: "Mongodb",
            description:
              "MongoDB is a NoSQL database that stores data in JSON-like documents. It offers flexibility, scalability, and performance, making it a popular choice for modern applications that handle large volumes of unstructured data. Its document model aligns well with object-oriented programming.",
            icon: "/icons/mongodb.svg",
          },
          {
            name: "Python",
            description:
              "Python is a versatile, high-level programming language known for its simplicity and readability. It is widely used in web development, data analysis, machine learning, and scripting. With frameworks like Django and Flask, Python makes it easy to build powerful web applications quickly.",
            icon: "/icons/python.svg",
          },
          {
            name: "WordPress",
            description:
              "WordPress is a popular content management system (CMS) that powers over 40% of websites globally. It provides a user-friendly interface for creating and managing websites, blogs, and e-commerce stores. With thousands of themes and plugins, WordPress offers extensive customization options.",
            icon: "/icons/wordpress.svg",
          },
          {
            name: "MySql",
            description:
              "MySQL is a reliable and widely-used relational database management system (RDBMS). It supports SQL (Structured Query Language) for managing data and is known for its performance, security, and ease of use. MySQL is an excellent choice for applications that require structured data storage.",
            icon: "/icons/mysql.svg",
          },
          {
            name: "Html",
            description:
              "HTML (HyperText Markup Language) is the foundation of web development. It defines the structure and content of web pages using elements and tags. HTML works in conjunction with CSS and JavaScript to create interactive and visually appealing websites.",
            icon: "/icons/html.svg",
          },
          {
            name: "Firebase",
            description:
              "Firebase is a comprehensive app development platform by Google that provides backend services such as authentication, real-time database, and cloud storage.",
            icon: "/icons/firebase.svg",
          },

          {
            name: "Swift",
            description:
              "Swift is a powerful programming language developed by Apple for building iOS and macOS applications. It offers performance, safety, and modern features for app development.",
            icon: "/icons/swift.svg",
          },
          {
            name: "Kotlin",
            description:
              "Kotlin is a modern programming language used for Android development. It is fully interoperable with Java and offers concise syntax, safety, and great tooling support.",
            icon: "/icons/kotlin.svg",
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

      {/* Types of Websites */}
      <div className="max-w-6xl mx-auto mt-16 px-6">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
          Types of Websites We Develop
        </h2>
        {/* <Tabs aria-label="Types of Websites">
          {['Corporate', 'E-commerce', 'Portfolio', 'SaaS'].map((type) => (
            <Tab key={type} title={type}>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <p className="text-gray-700 dark:text-gray-300 mt-4 leading-relaxed">
                  Detailed information about {type} websites.
                </p>
              </div>
            </Tab>
          ))}
        </Tabs> */}
      </div>

      {/* Why Choose Us */}
      <div className="max-w-6xl mx-auto mt-16 px-6 grid md:grid-cols-4 gap-8">
        {[
          { name: "Custom Solutions", icon: "/icons/custom.svg" },
          { name: "Responsive Design", icon: "/icons/responsive.svg" },
          { name: "SEO Optimized", icon: "/icons/seo.svg" },
          { name: "Performance Focused", icon: "/icons/performance.svg" },
        ].map((feature) => (
          <Card
            key={feature.name}
            className={`p-6 text-center shadow-lg hover:bg-primary transition-colors duration-300`}
          >
            <Image
              src={feature.icon}
              alt={feature.name}
              className="mx-auto mb-4"
              width={60}
              height={50}
            />
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              {feature.name}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              Brief info about {feature.name}.
            </p>
          </Card>
        ))}
      </div>
    </div>
  );
}
