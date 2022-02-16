module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughcopy("src/style");
  eleventyConfig.addPassthroughcopy("src/md");
  eleventyConfig.addPassthroughcopy("src/media");
  return {
    dir: { input: "src", output: "dist" },
  };
};
