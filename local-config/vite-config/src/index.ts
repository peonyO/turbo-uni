import uni from '@dcloudio/vite-plugin-uni';
import { defineConfig } from 'vite';

function defaultDefineConfig() {
  return defineConfig(() => {
    return {
      plugins: [uni()],
    };
  });
}

export { defaultDefineConfig };
