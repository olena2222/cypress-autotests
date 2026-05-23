import { defineConfig } from "cypress";

export default defineConfig({
  allowCypressEnv: false,
  viewportWidth: 1920,
  viewportHeight: 1080,
  watchForFileChanges: false,
  video: false,
  screenshotOnRunFailure: true,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
