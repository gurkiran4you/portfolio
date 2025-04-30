import AboutMe from "../../components/AboutMe.tsx";
import Education from "../../components/Education.tsx";
import Experience from "../../components/Experience.tsx";
import ExperienceFancy from "../../islands/ExperienceFancy.tsx";
import Footer from "../../components/Footer.tsx";
import Header from "../../components/Header.tsx";
import Skills from "../../components/Skills.tsx";
import DownloadResume from "../../islands/DownloadResume.tsx";
import FixScroll from "../../islands/FixScroll.tsx";
import HoverMenu from "../../islands/HoverMenu.tsx";
import PersonalProjects from "../../components/PersonalProjects.tsx";

export default function Home() {
  return (
    <>
      <Header />
      <section class="px-4 py-2 mx-auto dark:bg-slate-800 bg-slate-100 h-screen flex flex-col justify-around">
        <article class=" mx-auto flex flex-col sm:justify-around items-center justify-center sm:flex-row gap-6">
          <div class="flex flex-col items-center">
            <img
              class="my-6 rounded-full"
              src="/me.png"
              width="256"
              height="256"
              alt="my picture - carowinds, NC"
            />
            <ul class="flex gap-2 bg-white">
              <li>
                <a
                  href="https://www.linkedin.com/in/gurkiran4you/"
                  target="_blank"
                >
                  <img
                    src="logos/linkedin.svg"
                    alt="Link to my Linkedin page"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/gurkiran4you"
                  target="_blank"
                >
                  <img
                    src="logos/github.svg"
                    alt="Link to my github page"
                  />
                </a>
              </li>
            </ul>
          </div>
          <div class="flex flex-col items-center sm:block">
            <h1 class="text-2xl dark:text-white sm:text-4xl font-bold flex gap-1">
              Hi, I am Gurkiran{" "}
              <div class="rotate-0 hover:rotate-12 transition-all">👋</div>
            </h1>
            <p class="my-4">
              <code class="mx-2 dark:text-white">
                Full Stack Web Developer
              </code>
            </p>
          </div>
        </article>
        <DownloadResume />
      </section>
      <section class="dark:bg-[#3a388b] bg-slate-200 min-h-screen">
        <main class=" w-full px-2 py-4 sm:px-0  relative sm:left-1/2 sm:-translate-x-1/2 flex flex-col gap-4">
          <article id="about-me" class="flex flex-col gap-2">
            <AboutMe />
            <br></br>
            <br></br>
            <Skills />
          </article>
        </main>
      </section>
      <section id="experience" class="dark:bg-slate-800">
        <ExperienceFancy />
      </section>
      <section id="personal-projects" class="dark:bg-slate-800">
        <PersonalProjects />
      </section>
      <Footer />
      <HoverMenu />
      <FixScroll />
    </>
  );
}
