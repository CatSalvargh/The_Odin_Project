import { img_component, text_generator } from "./support"

const image_paths = [
        {img: require("../assets/menu.jpg"), text: "Restaurant Experience"},
        {img: require("../assets/menu1.jpg"), text: "Special Events"},
        {img: require("../assets/menu2.jpg"), text: "Our Signature dishes"}
]

export function pageContents(container) {
        const img_container = document.createElement("div");
        img_container.id = "image-container"

        container.appendChild(text_generator("Check out our Haute Cuisine menu"))
        
        container.appendChild(img_container)
        image_paths.forEach((e) => {
                img_container.appendChild(img_component(e.img, e.text));
        })
}