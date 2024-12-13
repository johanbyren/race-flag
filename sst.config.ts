/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "race-flag",
      removal: input?.stage === "production" ? "retain" : "remove",
      protect: ["production"].includes(input?.stage),
      home: "aws",
    };
  },
  async run() {
    new sst.aws.StaticSite("Raceflags", {
      // domain: $app.stage === "production" ? "" : undefined,
      build: {
        command: "npm run build",
        output: "dist"
      }
    });
  },
});
