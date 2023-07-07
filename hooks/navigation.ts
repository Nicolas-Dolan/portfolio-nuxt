import { computed } from "vue";
import { useRoute } from "vue-router";
import { routeOrder } from "../utils";

export function useNavigation() {
  const route = useRoute();
  const currentRouteIndex = computed(() =>
    routeOrder.includes(route.path) ? routeOrder.indexOf(route.path) : 0
  );

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
