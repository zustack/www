import { Button } from "./ui/button";

export default function Hero() {
  return (
    <div id="home" className="lg:min-h-screen">
      <div className="flex justify-center">
        <div className="mt-[100px] mb-[100px] lg:mt-[200px]">
          <h1 className="text-center lg:text-8xl md:text-5xl text-3xl sm:text-4xl font-semibold">
            <span>We turn your ideas</span>
            <br />
            <span>into software</span>
          </h1>
          <div className="px-11">
            <h1 className="mt-11 text-black md:text-2xl text-center dark:text-zinc-500">
              <span>
                Zustack is a software development organization that provides
                software
              </span>
              <br />
              <span>solutions for everyone and everywhere.</span>
            </h1>
          </div>
          <div className="flex justify-center">
            <a href="mailto:contact@zustack.com" target="_blank">
              <Button className="mt-8 font-semibold">Book a meeting</Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
