module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/style");
  eleventyConfig.addPassthroughCopy("src/md");
  eleventyConfig.addPassthroughCopy("src/media");
  return {
    dir: {
      input: "src",
      output: "dist",
    },
  };
};
