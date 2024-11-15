const LoadContact = (function() {
    const load = () => {
        const content = document.querySelector("div#content");
        while(content.firstChild) {
            content.removeChild(content.firstChild);
        }
        const h1 = document.createElement("h1");
        h1.textContent = "Contact Info";
        const contact = document.createElement("div");
        contact.innerHTML = "(123) 456-7890<br>stinkypete99@pmail.com<br>1234 Fake St, Springfield, PA";
        contact.className = "contact";
        content.appendChild(h1);
        content.appendChild(contact);
    }

    return { load };
})();

export { LoadContact };