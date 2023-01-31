# Nuxt 3 Vagrant Watch Repro

To reproduce:
1. Run `yarn dev` inside a Vagrant shared folder
2. Make a change to `app.vue`

The server bundle is updated, but when loading the page, a hydration error occurs and the update is missing.

When running `yarn dev` in the host machine, it works fine
