import "./styles.css"
import { pageContents as home } from "./scripts/home.js";
import { pageContents as menu } from "./scripts/menu.js";
import { pageContents as about } from "./scripts/about.js";
import { pageContents as contact } from "./scripts/contact.js";

const main_container = document.getElementById("content")
home(main_container)

//Buttons
const buttons = document.querySelectorAll(".btn")

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        main_container.innerHTML = "";

        if(button.id == "home") {
            home(main_container)
        } else if(button.id == "menu") {
            menu(main_container)
        } else if(button.id == "about") {
            about(main_container)
        } else if(button.id == "contact") {
            contact(main_container)
        } 
        else {
            home(main_container)
        }
    })
})


