export default function Home() {
  return (
    <nav class="bg-[#c0beff] flex-row flex-wrap gap-6 px-4 py-1 font-bold text-gray-700 dark:text-gray-300">
      <ul class="flex flex-1 items-center gap-6">
        <li>
          <a
            href="/"
            class="hover:text-gray-900 hover:dark:text-gray-100 border-gray-500 py-1 dark:border-gray-300"
          >
            Dev mode
          </a>
        </li>
        <li>
          <a
            href="/portfolio"
            class="hover:text-gray-900 hover:dark:text-gray-100 border-gray-500 py-1 dark:border-gray-300"
          >
            Portfolio
          </a>
        </li>
      </ul>
    </nav>
  );
}
