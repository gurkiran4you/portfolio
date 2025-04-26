import { useEffect, useRef } from "preact/hooks";
import Typed from "https://esm.sh/typed.js";

export default function TypedUIHeader(
  props: { loaddone: (done: boolean) => void },
) {
  // Create reference to store the DOM element containing the animation
  const el = useRef(null);
  // Create reference to store the Typed instance itself
  const typed = useRef<Typed | null>(null);

  useEffect(() => {
    const options = {
      strings: [
        `Hello, my name is <span class="text-orange-200">Gurkiran Singh Randhawa</span> ^1000\nI am a frontend-focused <i class="text-green-700 font-mono">full stack developer</i> ^1000\n.. and this is my personal <em class="text-orange-300">portfolio website</em> ^100`,
      ],
      typeSpeed: 25,
      showcursor: false,
      onComplete: () => {
        props.loaddone(true);
      },
    };

    // elRef refers to the <span> rendered below
    typed.current = new Typed(el.current, options);

    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      typed.current?.destroy();
    };
  }, []);

  return (
    <div class="bg-black/30 backdrop-blur-sm px-5">
      <code
        ref={el}
        class="sm:whitespace-pre whitespace-break-spaces text-slate-300 font-sans font-extralight text-lg sm:text-3xl"
      >
      </code>
    </div>
  );
}
