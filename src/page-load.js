import { content } from './index';
import mainImage from './coffee-house.jpeg';
import { createHtmlElement } from './utilities';
import kalita from './kalita-wave.jpeg';
import sur from './coffee-sur.jpeg';
import shop from './shop.jpeg';

const pageLoad = () => {
    const element = createHtmlElement('div', null, 'container');
    const imgDiv = createHtmlElement('div', null, 'image-div');

    const shopImage = new Image();
    shopImage.src = shop;
    shopImage.classList.add("shop-img");

    const heroImage = new Image();
    heroImage.src = mainImage;
    heroImage.classList.add("hero-img");

    const kalitaImage = new Image();
    kalitaImage.src = kalita;
    kalitaImage.classList.add("kalita-img");

    const surImage = new Image();
    surImage.src = sur;
    surImage.classList.add("sur-img");


    const para = createHtmlElement('p', `The tastiest coffee this side of the Colgate Comedy Hour. Come visit us at the corner of Doumar and 1st.`);

    element.appendChild(shopImage);
    element.appendChild(imgDiv);
    imgDiv.appendChild(heroImage);
    imgDiv.appendChild(kalitaImage);
    imgDiv.appendChild(surImage);
    element.appendChild(para);


    if (content.firstChild) {
        // change this due to listener being on main js file
        content.removeChild(content.firstChild)
    }
    content.appendChild(element);
    // menuBtn.addEventListener('click', menuLoad);
    
}

export default pageLoad;
