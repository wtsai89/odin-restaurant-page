import "./styles.css";
import { LoadHome } from "./loadHome.js";
import { LoadMenu } from "./loadMenu.js";
import { LoadContact } from "./loadContact.js";

LoadHome.load();

const homeButton = document.querySelector(".homeButton");
homeButton.addEventListener("click", () => { LoadHome.load(); });
const menuButton = document.querySelector(".menuButton");
menuButton.addEventListener("click", () => { LoadMenu.load(); });
const contactButton = document.querySelector(".contactButton");
contactButton.addEventListener("click", () => { LoadContact.load(); });