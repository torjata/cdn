
var currentURL = window.location.href;
var pathArray = currentURL.split('/');
var filenameWithExtension = pathArray.pop();
var filename = filenameWithExtension.split('.')[0];

console.log(filename)
if (filename !== 'index' || filename !== 'activities') {
        const existingLink = document.getElementById('core-stylesheet');
    if (existingLink) {
        existingLink.remove();
}
