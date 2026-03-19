export default function(eleventyConfig) {  
  eleventyConfig.addPassthroughCopy("index.html");
  // Output folders
      return {
        dir: {
          input: ".",    // Source directory for your content
          output: "_site" // Directory where the built files will be output
        }
      };
}