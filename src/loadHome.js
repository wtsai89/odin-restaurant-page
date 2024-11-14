import durianImg from "./img/cooldurian.jpeg";

const LoadHome = (function() {
    const load = () => {
        const content = document.querySelector("div#content");
        while(content.firstChild) {
            content.removeChild(content.firstChild);
        }

        const h1 = document.createElement("h1");
        h1.textContent = "Welcome to Durian Land";
        const img = document.createElement("img");
        img.src = durianImg;

        content.appendChild(h1);
        content.appendChild(img);
    }

    return { load };
})();

export { LoadHome };