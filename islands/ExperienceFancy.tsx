import { useEffect, useRef, useState } from "preact/hooks";
import { TopIntersectionWatcher } from "./IntersectionObserver.tsx";

type singleExperience = {
  order: number;
  role: string;
  institution: string;
  what_i_did: string[];
};

type experience = {
  year: number;
  exps: singleExperience[];
};

type ScrollDirection = "up" | "down";

const latestyear = 2024;
const oldestyear = 1989;

const experiences = [
  {
    year: 2024,
    exps: [
      {
        order: 0,
        role: "Senior Software engineer - web applications",
        institution: "Circle CVI",
        what_i_did: [
          "Full stack development of a medical reporting web application",
          "Responsible for Frontend architecture and localization",
          "Spearheaded AngularJS to Angular migration",
          "Contributed in php to Golang migrations of various components within reporting",
          "Implemented WYSIWYG report feature i.e. Edit mode, preview mode and pdf generation",
          "Implemented template-driven reporting for better customizations",
        ],
      },
    ],
  },
  {
    year: 2018,
    exps: [
      {
        order: 2,
        role: "frontend Engineer",
        institution: "Fidelity Investments",
        what_i_did: [
          "Worked on building an Onboarding portal for current and prospective hires using React",
          "Made the CSS modular by using SCSS features such as mixins, placeholders, functions etc",
          "Used React JS to build the portal, with best practices",
          "Developed Swagger API using NodeJS, as a mockup for the Java Backend team to speed up their development",
          "Added responsive typography throughout the app",
        ],
      },
      {
        year: 2018,
        order: 1,
        role: "frontend Engineer",
        institution: "Comcast Corporation",
        what_i_did: [
          "Continuing implementing agent experience app for Xfinity mobile",
          "This app is used by Xfinity mobile store agents to create/modify/add services/add lines to Xfinity mobile customers (Up to 5 lines)",
          "This project is an upgradation from an earlier outdated app which used Zendesk",
          "The app used latest Angular version (Angular 5 and 6) with Bootstrap , SCSS in Node environment",
          "Decreased the dev build time of the app from 2 minutes to 20 seconds in webpack",
        ],
      },
    ],
  },
  {
    year: 2017,
    exps: [
      {
        order: 2,
        role: "frontend Engineer",
        institution: "Comcast Corporation",
        "what_i_did": [
          "Continuing implementing agent experience app for Xfinity mobile",
          "This app is used by Xfinity mobile store agents to create/modify/add services/add lines to Xfinity mobile customers (Up to 5 lines)",
          "This project is an upgradation from an earlier outdated app which used Zendesk",
          "The app used latest Angular version (Angular 5 and 6) with Bootstrap , SCSS in Node environment",
          "Decreased the dev build time of the app from 2 minutes to 20 seconds in webpack",
        ],
      },
      {
        order: 1,
        role: "frontend Engineer",
        institution: "AARP",
        "what_i_did": [
          "Moving the old unresponsive components into responsive mobile-friendly web apps",
          "Helped in developing new proof-of-concept home page website of AARP",
          "Migrating some apps from AngularJS 1.2 to AngularJS 1.5",
          "Helped in developing new Home Page using technologies like gulp, Reactjs",
          "Daily content updates to match with the current home page of AARP",
        ],
      },
    ],
  },
  {
    year: 2016,
    exps: [
      {
        order: 0,
        role: "frontend Engineer",
        institution: "AARP",
        "what_i_did": [
          "Moving the old unresponsive components into responsive mobile-friendly web apps",
          "Helped in developing new proof-of-concept home page website of AARP",
          "Migrating some apps from AngularJS 1.2 to AngularJS 1.5",
          "Helped in developing new Home Page using technologies like gulp, Reactjs",
          "Daily content updates to match with the current home page of AARP",
        ],
      },
    ],
  },
  {
    year: 2015,
    exps: [
      {
        order: 0,
        role: "Master of Science in Electrical Engineering",
        institution: "University of North Carolina at Charlotte",
        "what_i_did": [
          "Computer Architecture",
          "Data communication and networking",
          "Wireless Sensor Networks",
          "Survey of programming languages",
          "Semiconductor Opto Mat & Dev",
          "Antennas",
          "Linear Integrated electronics",
          "Science and technology of PV",
          "Foundation of Optical Engineering",
          "Fundamentals of Wireless systems",
        ],
      },
    ],
  },
  {
    year: 2013,
    exps: [
      {
        order: 0,
        role: "web developer",
        institution: "Parshu Solutions",
        "what_i_did": [
          "Worked on GWT (Google Web Toolkit)",
          "Developed a health system for clients in India",
          "Developed an inventory management system for clients in Canada",
          "GWT, SQL, HTML, CSS, JavaScript, Java",
        ],
      },
    ],
  },
  {
    year: 2011,
    exps: [
      {
        order: 0,
        role: "systems engineer",
        institution: "Infosys Limited",
        "what_i_did": [
          "Did training in various technologies such as Java, C, C++, SQL, PL/SQL",
          "Worked on an inhouse project in J2EE",
          "Collaborated with fellow developers to develop various projects as part of training",
        ],
      },
    ],
  },
  {
    year: 2010,
    exps: [
      {
        order: 0,
        role:
          "Bachelor of Technology in Electronics and Communication Engineering",
        institution: "Punjab Technical University, Jalandhar",
        "what_i_did": [
          "Enggineering Mathematics",
          "Digital Electronics",
          "Microprocessor and Microcontroller",
          "Digital Signal Processing",
          "Computer Networks",
          "Analog Electronics",
          "Control Systems",
          "Digital Communication",
          "VLSI Design",
        ],
      },
    ],
  },
  {
    year: 2006,
    exps: [
      {
        order: 0,
        role: "Senior Secondary",
        institution: "Khalsa College, Amritsar",
        "what_i_did": [
          "Physics",
          "Chemistry",
          "Mathematics",
          "English",
          "Punjabi",
          "Computer Science",
        ],
      },
    ],
  },
  {
    year: 2005,
    exps: [
      {
        order: 0,
        role: "Lower, middle and high school",
        institution: "RDK DAV Public School, Batala",
        "what_i_did": [
          "English",
          "Punjabi",
          "Mathematics",
          "Science",
          "Social Studies",
          "Computer Science",
          "Physical Education",
          "Arts",
          "Music",
          "History",
          "Geography",
          "Civics",
        ],
      },
    ],
  },
];

export default function ExperienceFancy() {
  const [currentYear, setCurrentYear] = useState(2024);
  const [currentExperienceYear, setcurrentExperienceYear] = useState(2024);
  const [multipleExperience, setMultipleExperience] = useState(false);
  const [scrollDirection, setScrollDirection] = useState<ScrollDirection>(
    "down",
  );

  const [trap, setTrap] = useState(false);

  const sectionRef = useRef<HTMLDivElement>(null);

  const trackpadDelta = useRef(0);
  const currentYearRef = useRef(currentYear);

  let currentExptext: singleExperience | undefined;

  const handleNonExperienceYear = () => {
    if (scrollDirection === "up") {
      // find the next year in experience after currentExperienceYear
      const sorted = [...experiences].sort((a, b) => a.year - b.year);
      // find the next next larger year than currentExperienceYear
      const nextYear = sorted.find((exp) => exp.year > currentYear)
        ?.year;
      currentExp = sorted.find((exp) => exp.year === nextYear) as experience;
    } else {
      currentExp = experiences.find((exp) =>
        exp.year === currentExperienceYear
      ) as experience;
    }
    if ((currentExp?.exps ?? []).length > 1) {
      currentExptext = currentExp?.exps.reduce((max, item) => {
        if (scrollDirection === "down") {
          return item.order > max.order ? item : max;
        } else {
          return item.order < max.order ? item : max;
        }
      }, currentExp.exps[0]);
    } else {
      currentExptext = currentExp?.exps[0];
    }
  };

  const handleExperienceYear = (currentExp: experience) => {
    if ((currentExp?.exps ?? []).length > 1) {
      setMultipleExperience(true);
      currentExptext = currentExp?.exps.reduce((max, item) => {
        if (scrollDirection === "down") {
          return item.order > max.order ? item : max;
        } else {
          return item.order < max.order ? item : max;
        }
      }, currentExp.exps[0]);
      setcurrentExperienceYear(currentExp.year ?? currentExperienceYear);
    } else {
      setMultipleExperience(false);

      currentExptext = currentExp?.exps[0];
      setcurrentExperienceYear(currentExp.year ?? currentExperienceYear);
    }
  };

  let currentExp = experiences.find((exp) =>
    exp.year === currentYear
  ) as experience;

  if (!currentExp) {
    handleNonExperienceYear();
  } else {
    handleExperienceYear(currentExp);
  }

  currentYearRef.current = currentYear;

  useEffect(() => {
    if (!trap) return;

    const THRESHOLD = 250; // How much scroll counts as 1 mouse wheel

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      const isTrackpad = Math.abs(e.deltaY) < 50 && e.deltaMode === 0;
      const direction: ScrollDirection = e.deltaY > 0 ? "down" : "up";
      setScrollDirection(direction);
      if (isTrackpad) {
        trackpadDelta.current += e.deltaY;

        if (Math.abs(trackpadDelta.current) >= THRESHOLD) {
          trackpadDelta.current = 0;
          handleScrollPosition(direction);
        }
      } else {
        handleScrollPosition(direction);
      }
    };

    const el = sectionRef.current!;
    el.addEventListener("wheel", handleWheel, { passive: false });

    return () => el.removeEventListener("wheel", handleWheel);
  }, [trap]);

  const handleScrollPosition = (direction: ScrollDirection) => {
    if (direction === "down") {
      if (currentYearRef.current === oldestyear) {
        enableScroll();
        return;
      } else if (multipleExperience === false) {
        setCurrentYear((prev) => prev - 1);
      }
    } else {
      if (currentYearRef.current === latestyear) {
        enableScroll();
        return;
      } else if (multipleExperience === false) {
        setCurrentYear((prev) => prev + 1);
      }
    }
  };

  const enableScroll = () => {
    setTrap(false);
    document.body.style.overflow = "auto";
  };

  const disableScroll = () => {
    setTrap(true);
    document.body.style.overflow = "hidden";
  };

  return (
    <>
      <TopIntersectionWatcher
        onIntersect={() => disableScroll()}
      />
      <div
        className="flex flex-col w-full items-center justify-around min-h-screen overflow-hidden"
        ref={sectionRef}
      >
        {/* Left Sticky Year Display */}
        <div className="w-2/5 flex justify-center items-center">
          <div class="flex gap-2 flex-wrap">
            {Array.from(new Array(latestyear - oldestyear + 1), (_, i) => (
              <p
                class={`${
                  currentYear === latestyear - i
                    ? "text-orange-800 dark:text-orange-200 scale-125 underline"
                    : "text-gray-400"
                } text-xs font-bold`}
              >
                {latestyear - i}
              </p>
            ))}
          </div>
          {
            /* <p class="text-6xl text-gray-400 font-bold">
            {currentYear}
          </p> */
          }
        </div>

        {/* Right Scrollable Content */}
        <div className="w-3/5 flex flex-col items-center">
          {currentExptext &&
            (
              <>
                <div class="flex flex-col gap-2 justify-center items-center">
                  <span class="text-3xl dark:text-white text-black">
                    {currentExptext?.institution}
                  </span>
                  <span class="w-fit italic text-lg underline px-2 py-1 dark:bg-black dark:text-white inline-block">
                    {currentExptext?.role}
                  </span>
                </div>
                <div>
                  <ul>
                    {currentExptext?.what_i_did?.map((item, index) => {
                      return (
                        <li
                          key={index}
                          class="text-gray-500 text-xs font-mono"
                        >
                          <code>
                            - {item}
                          </code>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </>
            )}
        </div>
      </div>
    </>
  );
}
