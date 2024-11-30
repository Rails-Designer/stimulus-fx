export function withConfirm({ element }) {
  return confirm(element.dataset.confirm || "Are you sure?");
};
