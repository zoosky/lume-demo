import lume from "lume/mod.ts";

const site = lume({
  src: "./src",
  dest: "./public",
  server: {
    open: true,
    port: 4000,
  },
});

site.copy("assets");
site.copy("favicon.ico");
site.ignore("README.md", "CHANGELOG.md");

export default site;
