import { useEffect, useRef } from "preact/hooks";

export function TopIntersectionWatcher(
  { onIntersect }: { onIntersect: () => void },
) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          onIntersect();
        }
      },
      {
        root: null, // viewport
        threshold: 0,
        rootMargin: "-1px 0px -99% 0px", // triggers when top edge hits top of viewport
      },
    );

    const el = ref.current;
    if (el) observer.observe(el);

    return () => {
      if (el) observer.unobserve(el);
    };
  }, []);

  return <div ref={ref} style={{ height: "10px" }} />;
}
