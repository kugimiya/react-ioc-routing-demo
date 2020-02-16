export function registerInContainer(container, configData, pagesConfig) {
    container.registerObject('menuLinks', configData);
    container.registerObject('pages', pagesConfig);
}
