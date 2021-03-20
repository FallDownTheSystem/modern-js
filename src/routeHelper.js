import { defineAsyncComponent } from 'vue';

export const findChildren = (parentRoute, path) => {
	if (parentRoute?.path.replace('/', '') === path.replace('/', '')) {
		return parentRoute.children;
	}
	for (const childRoute of parentRoute.children ?? []) {
		const route = findChildren(childRoute, path);
		if (route) {
			return route;
		}
	}
};

export const getChildComponents = (childRoutes) => {
	return (childRoutes ?? []).map((x) => {
		if (typeof x.component == 'function') {
			return { name: x.path, component: defineAsyncComponent({ loader: x.component }) };
		}
		return { name: x.path, component: x.component, children: x.children };
	});
};
