import AboutMe from "../../components/AboutMe.tsx";
import Education from "../../components/Education.tsx";
import Experience from "../../components/Experience.tsx";
import Footer from "../../components/Footer.tsx";
import Header from "../../components/Header.tsx";
import Skills from "../../components/Skills.tsx";
import DownloadResume from "../../islands/DownloadResume.tsx";
import FixScroll from "../../islands/FixScroll.tsx";
import HoverMenu from "../../islands/HoverMenu.tsx";

export default function Home() {
  return (
    <>
      <Header />
      <section class="px-4 py-2 sm:py-8 mx-auto dark:bg-[#716ec2] bg-slate-100">
        <article class="min-h-svh mx-auto flex flex-col items-center justify-center sm:flex-row gap-6">
          <img
            class="my-6 rounded-full"
            src="/me.png"
            width="256"
            height="256"
            alt="my picture - carowinds, NC"
          />
          <div class="flex flex-col items-center sm:block">
            <h1 class="text-2xl dark:text-white sm:text-4xl font-bold flex gap-1">
              Hi, I am Gurkiran{" "}
              <div class="rotate-0 hover:rotate-12 transition-all">👋</div>
            </h1>
            <p class="my-4">
              <code class="mx-2 dark:text-white">Full Stack Web Developer</code>
            </p>
          </div>
        </article>
        <DownloadResume />
      </section>
      <section class="dark:bg-[#3a388b] bg-slate-200">
        <main class=" w-full px-2 py-4 sm:px-0 sm:w-1/2 relative sm:left-1/2 sm:-translate-x-1/2 flex flex-col gap-4">
          <section id="about-me" class="flex flex-col gap-2">
            <AboutMe />
            <Skills />
          </section>
          <section id="experience">
            <Experience />
          </section>
          <section id="education">
            <Education />
          </section>
        </main>
      </section>

      <Footer />
      <HoverMenu />
      <FixScroll />
    </>
  );
}
