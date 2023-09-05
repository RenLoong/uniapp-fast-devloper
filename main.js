import App from './App'

import { createPinia } from 'pinia'

const pinia = createPinia()
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  app.use(pinia)
  return {
    app
  }
}