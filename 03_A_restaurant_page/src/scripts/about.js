import { img_component, text_generator } from "./support";

const about_text = `
         Welcome to The Blain Bay, where sophistication meets flavor in an unforgettable fine dining experience. 
         For more than 100 years since the time of Granny Elisse and Grandpa Lui, we have been providing excellence in what we love: Cooking with love and delivering Artworks full of flavour to each table.
         Step into an atmosphere designed for comfort and elegance, perfect for intimate dinners, celebrations, or exclusive group events. From the moment you arrive, our friendly, professional staff ensures impeccable service at every turn, setting the stage for a memorable meal.<br><br>

         At The Blain Bay, we believe dining is more than just a meal—it's an experience. Our sophisticated ambiance is complemented by an extensive wine list and expertly crafted cocktails, carefully selected to elevate every course. Whether you're indulging in a multi-course tasting menu or enjoying a casual cocktail hour with friends, each visit promises something new and extraordinary.<br><br>

        We take pride in making every guest feel welcome and valued. Our staff is trained not only in hospitality but in creating connections, ensuring that your time with us is comfortable, relaxed, and filled with genuine warmth. For those planning group events or private celebrations, our dedicated events team will work closely with you to tailor every detail, ensuring your occasion is truly special.<br><br>


        Our menu is a showcase of culinary excellence, crafted by a team of experienced chefs who are passionate about food and dedicated to perfection. Each dish is thoughtfully prepared, using only the freshest seasonal ingredients and innovative techniques to create flavors that delight the palate and engage the senses. Whether you're joining us for a romantic evening or hosting a special gathering, our diverse menu offers something to suit every taste, from refined classics to inventive contemporary creations.
        <br><br>

        Discover why The Blain Bay is celebrated as a premier destination for fine dining. Join us for an evening of delicious cuisine, exceptional service, and an atmosphere that inspires lasting memories. Reserve your table today and experience the best in sophisticated dining.
    `

export function pageContents(container) {
    container.appendChild(text_generator("More than 100 years of excellence", about_text))
}