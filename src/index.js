import * as actions from "./action-options";

export function registerActionOptions(application) {
  Object.entries(actions).forEach(([name, method]) => {
    application.registerActionOption(name, method);
  });
}

export function registerDevMode(application) {
  if (process.env.NODE_ENV !== "development") return;

  const debug = new URLSearchParams(location.search).get('debug');
  if (debug === 'true') localStorage.setItem('debug', 'true');
  if (debug === 'false') localStorage.removeItem('debug');

  application.debug = localStorage.getItem('debug') === 'true';
}

export { actions };
