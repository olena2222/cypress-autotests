export const baseConfig = {
 // allowCypressEnv:false,
  reporter: "cypress-mochawesome-reporter",
  viewportWidth: 1920,
  viewportHeight: 1080,
  watchForFileChanges: false,
  video: false,
  screenshotOnRunFailure: true,
  e2e: {
    setupNodeEvents(on, config) {},
  },
};
