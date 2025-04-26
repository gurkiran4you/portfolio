// deno-fmt-ignore-file
import DevMode from "../islands/DevMode.tsx";

export default function Home() {
  return (
    <main class="bg-[url('images/bg.jpg')] bg-cover bg-no-repeat bg-center min-h-screen">
        <pre  class="text-slate-200 font-mono text-sm leading-none whitespace-pre bg-black/30 backdrop-blur-sm px-5">
{`
        
        ┃┃             ┃┃
╭━━┳╮╭┳━┫┃╭┳┳━┳━━┳━╮╱╭━╯┣━━┳╮╭╮
┃╭╮┃┃┃┃╭┫╰╯╋┫╭┫╭╮┃╭╮╮┃╭╮┃┃━┫╰╯┃
┃╰╯┃╰╯┃┃┃╭╮┫┃┃┃╭╮┃┃┃┣┫╰╯┃┃━╋╮╭╯
╰━╮┣━━┻╯╰╯╰┻┻╯╰╯╰┻╯╰┻┻━━┻━━╯╰╯
╭━╯┃
╰━━╯
`}
        </pre>
        <DevMode />
    </main>
  );
}
