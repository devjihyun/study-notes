import { defineConfig } from "vitepress";

const isProd = process.env.NODE_ENV === "production";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: isProd ? "/study-notes/" : "/",
  title: "Study Notes",
  description: "for frontend develop",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "AI", link: "/ai/" },
      { text: "CSS", link: "/css/" },
      { text: "A11y", link: "/a11y/" },
      { text: "Tools", link: "/tools/" },
    ],

    sidebar: {
      "/ai/": [
        {
          text: "AI Overview",
          items: [{ text: "AI 홈", link: "/ai/" }],
        },
        {
          text: "PoC",
          items: [{ text: "PoC 홈", link: "/ai/poc/" }],
        },
        {
          text: "Prompts",
          items: [
            { text: "Prompts 홈", link: "/ai/prompts/" },
            // { text: "Writing Prompt", link: "/ai/prompts/writing" },
          ],
        },
      ],

      "/css/": [
        {
          text: "CSS Overview",
          items: [{ text: "CSS 홈", link: "/css/" }],
        },
        {
          text: "Modern CSS",
          items: [
            { text: "Modern 홈", link: "/css/modern/" },
            {
              text: "Color functions",
              link: "/css/modern/color-functions",
            },
            // { text: ":has() Selector", link: "/css/modern/has-selector" },
            // { text: "Color Functions", link: "/css/modern/color-functions" },
          ],
        },
      ],

      "/a11y/": [
        {
          text: "Accessibility",
          items: [
            { text: "A11y 홈", link: "/a11y/" },
            // { text: "Checklist", link: "/a11y/checklist" },
            // { text: "ARIA Patterns", link: "/a11y/aria-patterns" },
          ],
        },
      ],

      "/tools/": [
        {
          text: "Docs Tools",
          items: [{ text: "개요", link: "/tools/" }],
        },
        {
          text: "VitePress",
          items: [
            { text: "홈", link: "/tools/vitepress/" },
            { text: "설치&배포", link: "/tools/vitepress/setup-deploy" },
          ],
        },
      ],
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
