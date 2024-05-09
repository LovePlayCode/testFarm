const start = require("@farmfe/core");
async function name(params) {
  await start.start({
    compilation: {
      input: {
        index:
          "/Users/qiannan/rustProject/demo/benchmark/projects/turbopack-test-app/index.html",
      },
    },
    plugins: ["@farmfe/plugin-react"],
  });
}
name();
