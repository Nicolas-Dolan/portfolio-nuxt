export const routeOrder = [
  "/",
  "/about",
  "/skills",
  "/projects",
  "/experience",
  "/contact",
];

export const getSlideDirection = (to, from) => {
  if (routeOrder.includes(to.path) && routeOrder.includes(from.path)) {
    const toIndex = routeOrder.indexOf(to.path);
    const fromIndex = routeOrder.indexOf(from.path);
    const lastIndex = routeOrder.length - 1;
    return (toIndex > fromIndex ||
      (toIndex === 0 && fromIndex === lastIndex)) &&
      !(fromIndex === 0 && toIndex === lastIndex)
      ? "slide-left"
      : "slide-right";
  }
  return "slide-left";
};

export const pageMeta = {
  pageTransition: {
    name: "slide-right",
    mode: "out-in",
  },
  middleware(to, from) {
    to.meta.pageTransition.name = getSlideDirection(to, from);
  },
};
