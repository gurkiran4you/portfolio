import { IS_BROWSER } from "$fresh/runtime.ts";
import { useEffect } from "preact/hooks";
import * as json_to_html from "jsr:@robinjac/json-to-html";

// Style like how chat gpt prints out json 🤘
const STYLING = {
  properties: "#df3079",
  number: "#df3079",
  string: "#00a67d",
  null: "#2e95d3",
  boolean: "#2e95d3",
  braces: "#d9d9e3",
  brackets: "#d9d9e3",
  comma: "#d9d9e3",
  semi: "#d9d9e3",
};

export default function JsonViewer(props: { json: string }) {
  useEffect(() => {
    if (document.cookie !== "webdev=true") {
      globalThis.location.pathname = "/";
    }
  }, []);

  const obj = JSON.parse(props.json);
  if (!IS_BROWSER) return <div></div>;
  json_to_html.insertAt("#json", obj, { styling: STYLING, space: 4 });
  return <></>;
}
