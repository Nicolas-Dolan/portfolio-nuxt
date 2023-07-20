import { computed } from "vue";
import { useRoute } from "vue-router";
import { routeOrder } from "../utils";

export function useNavigation() {
  const route = useRoute();

  const currentRouteIndex = computed(() => {
    for (let index = 1; index < routeOrder.length; index++) {
      const element = routeOrder[index];
      if (route.path.includes(element)) {
        return index;
      }
    }
    return 0;
  });
  const lastIndex = routeOrder.length - 1;

  const prev = computed(() =>
    currentRouteIndex.value !== 0
      ? routeOrder[currentRouteIndex.value - 1]
      : routeOrder[lastIndex]
  );
  const next = computed(() =>
    currentRouteIndex.value < lastIndex
      ? routeOrder[currentRouteIndex.value + 1]
      : routeOrder[0]
  );

  return { prev, next };
}
