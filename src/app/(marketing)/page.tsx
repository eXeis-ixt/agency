import React from "react";
import Wrapper from "@/components/global/wrapper";
import Container from "@/components/global/container";
import { BorderBeam } from "@/components/ui/border-beam";
import Image from "next/image";
import { ArrowRight, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CanvasReveal } from "@/components/canvas";
import SectionBadge from "@/components/ui/section-badge";
import { Portfolio } from "@/components/portfolio";
import { SparkText } from "@/components/textspark";
import { Waitlist } from "@/components/waitlist";
import { Team } from "@/components/team";
import Icons from "@/components/global/icons";
import { features } from "@/constants";

const page = () => {
  return (
    <>
      <section className="w-full relative flex items-center justify-center flex-col px-4 md:px-0 py-8">
        <Wrapper>
          <div className="absolute inset-0 dark:bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[linear-gradient(to_right,#161616_1px,transparent_1px),linear-gradient(to_bottom,#161616_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] -z-10 h-[150vh]" />

          <Container>
            <div className="flex flex-col items-center justify-center py-20 h-full">
              <button className="group relative grid overflow-hidden rounded-full px-4 py-1 shadow-[0_1000px_0_0_hsl(0_0%_20%)_inset] transition-colors duration-200">
                <span>
                  <span className="spark mask-gradient absolute inset-0 h-[100%] w-[100%] animate-flip overflow-hidden rounded-full [mask:linear-gradient(white,_transparent_50%)] before:absolute before:aspect-square before:w-[200%] before:rotate-[-90deg] before:animate-rotate before:bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] before:content-[''] before:[inset:0_auto_auto_50%] before:[translate:-50%_-15%]" />
                </span>
                <span className="backdrop absolute inset-[1px] rounded-full bg-neutral-950 transition-colors duration-200 group-hover:bg-neutral-900" />
                <span className="h-full w-full blur-md absolute bottom-0 inset-x-0 bg-gradient-to-tr from-primary/40"></span>
                <span className="z-10 py-0.5 text-sm text-neutral-100 flex items-center justify-center gap-1.5">
                  <Image
                    src="/icons/sparkles-dark.svg"
                    alt="✨"
                    width={24}
                    height={24}
                    className="w-4 h-4"
                  />
                  Introducing The Agency Template
                  <ChevronRight className="w-4 h-4" />
                </span>
              </button>

              <div className="flex flex-col items-center mt-8 max-w-3xl w-11/12 md:w-full">
                <h1 className="text-4xl md:text-6xl lg:textxl md:!leading-snug font-semibold text-center bg-clip-text bg-gradient-to-b from-gray-50 to-gray-50 text-transparent">
                  Build your dream site with this template
                </h1>
                <p className="text-base md:text-lg text-foreground/80 mt-6 text-center">
                  Zero code, maximum speed. Make professional sites easy, fast
                  and fun while delivering best-in-class SEO, performance.
                </p>
                <div className=" mt-6">
                <Team />
              </div>
                <div className="hidden md:flex relative items-center justify-center mt-8 md:mt-12 w-full">
                  <Link
                    href="#"
                    className="flex items-center justify-center w-max rounded-full border-t border-foreground/30 bg-white/20 backdrop-blur-lg px-2 py-1 md:py-2 gap-2 md:gap-8 shadow-3xl shadow-background/40 cursor-pointer select-none"
                  >
                    <p className="text-foreground text-sm text-center md:text-base font-medium pl-4 pr-4 lg:pr-0">
                      ✨ {"  "} Start building your dream website now!
                    </p>
                    <Button
                      size="sm"
                      className="rounded-full hidden lg:flex border border-foreground/20"
                    >
                      Get Started
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="relative flex items-center py-10 md:py-20 w-full">
                <div className="absolute top-1/2 left-1/2 -z-10 gradient w-3/4 -translate-x-1/2 h-3/4 -translate-y-1/2 inset-0 blur-[10rem]"></div>
                <div className="-m-2 rounded-xl p-2 ring-1 ring-inset ring-foreground/20 lg:-m-4 lg:rounded-2xl bg-opacity-50 backdrop-blur-3xl">
                  <Image
                    src="/assets/dashboard-dark.svg"
                    alt="banner image"
                    width={1200}
                    height={1200}
                    quality={100}
                    className="rounded-md lg:rounded-xl bg-foreground/10 shadow-2xl ring-1 ring-border"
                  />

                  <BorderBeam size={250} duration={12} delay={9} />
                </div>
              </div>
            </div>
          </Container>
        </Wrapper>


        <Wrapper className=" felx flex-col items-center justify-center py-12 relative">
        <div className="hidden md:block absolute top-0 -right-1/3 w-72 h-72 bg-primary rounded-full blur-[10rem] -z-10"></div>
        <div className="hidden md:block absolute bottom-0 -left-1/3 w-72 h-72 bg-indigo-600 rounded-full blur-[10rem] -z-10"></div>
        <Container>
          <div className=" max-w-md mx-auto text-start md:text-center">
            <SectionBadge title="Features" />
            <h2 className=" text-3xl lg:text-4xl font-semibold mt-6">
              Discover all powerfull features
            </h2>
            <p className=" text-muted-foreground mt-6">
              TheStartup offers a range of features to help you build your own
              app
            </p>
          </div>
        </Container>
        <Container>
          <div className=" flex items-center justify-center mx-auto mt-8">
            <Icons.feature className=" mx-auto h-80" />
          </div>
        </Container>
        <Container>
          <div className="flex flex-col items-center justify-center py-10 md:py-20 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-8">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="flex flex-col items-start lg:items-start px-0 md:px-0"
                >
                  <div className="flex items-center justify-center">
                    <feature.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-medium mt-4">{feature.title}</h3>
                  <p className="text-muted-foreground mt-2 text-start lg:text-start">
                    {feature.info}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Wrapper>


        <Wrapper className=" felx flex-col items-center justify-center py-12 relative">
          <div className="hidden md:block absolute top-0 -right-1/3 w-72 h-72 bg-primary rounded-full blur-[10rem] -z-10"></div>
          <div className="hidden md:block absolute bottom-0 -left-1/3 w-72 h-72 bg-red-600 rounded-full blur-[10rem] -z-10"></div>
          <Container>
            <div className=" max-w-md mx-auto text-start md:text-center">
              <SectionBadge title="Discover" />
              <h2 className=" text-3xl lg:text-4xl font-semibold mt-6">
                Discover all services
              </h2>
              <p className=" text-muted-foreground mt-6">
                The Agency template offers a range of features to help you build
                your own app
              </p>
             
            </div>
          </Container>
          <Container>
            <CanvasReveal />
          </Container>
        </Wrapper>

        <Wrapper className=" felx flex-col items-center justify-center py-12 relative">
          <Container>
            <div className=" max-w-md mx-auto text-start md:text-center">
              <SectionBadge title="Portfolio" />
            </div>
          </Container>
          <Container>
            <Portfolio />
          </Container>
        </Wrapper>

       

        {/* <Wrapper className=" felx flex-col items-center justify-center py-12 relative">
          <div className="hidden md:block absolute top-0 -right-1/3 w-72 h-72 bg-primary rounded-full blur-[10rem] -z-10"></div>
          <div className="hidden md:block absolute bottom-0 -left-1/3 w-72 h-72 bg-red-600 rounded-full blur-[10rem] -z-10"></div>

          <Container>
            <div className=" max-w-md mx-auto text-start md:text-center">
              <SectionBadge title="Time Line" />
            </div>
          </Container>
          <Container>
            <TimeLineTemp />
          </Container>
        </Wrapper> */}


        <Wrapper className=" felx flex-col items-center justify-center py-12 relative">
          <Container>
            <div className=" max-w-md mx-auto text-start md:text-center">
              <SectionBadge title="Philosophy" />
            </div>
          </Container>
          <Container>
            <SparkText text="The Adons Project" />
          </Container>
        </Wrapper>


        <Wrapper className=" felx flex-col items-center justify-center py-12 relative">
          <div className="hidden md:block absolute top-0 -right-1/3 w-72 h-72 bg-primary rounded-full blur-[10rem] -z-10"></div>

          <Container>
            <div className=" max-w-md mx-auto text-start md:text-center">
              <SectionBadge title="Waitlist" />
            </div>
          </Container>
          <Container>
            <Waitlist />
          </Container>
        </Wrapper>

      </section>
    </>
  );
};

export default page;
