import ColorMode from "../islands/ColorMode.tsx";

export default function Header() {
    return (
        <>
            <nav
                id="navbar"
                class="sticky top-0 z-10 dark:bg-[#716ec2] bg-slate-100 flex sm:flex-row flex-col items-center justify-between p-4"
            >
                <ul class="flex flex-1 items-center gap-6 font-bold text-gray-700 sm:text-lg text-xs tracking-tighter sm:tracking-normal">
                    <li>
                        <a
                            href="#about-me"
                            class="hover:text-gray-900 hover:dark:text-gray-100 border-gray-500 py-1 dark:border-gray-300 dark:text-gray-300"
                        >
                            about me
                        </a>
                    </li>
                    <li>
                        <a
                            href="#experience"
                            class="hover:text-gray-900 hover:dark:text-gray-100 border-gray-500 py-1 dark:border-gray-300 dark:text-gray-300"
                        >
                            experience
                        </a>
                    </li>
                    <li>
                        <a
                            href="#education"
                            class="hover:text-gray-900 hover:dark:text-gray-100 border-gray-500 py-1 dark:border-gray-300 dark:text-gray-300"
                        >
                            education
                        </a>
                    </li>
                    <li>
                        <a
                            href="/footprint"
                            class="bg-white p-1 hover:text-gray-900  border-gray-500 py-1"
                        >
                            footprints
                        </a>
                    </li>
                </ul>

                <ColorMode />
            </nav>
        </>
    );
}
