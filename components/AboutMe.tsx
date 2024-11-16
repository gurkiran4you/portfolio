import SectionHeader from "./SectionHeader.tsx";

export default function AboutMe() {
    return (
        <>
            <SectionHeader heading="About Me" />
            <p class="text-lg text-slate-900 font-medium dark:text-slate-100">
                Hello ! I am a Full-Stack Web applications developer striving to
                build applications that follow web standards. Based off of the
                <a
                    class="cursor-pointer text-blue-700 ml-2 dark:text-slate-100"
                    title="calgary"
                    href="https://www.blueskycity.ca/"
                    target="_blank"
                    aria-label="Calgary - The blue sky city"
                >
                    Blue Sky City
                </a>
            </p>
        </>
    );
}
