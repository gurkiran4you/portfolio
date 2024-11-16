export default function Footer() {
    return (
        <>
            <section class="px-2 py-4 relative bg-slate-200 dark:bg-[#716ec2] bg-slate-100">
                <footer class="flex flex-col gap-2 items-center justify-center">
                    <ul class="flex gap-2">
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
                    <a href="https://fresh.deno.dev" target="_blank">
                        <img
                            width="197"
                            height="37"
                            src="https://fresh.deno.dev/fresh-badge-dark.svg"
                            alt="Made with Fresh"
                        />
                    </a>
                </footer>
            </section>
        </>
    );
}
