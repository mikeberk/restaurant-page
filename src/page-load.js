import { content } from './index';
import mainImage from './coffee-house.jpeg';

const pageLoad = () => {
    const element = document.createElement('div');

    const header = document.createElement('h1');
    header.textContent = `Roy Donk's Haus of Coffee`;
    
    const heroImage = new Image();
    heroImage.src = mainImage;

    const para = document.createElement('p');
    para.textContent = `The tastiest coffee this side of the Colgate Comedy Hour. Come visit us at the corner of Doumar and 1st.`

    element.appendChild(header);
    element.appendChild(heroImage);
    element.appendChild(para);

    content.appendChild(element);
    
}

export default pageLoad;
