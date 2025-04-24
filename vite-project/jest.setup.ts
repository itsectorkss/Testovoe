import * as Vue from 'vue';
import * as VueCompilerDOM from '@vue/compiler-dom';

(globalThis as any).Vue = Vue;
(globalThis as any).VueCompilerDOM = VueCompilerDOM;

(globalThis as any).VueServerRenderer = {
  createRenderer: () => ({
    renderToString: () => '',
  }),
};
