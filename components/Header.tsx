import ColorMode from "../islands/ColorMode.tsx";

export default function Header() {
  return (
    <>
      <nav
        id="navbar"
        class="sticky top-0 z-10 dark:bg-[#716ec2] bg-slate-100 flex items-center justify-between px-4 py-1"
      >
        <ul class="flex flex-1 items-center gap-6 font-bold text-gray-700 sm:text-lg text-xs tracking-tighter sm:tracking-normal">
          <li>
            <a
              href="/"
              class="dark:bg-slate-800 dark:text-white bg-white p-1 hover:text-gray-900 dark:hover:text-gray-100 border-gray-500 py-1"
            >
              dev mode
            </a>
          </li>
          <li>
            <a
              href="/footprint"
              class="dark:bg-slate-800 dark:text-white bg-white p-1 hover:text-gray-900 dark:hover:text-gray-100 border-gray-500 py-1"
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
