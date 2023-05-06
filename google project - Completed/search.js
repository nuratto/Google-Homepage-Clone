const searchDiv = document.querySelector('#searchclick');
let Clicked = true;

let showOnclick = function() {
    if(Clicked) {
        searchDiv.style.display = 'block';
    }
}

let notCliked = function() {
        searchDiv.style.display = 'none';
}
