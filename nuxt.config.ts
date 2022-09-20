// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: [
        '@nuxt/content',
        '@nuxtjs/tailwindcss'
    ],
    content: {
        documentDriven: true,
        markdown: {
            toc: {
                depth: 3,
                searchDepth: 3,
            }
        },
        highlight: {
            theme: "dracula-soft",
        }
    },
    runtimeConfig: {
        notionSecretKey: process.env.NUXT_NOTION_SECRET_KEY,
        notionCodeDatabase: process.env.NUXT_NOTION_CODE_DATABASE,

        public: {
            apiBaseUrl: process.env.NUXT_PUBLIC_API_BASE_URL
        }
    }
})
