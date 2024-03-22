function byId(str) {
    return document.getElementById(str)
}

function byClass(str) {
    return document.getElementsByClassName(str)
}

function byTag(str) {
    return document.getElementsByTagName(str)
}

export function changeVisibility(element) {
    if (element.style.display == "none") {
        element.style.display = "block"
    } else {
        element.style.display = "none"
    }
}

export {
    byId,
    byClass,
    byTag
}
