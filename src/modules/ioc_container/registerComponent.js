import { container } from './index';

export function registerComponent(componentName, component) {
    const factory = () => ({
        getComponent: () => component
    });
    container.registerFactory(componentName, factory);
}

export function componentFromContainer(componentName) {
    return container.resolve(componentName).getComponent();
}
