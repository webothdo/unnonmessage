// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxt/fonts",
    "@nuxtjs/tailwindcss",
    "@logto/nuxt",
    "@nuxtjs/kinde",
  ],
  runtimeConfig: {
    logto: {
      endpoint: "https://s8l5h9.logto.app/",
      appId: "v8a39jx9f73kq6r2cq5uy",
      appSecret: "9Sw7RUK3hHws2jPioS5QsspNT5aqz2X6",
      cookieEncryptionKey: "xSNHzt9sjrg0sWni325G7hCNZCoonO3b",
      pathnames: {
        signIn: "/login",
        signOut: "/logout",
        callback: "/auth/callback",
      },
    },
  },
});
