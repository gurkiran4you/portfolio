import useSessionStorage, { type Mode } from "../utils/useSessionStorage.ts";

export default function ColorMode() {
    const [mode, setUpdateMode] = useSessionStorage();

    const toggle_mode = (newMode: Mode) => {
        setUpdateMode(newMode);
    };

    return (
        <>
            <div class="flex">
                {mode === "dark"
                    ? (
                        <img
                            class="cursor-pointer"
                            src="logos/moon.svg"
                            alt="light-mode"
                            onClick={() => toggle_mode("light")}
                        />
                    )
                    : (
                        <img
                            class="cursor-pointer"
                            src="logos/sun.svg"
                            alt="light-mode"
                            onClick={() => toggle_mode("dark")}
                        />
                    )}
            </div>
        </>
    );
}
