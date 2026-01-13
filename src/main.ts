import './main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

router.afterEach((to) => {
  const defaultTitle = 'My App';
  const metaTitle = to.meta?.title;
  let title = defaultTitle;

  if (typeof metaTitle === 'function') {
    title = metaTitle(to) ?? defaultTitle;
  } else if (typeof metaTitle === 'string') {
    title = metaTitle || defaultTitle;
  }

  document.title = title;
});

app.mount('#app')
