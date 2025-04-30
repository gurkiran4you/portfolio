import SectionHeader from "./SectionHeader.tsx";

export default function PersonalProjects() {
  const personalProjects = [
    {
      name: "Hair Salon Website",
      icon: "salon.svg",
      link: "https://stylemestudio.ca",
    },
    {
      name:
        "Punjab Forms - State forms integrated into this app using web scraping",
      icon: "forms.svg",
      link: "https://punjab-forms-284197551885.asia-south2.run.app/punjab",
    },
    {
      name: "Astrology Website",
      icon: "astrology.svg",
      link: "https://astrologybymeetu.com",
    },
  ];
  return (
    <>
      <SectionHeader heading="Personal Projects" />
      <div class="flex flex-col items-center sm:items-stretch sm:flex-row sm:justify-around py-5 gap-4">
        {personalProjects.map((s) => {
          return (
            <a
              href={s.link}
              target="_blank"
              class="border border-transparent hover:border-pink-600 dark:hover:border-orange-300  hover:cursor-pointer px-2 py-5 w-1/3 sm:w-1/5 dark:bg-slate-200 bg-pink-100 flex flex-col gap-2 sm:text-xl items-center"
            >
              <img class="w-1/2" src={`logos/${s.icon}`} />
              <span class="text-xs text-center sm:text-sm inline-block px-2 py-1 dark:bg-black dark:text-white">
                {s.name}
              </span>
            </a>
          );
        })}
      </div>
    </>
  );
}
