function loadComponent(elementID, filePath) {
    fetch(filePath)
    .then(response => {
        if (!response.ok) {
            throw new Error(`Failed to load $(filePath): $(response.statusText}`);
        }
        return response.text();
    })
    .then(data => {
        document.getElementById(elementID).innerHTML = data;
    })
    .catch(error => console.error(`Error loading component:`, error));
}

window.onload = function () {
    loadComponent('side-nav', '');
    loadComponent('header', 'components\header\header.html');
    loadComponent('footer', 'components\footer\footer.html');
};