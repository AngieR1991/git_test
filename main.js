const container = document.querySelector('#container');

const content = document.createElement('p');
content.textContent="Hi, Im p";

const content2 = document.createElement('H3');
content2.textContent="I'm a blue h3";
content2.style.cssText = "color:blue";





const content3 = document.createElement('div');
content3.style.cssText="border-color: black; border-style: solid; background-color:pink;";

const content4 = document.createElement('H1');
content4.textContent = "I'm in a div";

const content5 = document.createElement('p');
content5.textContent = "ME TOO!";

content3.appendChild(content4);
content3.appendChild(content5);








container.appendChild(content);
container.appendChild(content2);
container.appendChild(content3);
