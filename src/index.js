import menuLoad from './menu';
import pageLoad from './page-load';
import contactLoad from './contact';
import { createHtmlElement } from './utilities';

const pageContent = document.getElementById('content');
const tabBar = createHtmlElement('div', null, 'tab-bar');
const pageTitle = createHtmlElement('h1', `Roy Donk's Haus of Coffee`);
const tabDiv = createHtmlElement('div', null, 'tab-div');
const spacer = createHtmlElement('div', null, 'spacer');
const homeBtn = createHtmlElement('button', 'Home');
const menuBtn = createHtmlElement('button', 'Menu');
const contactBtn = createHtmlElement('button', 'Contact Us');
const content = createHtmlElement('div', null, 'content');

tabBar.appendChild(pageTitle);
tabBar.appendChild(tabDiv);
tabDiv.appendChild(homeBtn);
tabDiv.appendChild(menuBtn);
tabDiv.appendChild(contactBtn);
tabBar.appendChild(spacer);
pageContent.appendChild(tabBar);
pageContent.appendChild(content);

pageLoad();

menuBtn.addEventListener('click', menuLoad);
homeBtn.addEventListener('click', pageLoad);
contactBtn.addEventListener('click', contactLoad);

export { content };
