import lume from "lume/mod.ts";
import svgo from "lume/plugins/svgo.ts";

const site = lume({
  src: "./src",
  dest: "./public",
  server: {
    open: true,
    port: 4000,
  },
});

site.use(svgo());

site.copy("assets");
site.copy("favicon.ico");
site.ignore("README.md", "CHANGELOG.md");

export default site;
