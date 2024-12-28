// eslint-disable-next-line spaced-comment
/// <reference types='@dcloudio/types' />

declare module 'vue' {
  type Hooks = App.AppInstance & Page.PageInstance;
  type ComponentCustomOptions = Hooks;
}
