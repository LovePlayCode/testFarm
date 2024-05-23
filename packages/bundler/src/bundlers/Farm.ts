import {
  BaseBundler,
  BaseBundlerBuildOpts,
  BaseBundlerOpts,
} from "./BaseBundler";
import {
  build,
  Server,
  logger,
  Compiler,
  start,
  resolveConfig,
  createCompiler,
  createDevServer,
} from "@farmfe/core";
// import react from '@farmfe/plugin-react';

interface FarmOpts extends BaseBundlerOpts {}

export class Farm extends BaseBundler {
  constructor(opts: FarmOpts) {
    super(opts);
  }

  async build(_opts: BaseBundlerBuildOpts = {}) {
    const buildOpts = {
      root: this.opts.root,
      plugins: [
        // react,
      ],
    };
    await build(buildOpts);
  }

  async dev(_opts: BaseBundlerBuildOpts = {}) {
    const resolvedUserConfig = await resolveConfig(
      {
        root: process.cwd(),
        configPath: process.cwd(),
      },
      logger,
      "development"
    );

    let compiler = await createCompiler(resolvedUserConfig);

    const devServer = await createDevServer(
      compiler,
      resolvedUserConfig,
      logger
    );
    devServer.listen();
  }
}
