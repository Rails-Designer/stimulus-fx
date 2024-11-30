export function whenOutside({ event, element }) {
  return !element.contains(event.target);
}
