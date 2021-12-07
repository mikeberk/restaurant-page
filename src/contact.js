import { content } from './index';
import { createHtmlElement } from './utilities';
import shop from './shop.png';

const contactLoad = () => {
    const contactDiv = createHtmlElement('div', null, 'container');
    const contactHeader = createHtmlElement('h2', 'CONTACT US');
    const infoDiv = createHtmlElement('div', null, 'info-div');

    // location info
    const locationDiv = createHtmlElement('div', null, 'location-div');
    const locationInfo = createHtmlElement('h3', 'LOCATION');
    const streetP = createHtmlElement('p', '2800 S Lamar Blvd');
    const cityP = createHtmlElement('p', 'Austin, TX 78704');
    const phoneP = createHtmlElement('p', '(512) 1111-2222');
    locationDiv.appendChild(locationInfo);
    locationDiv.appendChild(streetP);
    locationDiv.appendChild(cityP);
    locationDiv.appendChild(phoneP);

    // shop hours info
    const hoursDiv = createHtmlElement('div', null, 'hours-div');
    const hoursInfo = createHtmlElement('h3', 'CAFE HOURS');
    const weekdayP = createHtmlElement('p', 'Wed-Fri 7:00a-2p');
    const weekendP = createHtmlElement('p', 'Sat & Sun 9:00a-2p');
    const closedP = createHtmlElement('p', 'Closed Mon & Tues');
    hoursDiv.appendChild(hoursInfo);
    hoursDiv.appendChild(weekdayP);
    hoursDiv.appendChild(weekendP);
    hoursDiv.appendChild(closedP);

    // contact email info
    const emailDiv = createHtmlElement('div', null, 'email-div');
    const emailP = createHtmlElement('p', 'We can be reached via email at: info@roydonkhaus.com');
    emailDiv.appendChild(emailP);

    // bottom image
    const shopImg = new Image();
    shopImg.src = shop;
    shopImg.classList.add('contact-img');

    // add elements to div
    contactDiv.appendChild(contactHeader);
    contactDiv.appendChild(infoDiv);
    infoDiv.appendChild(locationDiv);
    infoDiv.appendChild(hoursDiv);
    infoDiv.appendChild(emailDiv);
    contactDiv.appendChild(shopImg);


    if (content.firstChild) {
        content.removeChild(content.firstChild)
    }
    content.appendChild(contactDiv);
}

export default contactLoad;