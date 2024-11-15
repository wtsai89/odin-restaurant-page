import durianCake from "./img/duriancheesecake.jpg";
import durianCurry from "./img/duriancurry.jpg";
import durianPie from "./img/durianpie.jpg";

const LoadMenu = (function() {
    const load = () => {
        const content = document.querySelector("div#content");
        while(content.firstChild) {
            content.removeChild(content.firstChild);
        }

        const h1 = document.createElement("h1");
        h1.textContent = "Menu";
        
        content.appendChild(h1);
        content.appendChild(loadMenuItem("Durian Cake", "$12.99", durianCake));
        content.appendChild(loadMenuItem("Durian Curry", "$13.99", durianCurry));
        content.appendChild(loadMenuItem("Durian Pie", "$14.99", durianPie));
    }

    const loadMenuItem = (name, price, pic) => {
        const itemCard = document.createElement("div");
        itemCard.className = "item";

        const nameE = document.createElement("h2");
        nameE.textContent = name;
        const priceE = document.createElement("p");
        priceE.textContent = price;
        const picE = document.createElement("img");
        picE.src = pic;
        itemCard.appendChild(nameE);
        itemCard.appendChild(priceE);
        itemCard.appendChild(picE);

        return itemCard;
    }

    return { load };
})();

export { LoadMenu };