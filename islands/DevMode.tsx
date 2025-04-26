import TypedUIHeader from "./TypedUI.tsx";
import Terminal from "./Terminal.tsx";
import { useState } from "preact/hooks";

export default function DevMode() {
  const [visibility, setVisibility] = useState(false);

  const loaddone = (done: boolean) => {
    setVisibility(done);
  };
  return (
    <>
      <div class="flex flex-col gap-5">
        <TypedUIHeader loaddone={loaddone} />
        <Terminal visibility={visibility} />
      </div>
    </>
  );
}
