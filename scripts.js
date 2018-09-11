var dropDownMenu = () => {
    
    var mainNav = document.querySelector('#main-nav');
    var mainNavSearch = document.querySelector('#main-nav-search');

    if (mainNav.style.display === "none" || mainNav.style.display === "") {
        mainNav.style.display = "block";
        mainNavSearch.style.display = "none";
    } else {
        mainNav.style.display = "none";
        mainNavSearch.style.display = "inline-block";
    }
}

var showMenu = () => {
    var mainNav = document.querySelector('#main-nav');
    if (window.outerWidth >= 800) {
        mainNav.style.display = "block";
        mainNavSearch.style.display = "inline-block";
    } else if (window.outerWidth < 800) {
        mainNav.style.display = "none";
        mainNavSearch.style.display = "none";
    }
}