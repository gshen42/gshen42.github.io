import { defineConfig, fontProviders } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://gshen42.github.io",
  fonts: [
    {
      name: "Nunito Sans",
      provider: fontProviders.fontsource(),
      styles: ["normal"],
      weights: ["300 700"],
      cssVariable: "--font-nunito-sans",
    },
  ],
});
