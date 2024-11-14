const LoadContact = (function() {
    const load = () => {
        const content = document.querySelector("div#content");
        while(content.firstChild) {
            content.removeChild(content.firstChild);
        }
    }

    return { load };
})();

export { LoadContact };