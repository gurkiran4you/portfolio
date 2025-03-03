import { Handlers, PageProps } from "$fresh/server.ts";
import { Cookie, setCookie } from "@std/http/cookie";
import DownloadResume from "../islands/DownloadResume.tsx";

const VALID_TYPES = ["json", "html", "pdf"];

interface Data {
  error: string;
}

export const handler: Handlers = {
  GET(_req, ctx) {
    const url = new URL(ctx.url);
    const error = url.searchParams.get("error");
    if (error === "true") {
      return ctx.render({ error });
    }
    return ctx.render({ error: "" });
  },
  async POST(req, ctx) {
    const form = await req.formData();
    const content_type = form.get("form_value")?.toString();
    if (
      content_type?.trim() === "" ||
      !VALID_TYPES.some((type) => content_type?.includes(type))
    ) {
      const headers = new Headers({
        location: "/?error=true",
      });
      return new Response(null, {
        status: 302,
        headers,
      });
    }

    const cookie: Cookie = { name: "webdev", value: "true" };

    switch (content_type) {
      case "application/html": {
        const headers = new Headers({
          location: `/portfolio`,
        });

        setCookie(headers, cookie);

        return new Response(null, {
          status: 302,
          headers,
        });
      }
      case "application/json": {
        const headers = new Headers({
          location: `/json`,
        });
        setCookie(headers, cookie);

        return new Response(null, {
          status: 302,
          headers,
        });
      }
      case "application/pdf": {
        console.log(ctx.url);
        const res = await fetch(new URL("/api/resume", ctx.url));
        const resume_array_buffer = await res.arrayBuffer();
        const headers = new Headers({
          contentType: "application/json",
          contentDisposition: "inline; filename='resume.pdf'",
        });
        return new Response(resume_array_buffer, {
          status: 200,
          headers,
        });
      }
      default:
        return ctx.render({ error: "Something happened !" });
    }
  },
};
export default function Home(props: PageProps<Data>) {
  const error = props.data.error;
  return (
    <>
      <main class="h-svh grid place-items-center bg-[#2e3537] overflow-hidden">
        <span class="bubble"></span>
        <span class="bubble"></span>
        <span class="bubble"></span>
        <span class="bubble"></span>
        <span class="bubble"></span>
        <span class="bubble"></span>
        <span class="bubble"></span>
        <span class="bubble"></span>
        <span class="bubble"></span>
        <span class="bubble"></span>
        <form
          method="POST"
          action="/"
          class="flex sm:flex-row flex-col gap-2 items-center sm:items-end text-white text-[20px] sm:text-[50px]"
        >
          <label for="choose-page-type">
            <code>Content-type:</code>
          </label>
          <input
            id="choose-page-type"
            class="border-2 border-black p-2 text-black"
            name="form_value"
            autofocus
          />

          <button class="hover:underline" type="submit">Go</button>
        </form>
        {error !== ""
          ? (
            <div class="text-orange-400 h-10 text-center">
              Please provide correct mime type (supports json / html / pdf)
            </div>
          )
          : <div class="h-10"></div>}
      </main>
    </>
  );
}
