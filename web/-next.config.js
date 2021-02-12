const client = require("./client");

const query = '*[_type == "event" && defined(slug)].slug.current';

module.exports = {
  exportPathMap: async function (defaultPathMap, { dev, dir, outDir, distDir, buildId }) {
    const paths = await client
      .fetch(query)
      .then((data) =>
        data.reduce(
          (acc, slug) => ({
            "/": { page: "/" },
            ...acc,
            [`/post/${slug}`]: { page: "/post/[slug]", query: { slug } },
          }),
          defaultPathMap
        )
      )
      .catch(console.error);
    return paths;
  },
};
