import { useEffect, useState } from "preact/hooks";

export type Mode = "dark" | "light";

export default function useSessionStorage(): [Mode, (newMode: Mode) => void] {
    const [mode, setMode] = useState<Mode>("light");

    const setUpdateMode = (newMode: Mode) => {
        globalThis.sessionStorage.setItem("mode", newMode);
        if (newMode === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
        setMode(newMode);
    };

    useEffect(() => {
        const stored_mode = globalThis.sessionStorage.getItem("mode") as Mode;
        if (stored_mode != null) {
            setUpdateMode(stored_mode);
        } else {
            // default is light
            setUpdateMode(mode);
        }
    });

    return [mode, setUpdateMode];
}
