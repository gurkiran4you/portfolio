// DO NOT EDIT. This file is generated by Fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import * as $_404 from "./routes/_404.tsx";
import * as $_app from "./routes/_app.tsx";
import * as $api_resume from "./routes/api/resume.ts";
import * as $footprint_index from "./routes/footprint/index.tsx";
import * as $index from "./routes/index.tsx";
import * as $ColorMode from "./islands/ColorMode.tsx";
import * as $DownloadResume from "./islands/DownloadResume.tsx";
import * as $FixScroll from "./islands/FixScroll.tsx";
import * as $MapView from "./islands/MapView.tsx";
import type { Manifest } from "$fresh/server.ts";

const manifest = {
  routes: {
    "./routes/_404.tsx": $_404,
    "./routes/_app.tsx": $_app,
    "./routes/api/resume.ts": $api_resume,
    "./routes/footprint/index.tsx": $footprint_index,
    "./routes/index.tsx": $index,
  },
  islands: {
    "./islands/ColorMode.tsx": $ColorMode,
    "./islands/DownloadResume.tsx": $DownloadResume,
    "./islands/FixScroll.tsx": $FixScroll,
    "./islands/MapView.tsx": $MapView,
  },
  baseUrl: import.meta.url,
} satisfies Manifest;

export default manifest;
