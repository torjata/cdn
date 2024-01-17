
var currentURL = window.location.href;
var pathArray = currentURL.split('/');
var filenameWithExtension = pathArray.pop();
var filename = filenameWithExtension.split('.')[0];

console.log(filename)
if (filename == 'index2' || filename == 'activities2') {
    const linkElement = document.createElement('link');
    linkElement.rel = 'stylesheet';
    linkElement.href = 'https://katak.me/cdn/core.css';
    document.head.appendChild(linkElement);
}
