import * as actions from "./action-options"

export { actions };

export function registerActions(application) {
  Object.entries(actions).forEach(([name, method]) => {
    application.registerActionOption(name, method);
  });
}
