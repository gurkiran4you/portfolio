import SectionHeader from "./SectionHeader.tsx";

export default function Skills() {
  const skills = [
    { name: "Javascript", icon: "js.svg" },
    { name: "Typescript", icon: "ts.svg" },
    { name: "Golang", icon: "go.svg" },
    { name: "Php", icon: "php.svg" },
    { name: "Python", icon: "python.svg" },
    { name: "Deno", icon: "deno.svg" },
    { name: "Fresh", icon: "fresh.svg" },
    { name: "Angular", icon: "angular.svg" },
    { name: "React", icon: "react.svg" },
  ];
  return (
    <>
      <SectionHeader heading="Skills" />
      <ul class="grid grid-template-cols-5 sm:grid-cols-3 gap-5 px-2 sm:px-[10em] place-items-center">
        {skills.map((s) => {
          return (
            <li class="w-1/3 sm:w-1/4 flex flex-col gap-2 sm:text-xl items-center dark:text-slate-100">
              <img src={`logos/${s.icon}`} />
              <code>{s.name}</code>
            </li>
          );
        })}
      </ul>
    </>
  );
}
