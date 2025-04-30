import SectionHeader from "./SectionHeader.tsx";

export default function PersonalProjects() {
  const personalProjects = [
    {
      name: "Hair Salon Website",
      icon: "salon.svg",
      link: "https://astrologybymeetu.com",
    },
    {
      name: "Astrology Website",
      icon: "astrology.svg",
      link: "https://stylemestudio.ca",
    },
  ];
  return (
    <>
      <SectionHeader heading="Personal Projects" />
      <div class="flex flex-col items-center sm:flex-row sm:justify-around py-5">
        {personalProjects.map((s) => {
          return (
            <a
              href={s.link}
              target="_blank"
              class="border border-transparent hover:border-pink-300 dark:hover:border-orange-300  hover:cursor-pointer px-2 py-5 w-1/3 sm:w-1/5 dark:bg-slate-200 bg-pink-50 flex flex-col gap-2 sm:text-xl items-center"
            >
              <img src={`logos/${s.icon}`} />
              <span class="inline-block px-2 py-1 dark:bg-black dark:text-white">
                {s.name}
              </span>
            </a>
          );
        })}
      </div>
    </>
  );
}
