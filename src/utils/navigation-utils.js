export const getTargetHrefValue = event => {
    return event ? event.target.attributes.href.value : '/';
}

export const isHomePath = pathname => {
    return pathname === '/';
}

export const navigateToHomePath = () => {
    window.location = '/';
}

export const navigateToPathname = pathname => {
    window.history.pushState({}, '', pathname);
}