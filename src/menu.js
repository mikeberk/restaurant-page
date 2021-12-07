import { content } from './index';
import { createHtmlElement } from './utilities';

const menuLoad = () => {
    const menuDiv = createHtmlElement('div', null, 'container');

    const menuHeader = createHtmlElement('h2', 'MENU');
    const menuItems = createHtmlElement('div', null, 'menu-items');

    // create a new menu card item
    function createMenuItem(itemName, description, cost) {
        let menuItem = createHtmlElement('div', null, 'menu-item');
        let itemTitle = createHtmlElement('h3', itemName, 'menu-item-title');
        let itemDescription = createHtmlElement('p', description, 'menu-item-desc');
        let itemCost = createHtmlElement('p', '$' + cost, 'menu-item-cost');

        menuItem.appendChild(itemTitle);
        menuItem.appendChild(itemDescription);
        menuItem.appendChild(itemCost);

        return menuItem;
    }

    // array to store menu elements
    let menuArr = [];

    const espresso = createMenuItem('Espresso', 'A double shot of espresso', '3');
    const cap = createMenuItem('Cappuccino', 'Espresso + milk. Whole milk or oat milk avaliable', '4');
    const latte = createMenuItem('Latte', 'Espresso + milk. Whole milk or oat milk avaliable. Served hot or iced', '4');
    const hcLatte = createMenuItem('Honey Cardamom Latte', 'Espresso + milk with a house made honey cardamom syrup. Whole milk or oat milk avaliable. Served hot or iced', '5');
    const matchaLatte = createMenuItem('Matcha Latte', 'Matcha + milk. Whole milk or oat milk avaliable. Served hot or iced', '4');
    const pourOver = createMenuItem('Pourover', 'Any of our single origin roasts brewed with a Kalita wave', '5');
    
    menuDiv.appendChild(menuHeader);
    menuDiv.appendChild(menuItems);

    menuArr.push(espresso);
    menuArr.push(cap);
    menuArr.push(latte);
    menuArr.push(hcLatte);
    menuArr.push(matchaLatte);
    menuArr.push(pourOver);

    // add menu items to div and add animation class
    function addMenuItem (element, index) {
        menuItems.appendChild(element);
        setTimeout(() => element.classList.add("animate"), index * 100);
    }

    menuArr.forEach(addMenuItem);

    /*
    menuItems.appendChild(espresso);
    menuItems.appendChild(cap);
    menuItems.appendChild(latte);
    menuItems.appendChild(hcLatte);
    menuItems.appendChild(matchaLatte);
    menuItems.appendChild(pourOver);
    */
    if (content.firstChild) {
        content.removeChild(content.firstChild)
    }
    content.appendChild(menuDiv);
}

export default menuLoad;