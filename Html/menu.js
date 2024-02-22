function showMenu() {
    let menu = document.getElementById('categories');
    menu.style.display = 'flex';

    menu.addEventListener('mouseleave', function () {
        menu.style.display = 'none';
    });
}
