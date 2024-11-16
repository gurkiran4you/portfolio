import SectionHeader from "./SectionHeader.tsx";

export default function Education() {
    const education = [
        {
            name: "University of North Carolina, Charlotte",
            website: "https://uncc.edu",
            duration: "Jan 2014 - Dec 2015",
            did: "Masters in Electrical Engineering",
            logo: "uncc.png",
        },
        {
            name: "Punjab Technical University, Jalandhar",
            website: "https://ptu.ac.in",
            duration: "Aug 2006 - May 2010",
            did: "Bachelors in Electronics and Communications Engineering",
            logo: "ptu.png",
        },
        {
            name: "Khalsa College, Amritsar",
            website: "https://khalsacollege.edu.in/",
            duration: "Aug 2005 - May 2006",
            did: "Senior Secondary",
            logo: "khalsa.png",
        },
        {
            name: "RDK DAV School, Batala",
            website: "https://rdkdavschool.edu.in/",
            duration: "Aug 1991 - May 2005",
            did: "Lower, middle and high school",
            logo: "rdk.png",
        },
    ];
    return (
        <>
            <SectionHeader heading="Education" />
            <ul class="flex flex-col gap-6">
                {education.map((edu) => {
                    return (
                        <li class="flex flex-col items-center justify-center sm:block dark:text-slate-100">
                            <div class="flex flex-col sm:flex-row items-center justify-between">
                                <div class="flex gap-1 items-center">
                                    <img
                                        src={`academics/${edu.logo}`}
                                        class={`h-[50px] w-[50px] ${
                                            edu.logo === "uncc.png" &&
                                            "bg-green-800 px-2"
                                        } `}
                                        alt="college logo"
                                    />
                                    <p class="sm:font-thin font-semibold text-sm sm:text-xl">
                                        {edu.name}
                                    </p>
                                    <a
                                        class="text-lg font-semibold"
                                        target="_blank"
                                        href={edu.website}
                                        aria-label={`visit website ${edu.name}`}
                                    >
                                        <img
                                            src="logos/link.svg"
                                            class="h-[20px]"
                                            alt="visit college website"
                                        />
                                    </a>
                                </div>
                                <time class="text-xs">{edu.duration}</time>
                            </div>
                            <p class="underline font-bold text-center">
                                {edu.did}
                            </p>
                        </li>
                    );
                })}
            </ul>
        </>
    );
}
