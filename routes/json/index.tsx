import { Handlers, PageProps } from "$fresh/server.ts";
import * as path from "jsr:@std/path";
import JsonViewer from "../../islands/JsonViewer.tsx";

export const handler: Handlers = {
  async GET(_req, ctx) {
    const __dirname = path.dirname(path.fromFileUrl(import.meta.url));
    const json_file = path.join(__dirname, "../../utils/portfolio_json.json");
    const json = await Deno.readTextFile(json_file);
    return ctx.render(json);
  },
};

export default function JSON(props: PageProps) {
  console.log(props.data);
  return (
    <main id="json">
      <JsonViewer json={props.data as string} />
    </main>
  );
}
