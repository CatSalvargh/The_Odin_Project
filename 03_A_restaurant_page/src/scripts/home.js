import { img_component, text_generator } from "./support";

const image_paths = [
        {img: require("../assets/food.jpg"), text: "Our Food"},
        {img: require("../assets/our_chefs.jpg"), text: "Meet our Chefs"},
        // {img: require("../assets/people.jpg"), text: "Our people"},
        {img: require("../assets/group_events.jpg"), text: "Corporate Events"},
        {img: require("../assets/fine_dining.jpg"), text: "Fine Dining"}
]

const intro_text = `
         Welcome to The Blain Bay, where sophistication meets flavor in an unforgettable fine dining experience. Step into an atmosphere designed for comfort and elegance, perfect for intimate dinners, celebrations, or exclusive group events. From the moment you arrive, our friendly, professional staff ensures impeccable service at every turn, setting the stage for a memorable meal.<br><br>

        Our menu is a showcase of culinary excellence, crafted by a team of experienced chefs who are passionate about food and dedicated to perfection. Each dish is thoughtfully prepared, using only the freshest seasonal ingredients and innovative techniques to create flavors that delight the palate and engage the senses. Whether you're joining us for a romantic evening or hosting a special gathering, our diverse menu offers something to suit every taste, from refined classics to inventive contemporary creations.
        <br><br>
        Come discover why The Blain Bay is celebrated as a premier destination for fine dining. Join us for an evening of delicious cuisine, exceptional service, and an atmosphere that inspires lasting memories. Reserve your table today and experience the best in sophisticated dining.
    `

export function pageContents(container) {
    const img_container = document.createElement("div");
    img_container.id = "image-container"

    container.appendChild(img_container)
    
    image_paths.forEach((e) => {
        img_container.appendChild(img_component(e.img, e.text));
    })

    container.appendChild(text_generator("Experience more than dining", intro_text))
}