import { useEffect } from "preact/hooks";

export default function HoverMenu() {
    useEffect(() => {
        const sections = document.querySelectorAll(
            "main > section",
        ) as NodeListOf<HTMLElement>;

        const mainOffset = document.querySelector("main")?.offsetTop ?? 0;
        const stickyHeader = document.querySelector("nav")?.offsetHeight ?? 0;

        globalThis.addEventListener("scroll", () => {
            let current = "";
            sections.forEach((section) => {
                const sectionTop = section.offsetTop + mainOffset -
                    stickyHeader;
                if (globalThis.scrollY >= sectionTop) {
                    current = section.getAttribute("id") ?? "";
                }
            });
            const navLi = document.querySelectorAll("nav li");
            navLi.forEach((li) => {
                li.classList.remove("active");
                if (li.classList.contains(current)) {
                    li.classList.add("active");
                }
            });
        });
    }, []);
    return <></>;
}
