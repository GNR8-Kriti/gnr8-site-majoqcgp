// Add event listener to the search bar button
document.querySelector('.search-bar button').addEventListener('click', () => {
    // Get the search input value
    const searchValue = document.querySelector('.search-bar input').value;
    // Log the search value to the console
    console.log(searchValue);
});

// Add event listener to the hero button
document.querySelector('.hero-content button').addEventListener('click', () => {
    // Log a message to the console
    console.log('Hero button clicked');
});

// Add event listener to the window for scroll event
window.addEventListener('scroll', () => {
    // Get the current scroll position
    const scrollPosition = window.scrollY;
    // Log the scroll position to the console
    console.log(scrollPosition);
});