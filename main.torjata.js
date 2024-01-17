var currentURL = window.location.href;
var pathArray = currentURL.split('/');
var filenameWithExtension = pathArray.pop();
var filename = filenameWithExtension.split('.')[0];

console.log(filename)
if (filename === 'index' || filename === 'activities') {
        const linkElement = document.createElement('link');
    linkElement.rel = 'stylesheet';
    linkElement.href = 'style/admin-template/admin-template/assets/vendor/fonts/boxicons.css';
    linkElement.id = 'core-stylesheet';
}
