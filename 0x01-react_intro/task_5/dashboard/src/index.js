import './style.css';
import Logo from './alx_logo.png';

const root = document.getElementById('root');

const img = document.createElement('img');
img.src = Logo;
img.alt = 'ALX Logo';

const p = document.createElement('p');
p.textContent = 'Welcome to Webpack Dashboard!';

root.appendChild(img);
root.appendChild(p);

