// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: true },
  modules: [
    "@sidebase/nuxt-auth",
    "@nuxtjs/tailwindcss",
  ],
  css: [
    "primevue/resources/themes/lara-dark-teal/theme.css",
    "primevue/resources/primevue.css",
  ],
  runtimeConfig: {
    // Secrets
    underdogApiKey: process.env.API_KEY,
    arWallet: process.env.AR_WALLET,
    authSecret: process.env.AUTH_SECRET,
    openaiApiKey: process.env.OPENAI_API_KEY,
    // Public
    public: {
      projectId: process.env.PROJECT_ID,
      auth: {
        computed: {
          origin: process.env.AUTH_ORIGIN,
        },
      },
      nextauthUrl: process.env.NEXTAUTH_URL,
    }
  },
  auth: {
    provider: {
      type: "authjs",
    },
  },
  tailwindcss: {
    exposeConfig: true,
  },
  build: {
    transpile: ["primevue"],
  },
  vite: {
    esbuild: {
      target: "esnext",
    },
    build: {
      target: "esnext",
    },
    optimizeDeps: {
      include: ["@solana/web3.js", "buffer"],
      esbuildOptions: {
        target: "esnext",
      },
    },
    define: {
      "process.env.BROWSER": true,
    },
  },
});
