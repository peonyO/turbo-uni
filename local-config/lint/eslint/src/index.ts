import type { Linter } from 'eslint';

import {
  command,
  comments,
  disabled,
  ignores,
  importPluginConfig,
  javascript,
  jsonc,
  node,
  perfectionist,
  prettier,
  regexp,
  turbo,
  typescript,
  unicorn,
  vue,
} from './configs';
import { customConfig } from './custom-config';

type FlatConfig = Linter.Config;

type FlatConfigPromise =
  | FlatConfig
  | FlatConfig[]
  | Promise<FlatConfig>
  | Promise<FlatConfig[]>;

async function defineConfig(config: FlatConfig[] = []) {
  const configs: FlatConfigPromise[] = [
    vue(),
    javascript(),
    ignores(),
    prettier(),
    typescript(),
    jsonc(),
    disabled(),
    importPluginConfig(),
    node(),
    perfectionist(),
    comments(),
    unicorn(),
    regexp(),
    command(),
    turbo(),
    ...customConfig,
    ...config,
  ];

  const resolved = await Promise.all(configs);

  return resolved.flat();
}

export { defineConfig };
