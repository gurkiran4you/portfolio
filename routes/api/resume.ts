import { Handlers } from "$fresh/server.ts";
import * as path from "jsr:@std/path";

export const handler: Handlers = {
    async GET(_req, _ctx) {
        try {
            const __dirname = path.dirname(path.fromFileUrl(import.meta.url));
            const resume_path = path.join(
                __dirname,
                "../../GurkiranSingh.pdf",
            );
            const resume = await Deno.readFile(resume_path);
            const headers = new Headers();
            headers.set("Content-Type", "application/pdf");
            headers.set("Content-Length", String(resume.byteLength));
            return new Response(resume, {
                status: 200,
                headers,
            });
        } catch (e) {
            console.log("Something happened. Error: ", e);
            return new Response(JSON.stringify({
                error: "Something bad happened!",
            }));
        }
    },
};
