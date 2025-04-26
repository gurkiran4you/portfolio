import { delay } from "$std/async/delay.ts";
import { useEffect, useRef, useState } from "preact/hooks";

type HistoryEntry = {
  cmd: string;
  output: string | null;
};

type ValidCmds = "help" | "ls" | "clear" | "view" | "exit" | "footprint";

const ValidSingleKeywords: ValidCmds[] = [
  "help",
  "ls",
  "clear",
  "exit",
  "footprint",
];

const ValidCmdObj = {
  help: `
        <i>available commands: help, ls, clear, view, exit</i>
        <br><br>
        <b>help</b> - Show available commands<br>
        <b>ls</b> - List available menu options<br>
        <b>clear</b> - Clear the terminal<br>
        <b>view</b> [menu option] - View a specific menu option<br>
        <b>timeline</b> - View a map of my life<br>
        <b>exit</b> - Exit the terminal, go to UI<br>
    `,
  exit: `
        Exiting terminal...
    `,
  clear: `
        Clearing terminal...
    `,
  ls: [
    "about",
    "professional-projects",
    "personal-projects",
    "academics",
    "contact",
  ],
  view: {
    about:
      "Hello ! I am a Full-Stack Web applications developer striving to build applications that follow web standards. Based off of Calgary",
    "professional-projects": `
            <b>Circle Cardiovascular imaging</b> - Calgary, AB
            <ul>
                <li>Worked on the <b>Circle Cardiovascular Imaging</b> web application, a web-based platform for cardiovascular imaging analysis.</li>  
                <li>Spearheaded AngularJS to Angular migration using web components.</li>  
                <li>Worked on php to Go migration.</li>  
            </ul>
            \n
            <b>Fidelity Investments</b> - Merrimack, NH
            <ul>
                <li>Worked on building an Onboarding portal for current and prospective hires using React.</li>  
                <li>Developed Swagger API using NodeJS, as a mockup for the Java Backend team to speed up their development.</li>  
            </ul>
            \n
             <b>Comcast Corporation</b> - Philadelphia, PA
            <ul>
                <li>Developed the agent-facing Xfinity Mobile web app using Angular 5/6, Bootstrap, and SCSS to manage customer services and lines (up to 5 per account).</li>  
                <li>Replaced the legacy Zendesk-based system with a modern, scalable frontend and integrated RESTful and GraphQL APIs via Node.js.</li>  
            </ul>
            \n
             <b>AARP</b> - Washington DC
            <ul>
                <li>Migrated legacy AngularJS 1.2 components to 1.5 and made them responsive for mobile compatibility.</li>  
                <li>Contributed to building a proof-of-concept homepage using React, Gulp, and modular SCSS.</li>  
            </ul>
        `,
    "personal-projects": `
            <b>astrologybymeetu.com</b>
            <p>
                Created a website for a friend for her business. Users can book astrology, tarot or numerology services and book them online. The website is built using preact and DenoJS.
            </p>
            \n
            <b>stylemestudio.ca</b>
            <p>
                Created a website for a friend for her hair salon business. Users can view, compare and book hair services. The website is built using preact and DenoJS.
            </p>
        `,
    academics: `
            <b>Master of Science in Electrical Engineering</b> - UNC Charlotte, NC
            \n
            <b>Bachelor of Technology in Electronics and Communication Engineering</b> - Punjab Technical University, India
        `,
    contact: `
            contact to do
        `,
  },
};

export default function Terminal(props: { visibility: boolean }) {
  const [history, setHistory] = useState<HistoryEntry[]>([]);
  const [input, setInput] = useState("");
  const [output, setOutput] = useState(ValidCmdObj.help);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (props.visibility) {
      sectionRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start", // or "center", "end", "nearest"
      });
    }
  }, [props.visibility]);

  const terminalEndRef = useRef<HTMLDivElement>(null);

  const handleCommand = (cmd: string): string => {
    const clean = cmd.trim().toLowerCase();

    const cmds = clean.split(" ");
    if (cmds.length === 0) return "";
    if (cmds.length > 2) {
      return `Too many arguments: ${cmd}`;
    }

    if (cmds.length === 1) {
      switch (cmds[0]) {
        case "help":
          setOutput(ValidCmdObj.help);
          return "help";
        case "ls":
          setOutput(ValidCmdObj.ls.join(" "));
          return "ls";
        case "exit":
          setHistory([]);
          setOutput(`Exiting terminal...\nnavigating to UI mode`);
          delay(1000).then(() => {
            globalThis.location.href = "/portfolio";
          });
          return "exit";
        case "clear":
          setOutput("");
          setHistory([]);
          return "clear";
        case "footprint":
          setHistory([]);
          setOutput(`Exiting terminal...\nnavigating to timeline mode`);
          delay(1000).then(() => {
            globalThis.location.href = "/footprint";
          });
          return "timeline";
        default:
          return `Unknown command: ${cmd}`;
      }
    }

    if (
      cmds.length === 2 && ValidSingleKeywords.includes(cmds[0] as ValidCmds)
    ) {
      return `No arguments: ${cmd}`;
    }

    if (cmds.length === 2 && cmds[0] === "view") {
      if (Object.keys(ValidCmdObj.view).includes(cmds[1])) {
        setOutput(ValidCmdObj.view[cmds[1] as keyof typeof ValidCmdObj.view]);
        return `${cmd}`;
      }
      return `Unknown argument: ${cmd}`;
    }

    return `Unknown command: ${cmd}`;
  };

  const onKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      setOutput("");
      const response = handleCommand(input);
      if (response !== null) {
        setHistory((prev) => [...prev, { cmd: input, output: response }]);
      }
      setInput("");
    }
  };

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  return (
    <section
      ref={sectionRef}
      class={`${
        props.visibility && "opacity-100"
      } opacity-0 transition-opacity ease-in delay-500 flex sm:flex-row flex-col w-full min-h-[500px] p-4 gap-2`}
    >
      <div
        class="w-ful sm:w-1/2 font-mono text-sm overflow-y-auto bg-black"
        onClick={() => document.getElementById("cmd-input")?.focus()}
      >
        {history.map((entry, i) => (
          <div key={i}>
            <div>
              <span class="text-green-400">{">"}</span> {entry.cmd}
            </div>
            <div class="text-gray-300">{entry.output}</div>
          </div>
        ))}

        {/* Input prompt */}
        <div class="flex">
          <span class="text-green-400 whitespace-nowrap">
            {"guest@gurkiran.me >"}&nbsp;
          </span>
          <input
            id="cmd-input"
            class="bg-black text-white border-none outline-none w-full"
            value={input}
            onInput={(e) => setInput((e.target as HTMLInputElement).value)}
            onKeyDown={onKeyDown}
            autoFocus
          />
        </div>

        <div ref={terminalEndRef}></div>
      </div>

      <div class="w-ful sm:w-1/2  border-2 border-gray-700 rounded-md p-2 bg-slate-100 text-black">
        <code class="text-sm font-mono">
          <p
            dangerouslySetInnerHTML={{ __html: output.trim() }}
          >
          </p>
        </code>
      </div>
    </section>
  );
}
