const createHtmlElement = (tag, text, className) => {
    let newElement = document.createElement(tag);
    if (text) {
        newElement.textContent = text;
    }
    if (className) {
        newElement.classList.add(className);
    }
    return newElement;
}

export { createHtmlElement };