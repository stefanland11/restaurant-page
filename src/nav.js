import {homepage} from './homepage';
import {menu} from './menu';
import {contact} from './contact';

function createNav () {
    
    const content = document.getElementById('content');
    const bar = document.createElement('div');
    bar.classList.add('bar');
    const homeButton = document.createElement('button');
    const menuButton = document.createElement('button');
    const contactButton = document.createElement('button');

    homeButton.classList.add('home');
    homeButton.textContent = 'Home';
    
    menuButton.classList.add('menu');
    menuButton.textContent = 'Menu';

    contactButton.classList.add('contact');
    contactButton.textContent = 'Contact';

    bar.appendChild(homeButton);
    bar.appendChild(menuButton);
    bar.appendChild(contactButton);

    content.appendChild(bar);


    homeButton.addEventListener('click', () => {
        document.querySelectorAll('.child').forEach(e => e.remove());
        console.log('ran');
        homepage();
    })

    menuButton.addEventListener('click', () => {
        document.querySelectorAll('.child').forEach(e => e.remove());
        menu();
    })

    contactButton.addEventListener('click', () => {
        document.querySelectorAll('.child').forEach(e => e.remove());
        contact();
    })

}



export {createNav};