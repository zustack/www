import { BarChart4, Lightbulb, Video } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

export default function HowWeWork() {
  const [image, setImage] = useState(1);

  return (
    <>
      <div id="how-we-work" className="mb-[100px]" />
      <div className="min-h-screen px-4 py-8 sm:px-6 lg:px-8">
        <section className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
            <div className="w-full">
              <h1 className="text-zinc-100 font-semibold text-3xl sm:text-4xl mb-4">
                How we work?
              </h1>
              <p className="mb-8 text-zinc-300">
                Consider us not as a third-party company, but as integral
                members of your team. Together, we'll seamlessly bring your
                ideas to reality. Only 3 steps to make it happen.
              </p>

              <div className="flex-col space-y-4">
                {[
                  {
                    icon: <Video />,
                    title: "Our first meeting",
                    description:
                      "The first step is to have a meeting to understand your needs and requirements. We will discuss the project and establish a budget.",
                  },
                  {
                    icon: <Lightbulb />,
                    title: "Start the project",
                    description:
                      "If you agree with our budget and timeline, our design and development team will start working on your idea.",
                  },
                  {
                    icon: <BarChart4 />,
                    title: "Results",
                    description:
                      "Every week you see results on your project. We will have weekly meetings to show you the progress.",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    onClick={() => setImage(index + 1)}
                    className={`${
                      image === index + 1
                        ? "bg-zinc-700/50"
                        : "hover:bg-zinc-700/50 transition-colors duration-300"
                    } rounded-lg cursor-pointer`}
                  >
                    <div className="flex items-center gap-4 p-4">
                      <div className="border border-zinc-500 rounded-lg p-3 flex items-center justify-center flex-shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <span className="text-white font-semibold block mb-1">
                          {item.title}
                        </span>
                        <span className="text-zinc-300 text-sm">
                          {item.description}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex justify-center lg:justify-start">
                <a href="mailto:contact@zustack.com" target="_blank">
                  <Button className="mt-8 font-semibold">Book a meeting</Button>
                </a>
              </div>
            </div>

            <div className="w-full mt-8 lg:mt-0">
              <img
                className="rounded-md w-full h-auto object-cover"
                src="/meet.jpg"
                alt="Meeting illustration"
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
