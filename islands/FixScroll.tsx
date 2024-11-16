import { useEffect } from "preact/hooks";

export default function FixScroll() {
    useEffect(() => {
        const nav_height = document.querySelector("#navbar") as HTMLElement;
        document.documentElement.style.setProperty(
            "--scroll-padding",
            nav_height.offsetHeight + "px",
        );
    }, []);
    return <></>;
}
