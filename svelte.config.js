// import adapter from "@sveltejs/adapter-auto";
// import { vitePreprocess } from "@sveltejs/kit/vite";
// /** @type {import('@sveltejs/kit').Config} */
// const config = {
//   kit: {
//     adapter: adapter(),
//   },
//   preprocess: vitePreprocess(),
// };
// export default config;

import adapter from "@sveltejs/adapter-static";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      fallback: "404.html",
    }),
    paths: {
      base: process.argv.includes("dev") ? "" : process.env.BASE_PATH,
    },
  },
};

export default config;
