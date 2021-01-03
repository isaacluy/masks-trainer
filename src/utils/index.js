export const arrayDifference = (a1, a2) => {
    return a1.filter(element => a2.indexOf(element) === -1);
}

export const convertMinToMs = minutes => {
    return ((minutes*60)*1000);
}

export const isControlKeyPressed = event => {
    return event.metaKey || event.ctrlKey;
}

export const randomIntFromInterval = (min, max) => {
    return Math.floor(Math.random()*(max-min+1)+min);
}