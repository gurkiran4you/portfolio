export default function Experience() {
    const experience: {
        company: string;
        location: string;
        website: string;
        did: string[];
        duration: string;
        designation: string;
        tech_used: string[];
    }[] = [
        {
            company: "Circle Cardiovascular Imaging",
            location: "Calgary, Canada",
            website: "http://www.circlecvi.com",
            did: [
                "Full stack development of a medical reporting web application",
                "Responsible for Frontend architecture and localization.",
                "Spearheaded AngularJS to Angular migration",
                "Contributed in php to Golang migrations of various components within reporting.",
                "Implemented WYSIWYG report feature i.e. Edit mode, preview mode and pdf generation.",
                "Implemented template-driven reporting for better customizations.",
            ],
            duration: "July 2019 - May 2024",
            designation: "Senior Software Developer - Web Applications",
            tech_used: [],
        },
        {
            company: "Fidelity Investments",
            location: "Merrimack, NH - USA",
            website: "https://www.fidelity.com/",
            did: [
                "Worked on building an Onboarding portal for current and prospective hires using React",
                `Made the CSS modular by using SCSS features such as mixins, placeholders, functions etc.`,
                "Used React JS to build the portal, with best practices.",
                `Developed Swagger API using NodeJS, as a mockup for the Java Backend team to speed up their development`,
                "Added responsive typography throughout the app",
            ],
            duration: "Sep 2018 - Nov 2018",
            designation: "Frontend Web Developer",
            tech_used: [],
        },
        {
            company: "Comcast Corporation",
            location: "Philadelphia, PA - USA",
            website: "https://corporate.comcast.com",
            did: [
                "Continuing implementing agent experience app for Xfinity mobile",
                "This app is used by Xfinity mobile store agents to create/modify/add services/add lines to Xfinity mobile customers (Up to 5 lines)",
                "This project is an upgradation from an earlier outdated app which used Zendesk",
                "The app used latest Angular version (Angular 5 and 6) with Bootstrap , SCSS in Node environment",
                "Decreased the dev build time of the app from 2 minutes to 20 seconds in webpack",
            ],
            duration: "Feb 2018 - Sep 2018",
            designation: "Frontend Web Developer",
            tech_used: [],
        },
        {
            company: "Envision Energy",
            location: "Houston, TX - USA",
            website: "https://envision-group.com",
            did: [
                "Implemented a new css version of old UI, using AngularJS",
                "New version included new graphs, user-friendly and more aesthetic layouts",
                "Implemented date-time sliders using DevExtreme DX library for time range selections in various graphs",
                "The graphs would come from Wind-farm data being run by Analysts",
            ],
            duration: "Aug 2017 - Dec 2017",
            designation: "Frontend Web Developer",
            tech_used: [],
        },
        {
            company: "AARP",
            location: "Washington DC - USA",
            website: "https://aarp.org",
            did: [
                "Moving the old unresponsive components into responsive mobile-friendly web apps",
                "Helped in developing new proof-of-concept home page website of AARP",
                "Migrating some apps from AngularJS 1.2 to AngularJS 1.5",
                "Helped in developing new Home Page using technologies like gulp, Reactjs",
                "Daily content updates to match with the current home page of AARP",
            ],
            duration: "July 2016 - July 2017",
            designation: "Frontend Web Developer",
            tech_used: [],
        },
    ];

    const other_experience: {
        company: string;
        designation: string;
        duration: string;
        location: string;
    }[] = [
        {
            company: "Parshu Solutions",
            designation: "Web Developer",
            location: "Ludhiana, PB - India",
            duration: "Jan 2012 - July 2013",
        },
        {
            company: "Kodemuse",
            designation: "GWT Developer",
            location: "Gurgaon, HR - India",
            duration: "April 2012 - Sep 2013",
        },
        {
            company: "Infosys Limited",
            designation: "Systems Engineeer",
            location: "Mysuru, KA - India",
            duration: "Mar 2011 - Dec 2011",
        },
    ];

    const internship: {
        company: string;
        location: string;
    }[] = [
        {
            company: "Siemens Information Systems Limited",
            location: "Gurgaon, HR - India",
        },
        {
            company: "Punjab Communications Limited",
            location: "Mohali, PB - India",
        },
    ];
    return (
        <>
            <h2 class="text-2xl text-slate-500 font-semibold dark:text-slate-100">
                Experience
            </h2>

            <ul class="flex flex-col gap-2">
                {experience.map((exp) => {
                    return (
                        <li class="border-dashed border-b-2 dark:text-slate-100">
                            <div class="flex flex-col sm:flex-row items-center justify-between">
                                <h3 class="flex flex-col sm:flex-row gap-2 items-center justify-between">
                                    <div class="flex gap-1">
                                        <strong>{exp.company}</strong>
                                        <a
                                            class="text-lg font-semibold"
                                            target="_blank"
                                            href={exp.website}
                                            aria-label={`visit website ${exp.company}`}
                                        >
                                            <img
                                                class="h-[20px]"
                                                src="logos/link.svg"
                                                alt="visit company website"
                                            />
                                        </a>
                                    </div>
                                    <span class="italic font-medium text-sm bg-yellow-700 text-white px-1">
                                        {exp.location}
                                    </span>
                                </h3>
                                <time class="text-xs">{exp.duration}</time>
                            </div>
                            <h4 class="m-2 underline">{exp.designation}</h4>

                            <div class="ml-1 mb-2 flex flex-col gap-1">
                                {exp.did.map((d) => {
                                    return (
                                        <code class="flex gap-1 text-pretty">
                                            <small>-</small>
                                            <span>{d}</span>
                                        </code>
                                    );
                                })}
                            </div>

                            <p>Tech Used - {exp.tech_used.join(" ,")}</p>
                        </li>
                    );
                })}
            </ul>

            <ul class="flex flex-col gap-2 mt-2 dark:text-slate-100">
                {other_experience.map((exp) => {
                    return (
                        <li>
                            <div class="flex flex-col sm:flex-row justify-between">
                                <h3 class="flex flex-row items-center justify-between">
                                    <strong class="text-lg font-semibold">
                                        {exp.company}
                                    </strong>
                                    <span class="italic font-medium text-sm bg-yellow-700 text-white px-1">
                                        {exp.location}
                                    </span>
                                </h3>
                                <time class="text-xs">{exp.duration}</time>
                            </div>
                            <h4 class="m-2 underline">{exp.designation}</h4>
                        </li>
                    );
                })}
            </ul>
        </>
    );
}
