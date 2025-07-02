import { img_component, text_generator } from "./support";

const image_paths = [
        {img: require("../assets/food.jpg")}
]

const form_html = `
    <div class="contact-details">
    <h2 id=form-title class="medium-title">Get in touch</h2>
    <form action="" method="dialog" id="contact-form">
        <label for="name">Name</label>
        <input type="text" name="name" id="name" autocomplete="on">
        <label for="lastname">Lastname</label>
        <input type="text" name="lastname" id="lastname" autocomplete="on">
        <label for="email">Email</label>
        <input type="text" name="email" id="email" autocomplete="on">
        <label for="message">Message</label>
        <textarea name="message" id="message" rows="10" cols="20" autocomplete="on" placeholder="Write your questions or suggestions here!"></textarea>
        <div class="read-options">
            <label for="yes"></label>
            <input type="checkbox" name="read" id="yes" value="Yes">
            <p>I confirm that I have read and accept the <a>terms and conditions</a>
            and <a>the privacy policy</a></p>
        </div>
        <input type="submit" value="Send" id="send-btn" class="btn js-add-btn btn--secondary">
    </form>
    </div>`

export function pageContents(container) {
    const form_container = document.createElement("div");
    form_container.id = "contact-container"
    form_container.style.backgroundImage = `url(${image_paths[0].img})`;

    form_container.innerHTML = form_html

    container.appendChild(form_container)
}