export function img_component(source, text) {
   const element = document.createElement('div');
   element.classList.add("image")
   
    const img_element = new Image();
    img_element.src = source;
    img_element.classList.add("image")

    element.appendChild(img_element);

    if(text) {
        const img_text = document.createElement("h3")
        img_text.innerHTML = text
        element.appendChild(img_text);
    }

   return element;
}

export function text_generator(subtitle, text) {
    const element = document.createElement('div');
    element.classList.add("intro")

    if(subtitle){
    const intro_title = document.createElement("h2")
    intro_title.innerHTML = subtitle
    intro_title.classList.add("medium-title")
    element.appendChild(intro_title)
    }

    if(text){
    const intro_text = document.createElement("p")
    intro_text.classList.add("intro-text")
    intro_text.innerHTML = text
    element.appendChild(intro_text)
    }
    return element
}