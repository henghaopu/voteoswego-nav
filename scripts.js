const laptopScreenWidth = 768;

let dropDown = () => {
    //let element = event.target.nextElementSibling;
    let element = null;
    let title = event.target.title;
    switch (title) {
        case 'Menu':
        element = document.querySelector('#main-nav');
        break;
        case 'Voting Information':
        element = event.target.nextElementSibling;
        break;
    }
    if (element.style.display === "none" || element.style.display === "") {
        element.style.display = "block";
    } else {
        element.style.display = "none";
    }
}

let showMenuBar = () => {
    let mainNav = document.querySelector('#main-nav');
    let stickyDiv = document.querySelector('#main-header').parentElement;
    let blankSpace = document.querySelector('#blank-header-space');
    console.log(stickyDiv);
    if (window.outerWidth >= laptopScreenWidth) {
        mainNav.style.display = "block";
        stickyDiv.classList.remove('sticky');
        blankSpace.classList.remove('blank-space');
    } else if (window.outerWidth < laptopScreenWidth) {
        mainNav.style.display = "none";
        stickyDiv.classList.add('sticky');
        blankSpace.classList.add('blank-space');
    }
}

let isSticky = () => {
    let stickyDiv = document.querySelector('#main-header').parentElement;
    let blankSpace = document.querySelector('#blank-header-space');
    if (window.outerWidth < laptopScreenWidth) {
        stickyDiv.classList.add('sticky');
        blankSpace.classList.add('blank-space');
    } 
}