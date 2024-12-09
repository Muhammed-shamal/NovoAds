
import { Button } from "@nextui-org/react";
import Image from "next/image";


const Roadmap = () => (
  <section className="p-4 overflow-hidden" id="roadmap">
    <div className="container md:pb-10">
      

      <div className="relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem]">
        {roadmap.map((item) => {
          const status = item.status === "done" ? "Done" : "In progress";

          return (
            <div
              className={`md:flex even:md:translate-y-[7rem] p-0.25 rounded-[2.5rem]`}
              key={item.id}
            >
              <div className="relative p-8 overflow-hidden xl:p-15">
                {/* <div className="absolute top-0 left-0 max-w-full">
                  <img
                    className="w-full"
                    src={'/roadmap/grid.png'}
                    width={550}
                    height={550}
                    alt="Grid"
                  />
                </div> */}
                <div className="relative z-1">
                  <div className="flex items-center justify-between max-w-[27rem] mb-8 md:mb-20">
                    {/* <Tagline>{item.date}</Tagline>

                    <div className="flex items-center px-4 py-1 bg-n-1 rounded text-n-8">
                      <img
                        className="mr-2.5"
                        src={item.status === "done" ? '/roadmap/check-02.svg' : '/roadmap/loading-01.svg'}
                        width={16}
                        height={16}
                        alt={status}
                      />
                      <div className="tagline">{status}</div>
                    </div> */}
                  </div>

                  <div className="mb-10 -my-10 -mx-15">
                    <Image
                      className="w-full"
                      src={item.imageUrl}
                      width={628}
                      height={426}
                      alt={item.title}
                    />
                  </div>
                  <h2 className="h4 mb-4">{item.title}</h2>
                  <p className="body-2 text-n-4">{item.text}</p>
                </div>
              </div>
            </div>
          );
        })}

        <Gradient />
      </div>

      <div className="flex justify-center mt-12 md:mt-15 xl:mt-20">
        <Button href="/roadmap">Our roadmap</Button>
      </div>
    </div>
  </section>
);

export default Roadmap;

const Gradient = () => {
    return (
      <div className="absolute top-[18.25rem] -left-[30.375rem] w-[56.625rem] opacity-60 mix-blend-color-dodge pointer-events-none">
        <div className="absolute top-1/2 left-1/2 w-[58.85rem] h-[58.85rem] -translate-x-3/4 -translate-y-1/2">
          <Image
            className="w-full"
            src={'/roadmap/image.png'}
            width={942}
            height={942}
            alt="Gradient"
          />
        </div>
      </div>
    );
  };


 const roadmap = [
     
    {
      id: "1",
      title: "Gamification",
      text: "Add game-like elements, such as badges or leaderboards, to incentivize users to engage with the chatbot more frequently.",
      date: "May 2023",
      status: "progress",
      imageUrl: '/roadmap/image-2.png',
    },
    {
      id: "2",
      title: "Chatbot customization",
      text: "Allow users to customize the chatbot's appearance and behavior, making it more engaging and fun to interact with.",
      date: "May 2023",
      status: "done",
      imageUrl: '/roadmap/image-3.png',
    },
     
  ];