import { createApp } from "vue";
import Dashboard from "./components/Dashboard.vue";

// call mount to start the app
const mount = (el) => {
  const app = createApp(Dashboard);
  app.mount(el);
};

// in local dev mode, call mount immediately
if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#_dashboard-dev-root");

  if (devRoot) {
    mount(devRoot);
  }
}

export { mount };
